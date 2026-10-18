/* MISMUN 2026 — shared behaviour. Content lives in data.js. */
(function () {
  "use strict";

  var D = window.MISMUN || {};
  var C = D.conference || {};
  var L = D.links || {};
  var page = document.body.getAttribute("data-page") || "";

  // Site map: drives the nav, the mobile menu, home tiles and "next up" links.
  var PAGES = [
    { id: "home", href: "index.html", label: "Home" },
    { id: "about", href: "about.html", label: "About", desc: "What MISMUN is, the Liberty theme and where it all happens." },
    { id: "committees", href: "committees.html", label: "Committees", desc: "Every committee and the issues up for debate." },
    { id: "team", href: "team.html", label: "Team", desc: "The Secretariat plus the Admin, Tech and Press teams." },
    { id: "schedule", href: "schedule.html", label: "Schedule", desc: "Two days, session by session." },
    { id: "resources", href: "resources.html", label: "Resources", desc: "Rules of procedure, guides and research reports." },
    { id: "register", href: "register.html", label: "Register", desc: "Sign up as a delegate, or get in touch.", cta: true },
  ];

  /* ---------- helpers ---------- */
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function hash(str) {
    var h = 2166136261;
    for (var i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
    return h >>> 0;
  }
  function rng(seed) {
    return function () {
      seed = (seed + 0x6d2b79f5) | 0;
      var t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  // small, stable tilt for cards so the layout looks hand-pasted
  function tilt(i, max) {
    var r = rng(hash("tilt" + i + page))();
    return ((r * 2 - 1) * (max || 1.6)).toFixed(2) + "deg";
  }

  var ICON = {
    instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="1"/><path d="m3.5 6 8.5 7 8.5-7"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.6"/></svg>',
    doc: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M6 2.5h8.5L19 7v14.5H6z"/><path d="M14 2.5V7.5h5"/><path d="M8.8 12h7.4M8.8 15.2h7.4M8.8 18.4h4.6"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" aria-hidden="true"><path d="M4 12h15M13 6l6 6-6 6"/></svg>',
    silhouette: '<svg class="person__silhouette" viewBox="0 0 100 92" aria-hidden="true"><circle cx="50" cy="32" r="19" fill="currentColor"/><path d="M8 92c2-22 19-36 42-36s40 14 42 36z" fill="currentColor"/></svg>',
  };

  /* ---------- ransom-note lettering ---------- */
  function ransomize(el) {
    var text = el.textContent.replace(/\s+/g, " ").trim();
    if (!text) return;
    var keepCase = el.getAttribute("data-ransom") === "keep";
    var rand = rng(hash(text));
    var last = 0;
    var vis = document.createElement("span");
    vis.className = "ransom__vis";
    vis.setAttribute("aria-hidden", "true");
    text.split(" ").forEach(function (word) {
      var w = document.createElement("span");
      w.className = "w";
      Array.prototype.forEach.call(word, function (ch, i) {
        var v;
        do { v = 1 + Math.floor(rand() * 8); } while (v === last);
        last = v;
        var c = ch;
        if (!keepCase && i > 0 && /[a-z]/i.test(ch) && rand() < 0.4) {
          c = rand() < 0.5 ? ch.toLowerCase() : ch.toUpperCase();
        }
        var l = document.createElement("span");
        l.className = "l v" + v;
        l.textContent = c;
        l.style.transform = "rotate(" + (rand() * 10 - 5).toFixed(1) + "deg) translateY(" + (rand() * 0.12 - 0.06).toFixed(2) + "em)";
        w.appendChild(l);
      });
      vis.appendChild(w);
    });
    var sr = document.createElement("span");
    sr.className = "sr-only";
    sr.textContent = text;
    el.textContent = "";
    el.appendChild(sr);
    el.appendChild(vis);
  }

  /* ---------- header, menu, footer ---------- */
  function navLinks(cls) {
    return PAGES.map(function (p) {
      var cur = p.id === page ? ' aria-current="page"' : "";
      var c = p.cta ? ' class="nav__cta"' : "";
      return '<li><a href="' + p.href + '"' + c + cur + ">" + esc(p.label) + "</a></li>";
    }).join("");
  }

  function brand() {
    return '<a class="brand" href="index.html" aria-label="MISMUN 2026 home">' +
      '<img src="assets/img/logo.webp" alt="" width="50" height="56">' +
      '<span class="brand__name">' + esc(C.name || "MISMUN") + '<span class="brand__year">' + esc(C.year || "") + "</span></span></a>";
  }

  function renderHeader() {
    var h = $("[data-header]");
    if (!h) return;
    h.innerHTML =
      '<div class="wrap site-header__inner">' + brand() +
      '<nav class="nav" aria-label="Main"><ul>' + navLinks() + "</ul></nav>" +
      '<button class="menu-btn" type="button" aria-expanded="false" aria-controls="site-menu">' +
      '<span class="menu-btn__bars" aria-hidden="true"><span></span><span></span><span></span></span>Menu</button></div>';

    var menu = document.createElement("div");
    menu.className = "menu";
    menu.id = "site-menu";
    menu.setAttribute("role", "dialog");
    menu.setAttribute("aria-modal", "true");
    menu.setAttribute("aria-label", "Site menu");
    menu.innerHTML =
      '<div class="menu__top">' + brand() +
      '<button class="menu-btn" type="button" data-close style="display:inline-flex">Close ✕</button></div>' +
      '<ul class="menu__list">' + navLinks() + "</ul>" +
      '<p class="menu__foot">' + esc(C.datesLabel) + " · " + esc(C.venue) +
      (L.instagram ? ' · <a href="' + esc(L.instagram) + '" target="_blank" rel="noopener">' + esc(L.instagramHandle) + "</a>" : "") + "</p>";
    h.insertAdjacentElement("afterend", menu);
    $$(".menu__list li", menu).forEach(function (li, i) { li.firstChild.style.setProperty("--r", (i % 2 ? 1.6 : -2.2) + "deg"); });

    var openBtn = $(".menu-btn", h);
    var closeBtn = $("[data-close]", menu);
    function open() {
      menu.classList.add("is-open");
      document.body.classList.add("menu-open");
      openBtn.setAttribute("aria-expanded", "true");
      closeBtn.focus();
    }
    function close() {
      menu.classList.remove("is-open");
      document.body.classList.remove("menu-open");
      openBtn.setAttribute("aria-expanded", "false");
      openBtn.focus();
    }
    openBtn.addEventListener("click", open);
    closeBtn.addEventListener("click", close);
    menu.addEventListener("keydown", function (e) {
      if (e.key === "Escape") close();
      if (e.key === "Tab") { // keep focus inside the open menu
        var f = $$("a, button", menu);
        var first = f[0], lastEl = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); lastEl.focus(); }
        else if (!e.shiftKey && document.activeElement === lastEl) { e.preventDefault(); first.focus(); }
      }
    });
  }

  function renderFooter() {
    var f = $("[data-footer]");
    if (!f) return;
    var contact = "";
    if (L.instagram) contact += '<li>' + ICON.instagram + '<a href="' + esc(L.instagram) + '" target="_blank" rel="noopener">' + esc(L.instagramHandle) + "</a></li>";
    if (L.email) contact += '<li>' + ICON.mail + '<a href="mailto:' + esc(L.email) + '">' + esc(L.email) + "</a></li>";
    contact += '<li>' + ICON.pin + '<a href="' + esc(C.mapsUrl) + '" target="_blank" rel="noopener">' + esc(C.venue) + "</a></li>";
    f.innerHTML =
      '<div class="wrap"><div class="footer__grid">' +
      '<div class="footer__brand"><img src="assets/img/logo.webp" alt="" width="84" height="94">' +
      '<div><p class="footer__name">' + esc(C.name) + " " + esc(C.year) + " · " + esc(C.theme) + "</p>" +
      '<p class="footer__tag">Model United Nations at ' + esc(C.venue) + ", " + esc(C.city) + "</p></div></div>" +
      '<div><h2 class="footer__h">Pages</h2><ul class="footer__links">' +
      PAGES.map(function (p) { return '<li><a href="' + p.href + '">' + esc(p.label) + "</a></li>"; }).join("") + "</ul></div>" +
      '<div><h2 class="footer__h">Find us</h2><ul class="footer__contact">' + contact + "</ul></div>" +
      "</div>" +
      '<div class="footer__base"><span>© ' + esc(C.year) + " " + esc(C.name) + "</span><span>" + esc(C.datesLabel) + "</span></div></div>";
  }

  function renderNext() {
    var n = $("[data-next]");
    if (!n) return;
    var i = PAGES.findIndex(function (p) { return p.id === page; });
    var nx = PAGES[(i + 1) % PAGES.length];
    if (nx.id === "home") nx = PAGES[1];
    n.innerHTML =
      '<div class="wrap"><a href="' + nx.href + '" class="shell" style="--r:-1.2deg">' +
      '<div class="scrap scrap--gold torn-tb"><span><span class="next__k">Next up</span>' +
      '<span class="next__v">' + esc(nx.label) + "</span></span>" +
      '<span class="next__arrow" aria-hidden="true">→</span></div></a></div>';
  }

  /* ---------- home ---------- */
  function renderTiles() {
    var t = $("[data-tiles]");
    if (!t) return;
    var looks = ["", "scrap--news", "scrap--lav", "scrap--gold", "scrap--news", "scrap--magenta"];
    t.innerHTML = PAGES.slice(1).map(function (p, i) {
      return '<a class="tile shell" href="' + p.href + '" style="--r:' + tilt(i, 1.8) + ";--tr:" + (i % 2 ? 4 : -5) + 'deg">' +
        '<div class="scrap torn-tb ' + looks[i % looks.length] + '" style="--tx:' + i * 70 + "px;--bx:" + i * 130 + 'px">' +
        '<span class="tile__num">No. 0' + (i + 1) + "</span>" +
        '<h3 class="tile__title">' + esc(p.label) + "</h3>" +
        '<p class="tile__desc">' + esc(p.desc) + "</p>" +
        '<span class="tile__go">Open</span></div></a>';
    }).join("");
  }

  function countdown() {
    var el = $("[data-countdown]");
    if (!el || !C.start) return;
    var start = new Date(C.start).getTime();
    var end = new Date(C.end || C.start).getTime();
    var units = { d: $('[data-unit="d"]', el), h: $('[data-unit="h"]', el), m: $('[data-unit="m"]', el), s: $('[data-unit="s"]', el) };
    var title = $("[data-countdown-title]");
    function pad(n) { return (n < 10 ? "0" : "") + n; }
    function tick() {
      var now = Date.now();
      var diff = Math.max(0, start - now);
      if (diff === 0) {
        title.textContent = now <= end ? "MISMUN is in session" : "Thank you, delegates";
        $(".countdown__units", el.parentNode).style.display = "none";
        return false;
      }
      var s = Math.floor(diff / 1000);
      units.d.textContent = pad(Math.floor(s / 86400));
      units.h.textContent = pad(Math.floor((s % 86400) / 3600));
      units.m.textContent = pad(Math.floor((s % 3600) / 60));
      units.s.textContent = pad(s % 60);
      return true;
    }
    if (tick()) {
      var id = setInterval(function () { if (!tick()) clearInterval(id); }, 1000);
    }
  }

  /* ---------- team ---------- */
  function personCard(p, i, extra) {
    var has = !!p.photo;
    var bp = [[20, 30], [70, 20], [40, 75], [85, 70], [10, 85], [55, 45]][i % 6];
    return '<article class="person shell taped ' + (extra || "") + '" style="--r:' + tilt(i + (extra || "").length, 2) + ";--tr:" + (i % 2 ? 5 : -4) + 'deg">' +
      '<div class="scrap" >' +
      '<div class="person__photo' + (has ? "" : " person__photo--empty") + '" style="--bp:' + bp[0] + "% " + bp[1] + '%">' +
      (has ? '<img src="' + esc(p.photo) + '" alt="' + esc(p.name) + '" loading="lazy">' : ICON.silhouette + '<span class="person__tag">Photo soon</span>') +
      "</div>" +
      '<h3 class="person__name">' + esc(p.name) + "</h3>" +
      '<p class="person__role">' + esc(p.role) + "</p>" +
      (p.crew ? '<p class="person__crew">' + esc(p.crew) + "</p>" : "") +
      "</div></article>";
  }

  function renderSecretariat() {
    var el = $("[data-secretariat]");
    if (!el || !D.secretariat) return;
    el.innerHTML = D.secretariat.map(function (p, i) { return personCard(p, i, "person--sec"); }).join("");
  }

  function rosters(t) {
    return (t.rosters || []).filter(function (g) { return g.names && g.names.length; }).map(function (g, i) {
      var names = g.names.slice().sort(function (a, b) { return a.localeCompare(b); });
      return '<details class="roster shell" style="--r:' + tilt(t.id.length + i, 0.5) + '">' +
        '<summary class="roster__toggle"><span>Meet the full ' + esc(g.name) + "</span>" +
        '<span class="roster__count">' + names.length + " members</span>" +
        '<span class="roster__icon" aria-hidden="true"></span></summary>' +
        '<div class="scrap scrap--news roster__body">' +
        (g.blurb ? '<p class="roster__blurb">' + esc(g.blurb) + "</p>" : "") +
        '<p class="committee__label">Members, A–Z</p>' +
        '<ol class="roster__list">' + names.map(function (n) { return "<li>" + esc(n) + "</li>"; }).join("") + "</ol>" +
        "</div></details>";
    }).join("");
  }

  function renderTeams() {
    var el = $("[data-teams]");
    if (!el || !D.teams) return;
    var tabs = '<div class="tabs" role="tablist" aria-label="Teams">' + D.teams.map(function (t, i) {
      return '<button class="tab" role="tab" type="button" id="tab-' + t.id + '" aria-controls="panel-' + t.id + '" aria-selected="' + (i === 0) + '" tabindex="' + (i === 0 ? 0 : -1) + '" style="--r:' + (i % 2 ? 1.5 : -1.5) + 'deg">' + esc(t.name) + "</button>";
    }).join("") + "</div>";
    var panels = D.teams.map(function (t, i) {
      return '<div class="tab-panel" role="tabpanel" id="panel-' + t.id + '" aria-labelledby="tab-' + t.id + '"' + (i === 0 ? "" : " hidden") + ">" +
        '<div class="team-head"><h3 class="h3"><span class="strip">' + esc(t.name) + "</span></h3><p>" + esc(t.blurb) + "</p></div>" +
        '<div class="people">' + t.members.map(function (p, j) { return personCard(p, j + i * 4); }).join("") + "</div>" + rosters(t) + "</div>";
    }).join("");
    el.innerHTML = tabs + panels;
  }

  /* ---------- committees ---------- */
  function renderCommittees() {
    var el = $("[data-committees]");
    if (!el || !D.committees) return;
    var anyTba = D.committees.some(function (c) { return c.tba; });
    var notice = $("[data-committee-notice]");
    if (notice) notice.hidden = !anyTba;
    var looks = ["", "scrap--news", "scrap--lav", "scrap--news"];
    el.innerHTML = D.committees.map(function (c, i) {
      return '<article class="committee shell' + (c.tba ? " committee--tba" : "") + '" style="--r:' + tilt(i, 1.2) + '">' +
        '<div class="scrap torn-tb ' + looks[i % looks.length] + '" style="--tx:' + i * 90 + "px;--bx:" + i * 150 + 'px">' +
        '<div class="committee__top"><span class="committee__abbr"><span class="strip">' + esc(c.abbr) + "</span></span>" +
        '<span class="committee__num">No. ' + (i + 1 < 10 ? "0" : "") + (i + 1) + "</span></div>" +
        '<h3 class="committee__name">' + esc(c.name) + "</h3>" +
        '<p class="committee__label">Issues on the agenda</p>' +
        '<ol class="issues">' + (c.issues || []).map(function (s) { return "<li>" + esc(s) + "</li>"; }).join("") + "</ol>" +
        "</div></article>";
    }).join("");
  }

  /* ---------- schedule ---------- */
  function renderSchedule() {
    var el = $("[data-schedule]");
    if (!el || !D.schedule) return;
    var prov = $("[data-provisional]");
    if (prov) prov.hidden = !D.scheduleProvisional;
    var tabs = '<div class="tabs" role="tablist" aria-label="Conference days">' + D.schedule.map(function (d, i) {
      return '<button class="tab" role="tab" type="button" id="tab-day' + i + '" aria-controls="panel-day' + i + '" aria-selected="' + (i === 0) + '" tabindex="' + (i === 0 ? 0 : -1) + '" style="--r:' + (i % 2 ? 1.5 : -1.5) + 'deg">' + esc(d.day) + "</button>";
    }).join("") + "</div>";
    var panels = D.schedule.map(function (d, i) {
      return '<div class="tab-panel" role="tabpanel" id="panel-day' + i + '" aria-labelledby="tab-day' + i + '"' + (i === 0 ? "" : " hidden") + ">" +
        '<div class="day-head"><h3 class="h3"><span class="strip">' + esc(d.day) + "</span></h3><p>" + esc(d.date) + "</p></div>" +
        '<ol class="timeline">' + d.items.map(function (it, j) {
          return '<li class="slot" style="--r:' + tilt(j + i * 10, 0.6) + '"><span class="slot__time">' + esc(it.time) + "</span>" +
            '<div class="slot__body"><p class="slot__title">' + esc(it.title) + "</p>" +
            (it.note ? '<p class="slot__note">' + esc(it.note) + "</p>" : "") + "</div></li>";
        }).join("") + "</ol></div>";
    }).join("");
    el.innerHTML = tabs + panels;
  }

  /* ---------- resources ---------- */
  function renderResources() {
    var el = $("[data-resources]");
    if (!el || !D.resources) return;
    var looks = ["", "scrap--news", "scrap--lav"];
    el.innerHTML = D.resources.map(function (r, i) {
      var btn = r.url
        ? '<a class="btn" href="' + esc(r.url) + '" target="_blank" rel="noopener">Open ' + ICON.arrow + "</a>"
        : '<span class="btn" aria-disabled="true">Coming soon</span>';
      return '<article class="resource shell" style="--r:' + tilt(i, 1.3) + '">' +
        '<div class="scrap torn-tb ' + looks[i % looks.length] + '" style="--tx:' + i * 60 + "px;--bx:" + i * 110 + 'px">' +
        '<span class="resource__icon">' + ICON.doc + "</span>" +
        '<h3 class="resource__title">' + esc(r.title) + "</h3>" +
        '<p class="resource__desc">' + esc(r.desc) + "</p>" + btn + "</div></article>";
    }).join("");
  }

  /* ---------- register / contact ---------- */
  function renderRegister() {
    var btn = $("[data-register-btn]");
    if (btn) {
      if (L.register) {
        btn.outerHTML = '<a class="btn" href="' + esc(L.register) + '" target="_blank" rel="noopener">Register now ' + ICON.arrow + "</a>";
      } else {
        btn.outerHTML = '<span class="btn" aria-disabled="true">Registration opens soon</span>';
      }
    }
    var el = $("[data-contacts]");
    if (!el) return;
    var cards = [
      {
        icon: ICON.instagram, k: "Instagram", v: L.instagramHandle || "Coming soon",
        btn: L.instagram ? '<a class="btn btn--paper" href="' + esc(L.instagram) + '" target="_blank" rel="noopener">Follow us ' + ICON.arrow + "</a>" : "",
        look: "scrap--magenta",
      },
      {
        icon: ICON.mail, k: "Email", v: L.email || "Coming soon",
        btn: L.email ? '<a class="btn" href="mailto:' + esc(L.email) + '">Send an email ' + ICON.arrow + "</a>" : '<span class="btn" aria-disabled="true">Coming soon</span>',
        look: "",
      },
      {
        icon: ICON.pin, k: "Venue", v: C.venue,
        btn: '<a class="btn btn--gold" href="' + esc(C.mapsUrl) + '" target="_blank" rel="noopener">Get directions ' + ICON.arrow + "</a>",
        look: "scrap--news",
      },
    ];
    el.innerHTML = cards.map(function (c, i) {
      return '<article class="contact shell" style="--r:' + tilt(i, 1.4) + '">' +
        '<div class="scrap torn-tb ' + c.look + '" style="--tx:' + i * 80 + "px;--bx:" + i * 140 + 'px">' +
        '<span class="contact__icon">' + c.icon + "</span>" +
        '<p class="contact__k">' + esc(c.k) + "</p>" +
        '<p class="contact__v">' + esc(c.v) + "</p>" + c.btn + "</div></article>";
    }).join("");
  }

  /* ---------- accessible tabs ---------- */
  function initTabs() {
    $$('[role="tablist"]').forEach(function (list) {
      var tabs = $$('[role="tab"]', list);
      function select(tab) {
        tabs.forEach(function (t) {
          var on = t === tab;
          t.setAttribute("aria-selected", on);
          t.tabIndex = on ? 0 : -1;
          document.getElementById(t.getAttribute("aria-controls")).hidden = !on;
        });
      }
      tabs.forEach(function (t, i) {
        t.addEventListener("click", function () { select(t); });
        t.addEventListener("keydown", function (e) {
          var k = e.key, n = null;
          if (k === "ArrowRight") n = tabs[(i + 1) % tabs.length];
          if (k === "ArrowLeft") n = tabs[(i - 1 + tabs.length) % tabs.length];
          if (k === "Home") n = tabs[0];
          if (k === "End") n = tabs[tabs.length - 1];
          if (n) { e.preventDefault(); select(n); n.focus(); }
        });
      });
    });
  }

  /* ---------- fill simple bindings ---------- */
  function bindText() {
    var map = {
      dates: C.datesLabel, datesShort: C.datesShort, venue: C.venue, venueDetail: C.venueDetail,
      city: C.city, year: C.year, theme: C.theme, instagram: L.instagramHandle,
    };
    $$("[data-bind]").forEach(function (el) {
      var v = map[el.getAttribute("data-bind")];
      if (v) el.textContent = v;
    });
    $$("[data-href]").forEach(function (el) {
      var k = el.getAttribute("data-href");
      var v = k === "maps" ? C.mapsUrl : L[k];
      if (v) el.setAttribute("href", v);
    });
  }

  renderHeader();
  renderFooter();
  renderNext();
  renderTiles();
  renderSecretariat();
  renderTeams();
  renderCommittees();
  renderSchedule();
  renderResources();
  renderRegister();
  bindText();
  $$("[data-ransom]").forEach(ransomize);
  initTabs();
  countdown();
})();

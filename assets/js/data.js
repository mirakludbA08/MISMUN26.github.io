/* ==========================================================================
   MISMUN 2026 — SITE CONTENT
   --------------------------------------------------------------------------
   Edit this file to update names, roles, committees, the schedule and links.
   Every page reads from here, so you only change things once.

   - Leave a link as "" (empty) and the site shows "Coming soon" instead.
   - To add a team photo, put the image in assets/img/team/ and set
     photo: "assets/img/team/your-file.jpg". Leave photo: "" for a placeholder.
   ========================================================================== */

window.MISMUN = {
  conference: {
    name: "MISMUN",
    year: "2026",
    theme: "Liberty",
    datesLabel: "3–4 December 2026",
    datesShort: "Dec 3–4",
    // Countdown target (Qatar time, UTC+3): Day One arrival to the end of Day Two.
    start: "2026-12-03T15:30:00+03:00",
    end: "2026-12-04T19:30:00+03:00",
    venue: "Mesaieed International School",
    venueDetail: "Secondary Branch",
    city: "Mesaieed, Qatar",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Mesaieed+International+School+Secondary+Mesaieed+Qatar",
  },

  links: {
    instagram: "https://www.instagram.com/mismunqa/",
    instagramHandle: "@mismunqa",
    email: "",    // e.g. "mismun@example.com"
  },

  /* ---- THE BIG 5 (Secretariat) ----------------------------------------- */
  // In order of seniority: each card is drawn a step smaller than the last.
  // Optional scale (e.g. 0.6) overrides a card's size; 1 = the largest card.
  secretariat: [
    { role: "Secretary General", name: "Ayan Mohamed", photo: "assets/img/team/ayan-mohamed.webp" },
    { role: "Deputy Secretary General", name: "Rishi Sharma", photo: "assets/img/team/rishi-sharma.webp" },
    { role: "President", name: "Helen", photo: "assets/img/team/helen.webp" },
    { role: "Deputy President", name: "Ammar Bin Khalid", photo: "assets/img/team/ammar-bin-khalid.webp" },
    { role: "Deputy President", name: "Saffiyah", photo: "assets/img/team/saffiyah.webp", scale: 0.6 },
  ],

  /* ---- TEAMS: 2 heads + 2 deputy heads each ---------------------------- */
  // Optional rosters: the rest of the team, one drop-down per group under the
  // head cards (names are shown A–Z). Leave it out, or empty, for none.
  teams: [
    {
      id: "admin",
      name: "Admin Team",
      blurb: "Logistics, delegate support and keeping every session running on time.",
      tags: ["“Keeping it organised”", "Adminteam"], // pink labels on the team poster
      members: [
        { role: "Head of Admin", name: "Muhammad Armaghan", photo: "assets/img/team/muhammad-armaghan.webp" },
        { role: "Head of Admin", name: "Stefhanie Marie Cabanlong", photo: "assets/img/team/stefhanie-marie-cabanlong.webp" },
        { role: "Deputy Head of Admin", name: "Muhammad Subhaan Kashif", photo: "assets/img/team/muhammad-subhaan-kashif.webp" },
        { role: "Deputy Head of Admin", name: "Hafsa Aamer", photo: "assets/img/team/hafsa-aamer.webp" },
      ],
      rosters: [
        {
          name: "Admin Team",
          names: [
            // Y11
            "Halima Tahir", "Abdul Mateen Anjum", "Aida Shafa Anggraini", "Bernice Nanor",
            "Vanessa Addy", "Rokaya Elgedawy", "Muhammad Azfar Afraz", "Fatima Soomro",
            "Reemas Khalifah Alhajaj", "Enayah Anuj",
            // Y12
            "Iman Moodley", "Muhammad Ghazy Fawwaz Arkan", "Yusuf Peerbhai", "Yusraa Peerbhai",
            "Nuha Mashood", "Benedict Seth Esmaya Mabulay", "Miral Hazem Samy Mohamed Abourayan",
            "Catherine Efua Yamoah", "Nur Qaisara Damia Binti Abdul Jabar", "Haneen Elraei",
            "Ofentse Mosethe", "Mariam Guab Yaziji", "Muaaz Hasham Khan", "Yan Wiriamo Macamo",
            "Anoosh Khan", "Ali Nauman",
            // Y13
            "Muhammad Ibrahim", "Zahra Usman", "Hafsa Soomro", "Jeira Cortez", "Caroline Addy",
            "Kingsley Prah Annan", "Remarne Valentine Smith",
          ],
        },
      ],
    },
    {
      id: "tech",
      name: "Tech Team",
      blurb: "The website, the Wi-Fi and everything with a plug.",
      tags: ["Techteam", "Dreamteam"],
      members: [
        { role: "Head of Tech", name: "AbdulKarim Tahir", photo: "assets/img/team/abdulkarim-tahir.webp" },
        { role: "Head of Tech", name: "Fathy Rizq", photo: "assets/img/team/fathy-rizq.webp" },
        { role: "Deputy Head of Tech", name: "Ibrahim Dar", photo: "assets/img/team/ibrahim-dar.webp" },
        { role: "Deputy Head of Tech", name: "Manal Ahmed", photo: "assets/img/team/manal-ahmed.webp" },
      ],
      rosters: [
        {
          name: "Tech Team",
          names: [
            "Haniya Ahmed", "Nahyan Shaikh", "Shaheer Abbas", "Aidyn Fateen", "Juan Abdul Hamed",
            "Bakhthawar Hayat", "Momin Cheema", "Abarka", "Ziyan Afzal", "Luqman",
            "Abdullah Sattar", "Abdulla Amer", "Hassan Raza",
          ],
        },
      ],
    },
    {
      id: "press",
      name: "Press Team",
      blurb: "Photos, coverage and the stories that come out of every committee room.",
      tags: ["Pressteam", "Bestteam!"],
      members: [
        { role: "Head of Press", name: "Yunus Afandi", photo: "assets/img/team/yunus-afandi.webp" },
        { role: "Head of Press", name: "Hafshah Susanto", photo: "assets/img/team/hafshah-susanto.webp" },
        { role: "Deputy Head of Press", name: "Arnold Ivann Galang", photo: "assets/img/team/arnold-ivann-galang.webp" },
        { role: "Deputy Head of Press", name: "Dhiya Putri", photo: "assets/img/team/dhiya-putri.webp" },
      ],
      rosters: [
        {
          name: "Press Team",
          names: [
            "Amilia Shahzad", "Idrees Manahil", "Labibah Zahid", "Nadhifa Azzalfa Fiad Adi",
            "Fatima Rasheeda Noor Eka", "Yumna Hasanah", "Aisyah Andini", "Rahisya Haris",
            "Elsie Kelly", "Hafidzah Aulia Salsabila", "Julia Ena Poniente Bernardo",
            "Nabila Fairuz Jejen", "Michael Pineda Herrera", "Jaren Yahael Lawrence",
            "Andhiny Alfrissa", "Una Belissa Rivera", "Ghazala Arum", "Siluni Hapuarachchilage",
            "Aisy Yumna", "Yaqtan Imran",
          ],
        },
      ],
    },
  ],

  /* ---- COMMITTEES & ISSUES --------------------------------------------- */
  // Set tba: true on placeholder entries; remove it when the real info is in.
  committees: [
    { abbr: "TBA", name: "Committee name", issues: ["Issue 1", "Issue 2"], tba: true },
    { abbr: "TBA", name: "Committee name", issues: ["Issue 1", "Issue 2"], tba: true },
    { abbr: "TBA", name: "Committee name", issues: ["Issue 1", "Issue 2"], tba: true },
    { abbr: "TBA", name: "Committee name", issues: ["Issue 1", "Issue 2"], tba: true },
  ],

  /* ---- SCHEDULE ---------------------------------------------------------- */
  // Each row: time, title (the procedure), location. An optional note shows
  // under the title. Set scheduleProvisional to true to show a "not final" sticker.
  scheduleProvisional: false,
  schedule: [
    {
      day: "Day One",
      weekday: "Thursday",
      weekdayShort: "Thu",
      date: "3 December 2026",
      dateShort: "Dec 3",
      items: [
        { time: "3:30 PM – 4:30 PM", title: "Arrival", location: "Main Hall" },
        { time: "4:30 PM – 5:00 PM", title: "Opening Ceremony", location: "Main Hall" },
        { time: "5:00 PM – 7:30 PM", title: "Lobbying & Registration", location: "Committee Rooms" },
      ],
    },
    {
      day: "Day Two",
      weekday: "Friday",
      weekdayShort: "Fri",
      date: "4 December 2026",
      dateShort: "Dec 4",
      items: [
        { time: "8:00 AM – 8:30 AM", title: "Arrival & Breakfast", location: "Main Hall" },
        { time: "8:30 AM – 10:00 AM", title: "Committee Session 1", location: "Committee Rooms" },
        { time: "10:15 AM – 11:30 AM", title: "Committee Session 2", location: "Committee Rooms" },
        { time: "11:30 AM – 12:15 PM", title: "Prayer Time", location: "Sixth Form Centre" },
        { time: "12:15 PM – 1:15 PM", title: "Lunch", location: "Main Hall" },
        { time: "1:15 PM – 2:30 PM", title: "Committee Session 3", location: "Committee Rooms" },
        { time: "2:30 PM – 4:30 PM", title: "Committee Session 4", location: "Committee Rooms" },
        { time: "4:30 PM – 5:30 PM", title: "Closing Ceremony", location: "Main Hall" },
        { time: "5:30 PM – 7:30 PM", title: "Dinner & Performance", location: "Main Hall" },
      ],
    },
  ],

  /* ---- RESOURCES -------------------------------------------------------- */
  resources: [
    { title: "Rules of Procedure", desc: "How debate works: points, motions, voting and speaking time.", url: "" },
    { title: "Position Paper Guide", desc: "How to research your country and write a strong position paper.", url: "" },
    { title: "Resolution Writing Guide", desc: "Format, preambulatory and operative clauses, with examples.", url: "" },
    { title: "Research Reports", desc: "Background reading for every issue on the agenda.", url: "" },
    { title: "Delegate Handbook", desc: "Everything about the two days, in one document.", url: "" },
    { title: "Dress Code", desc: "What to wear in committee.", url: "" },
  ],
};

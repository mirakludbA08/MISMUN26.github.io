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
    // Countdown target (Qatar time, UTC+3). Change the time once it is confirmed.
    start: "2026-12-03T08:00:00+03:00",
    end: "2026-12-04T18:00:00+03:00",
    venue: "Mesaieed International School",
    venueDetail: "Secondary Branch",
    city: "Mesaieed, Qatar",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Mesaieed+International+School+Secondary+Mesaieed+Qatar",
  },

  links: {
    instagram: "https://www.instagram.com/mismunqa/",
    instagramHandle: "@mismunqa",
    register: "", // e.g. a Google Form link
    email: "",    // e.g. "mismun@example.com"
  },

  /* ---- THE BIG 5 (Secretariat) ----------------------------------------- */
  // In order of seniority: each card is drawn a step smaller than the last.
  // Optional scale (e.g. 0.6) overrides a card's size; 1 = the largest card.
  secretariat: [
    { role: "Secretary General", name: "Ayan Mohamed", photo: "" },
    { role: "Deputy Secretary General", name: "Rishi Sharma", photo: "" },
    { role: "President", name: "Helen", photo: "" },
    { role: "Deputy President", name: "Ammar Bin Khalid", photo: "" },
    { role: "Deputy President", name: "Saffiyah", photo: "", scale: 0.6 },
  ],

  /* ---- TEAMS: 2 heads + 2 deputy heads each ---------------------------- */
  // Optional rosters: the rest of the team, one drop-down per group under the
  // head cards (names are shown A–Z). Leave it out, or empty, for none.
  // Optional crew: a small tag under a person's role, e.g. crew: "Digital".
  teams: [
    {
      id: "admin",
      name: "Admin Team",
      blurb: "Logistics, delegate support and keeping every session running on time.",
      members: [
        { role: "Head of Admin", name: "Muhammad Armaghan", photo: "" },
        { role: "Head of Admin", name: "Stefhanie Marie Cabanlong", photo: "" },
        { role: "Deputy Head of Admin", name: "Muhammad Subhaan Kashif", photo: "" },
        { role: "Deputy Head of Admin", name: "Hafsa Aamer", photo: "" },
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
      members: [
        { role: "Head of Tech", crew: "Digital", name: "AbdulKarim Tahir", photo: "" },
        { role: "Head of Tech", crew: "Digital", name: "Fathy Rizq", photo: "" },
        { role: "Deputy Head of Tech", crew: "Live Ops", name: "Ibrahim Dar", photo: "" },
        { role: "Deputy Head of Tech", crew: "Live Ops", name: "Manal Ahmed", photo: "" },
      ],
      rosters: [
        {
          name: "Digital Team",
          blurb: "Led by the Heads of Tech. Builds the MISMUN website, designs its artwork and runs the server that hosts it.",
          names: ["Luqman", "Ziyan Afzal", "Haniya Ahmed", "Nahyan Shaikh", "Shaheer Abbas"],
        },
        {
          name: "Live Ops Team",
          blurb: "Led by the Deputy Heads of Tech. Sets up the conference Wi-Fi and fixes connection and technical issues in every committee room.",
          names: [
            "Juan Abdul Hamed", "Bakhthawar Hayat", "Aidyn Fateen", "Momin Cheema",
            "Abarka", "Abdullah Sattar", "Abdulla Amer", "Hassan Raza",
          ],
        },
      ],
    },
    {
      id: "press",
      name: "Press Team",
      blurb: "Photos, coverage and the stories that come out of every committee room.",
      members: [
        { role: "Head of Press", name: "Name TBA", photo: "" },
        { role: "Head of Press", name: "Name TBA", photo: "" },
        { role: "Deputy Head of Press", name: "Name TBA", photo: "" },
        { role: "Deputy Head of Press", name: "Name TBA", photo: "" },
      ],
    },
  ],

  /* ---- COMMITTEES & ISSUES --------------------------------------------- */
  // Set tba: true on placeholder entries; remove it when the real info is in.
  committees: [
    { abbr: "TBA", name: "Committee to be announced", issues: ["Issue to be announced", "Issue to be announced"], tba: true },
    { abbr: "TBA", name: "Committee to be announced", issues: ["Issue to be announced", "Issue to be announced"], tba: true },
    { abbr: "TBA", name: "Committee to be announced", issues: ["Issue to be announced", "Issue to be announced"], tba: true },
    { abbr: "TBA", name: "Committee to be announced", issues: ["Issue to be announced", "Issue to be announced"], tba: true },
  ],

  /* ---- SCHEDULE (provisional) ------------------------------------------ */
  scheduleProvisional: true, // set to false once timings are final
  schedule: [
    {
      day: "Day 1",
      date: "Thursday 3 December",
      items: [
        { time: "TBA", title: "Registration & check-in", note: "Collect your badge and placard." },
        { time: "TBA", title: "Opening ceremony", note: "" },
        { time: "TBA", title: "Committee session I", note: "Lobbying and opening speeches." },
        { time: "TBA", title: "Break", note: "" },
        { time: "TBA", title: "Committee session II", note: "" },
        { time: "TBA", title: "Lunch", note: "" },
        { time: "TBA", title: "Committee session III", note: "" },
      ],
    },
    {
      day: "Day 2",
      date: "Friday 4 December",
      items: [
        { time: "TBA", title: "Committee session IV", note: "" },
        { time: "TBA", title: "Break", note: "" },
        { time: "TBA", title: "Committee session V", note: "Final debate and voting." },
        { time: "TBA", title: "Lunch", note: "" },
        { time: "TBA", title: "Closing ceremony & awards", note: "" },
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

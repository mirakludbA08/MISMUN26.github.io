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
  secretariat: [
    { role: "Role TBA", name: "Name TBA", photo: "" },
    { role: "Role TBA", name: "Name TBA", photo: "" },
    { role: "Role TBA", name: "Name TBA", photo: "" },
    { role: "Role TBA", name: "Name TBA", photo: "" },
    { role: "Role TBA", name: "Name TBA", photo: "" },
  ],

  /* ---- TEAMS: 2 heads + 2 deputy heads each ---------------------------- */
  teams: [
    {
      id: "admin",
      name: "Admin Team",
      blurb: "Logistics, delegate support and keeping every session running on time.",
      members: [
        { role: "Head of Admin", name: "Name TBA", photo: "" },
        { role: "Head of Admin", name: "Name TBA", photo: "" },
        { role: "Deputy Head of Admin", name: "Name TBA", photo: "" },
        { role: "Deputy Head of Admin", name: "Name TBA", photo: "" },
      ],
    },
    {
      id: "tech",
      name: "Tech Team",
      blurb: "The website, sound, screens and everything with a plug.",
      members: [
        { role: "Head of Tech", name: "Name TBA", photo: "" },
        { role: "Head of Tech", name: "Name TBA", photo: "" },
        { role: "Deputy Head of Tech", name: "Name TBA", photo: "" },
        { role: "Deputy Head of Tech", name: "Name TBA", photo: "" },
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

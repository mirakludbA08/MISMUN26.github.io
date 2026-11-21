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
  // In order of seniority. All five cards are drawn the same size.
  secretariat: [
    { role: "Secretary General", name: "Ayan Mohammad", photo: "assets/img/team/ayan-mohamed.webp" },
    { role: "Deputy Secretary General", name: "Rishi Sharma", photo: "assets/img/team/rishi-sharma.webp" },
    { role: "President", name: "Helen Mangue", photo: "assets/img/team/helen.webp" },
    { role: "Deputy President", name: "Ammar Bin Khalid", photo: "assets/img/team/ammar-bin-khalid.webp" },
    { role: "Deputy President", name: "Safiyah Mekawy", photo: "assets/img/team/saffiyah.webp" },
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
        { role: "Head of Tech", name: "Fathy Rizk", photo: "assets/img/team/fathy-rizk.webp" },
        { role: "Deputy Head of Tech", name: "Ibrahim Dar", photo: "assets/img/team/ibrahim-dar.webp" },
        { role: "Deputy Head of Tech", name: "Manal Ahmed", photo: "assets/img/team/manal-ahmed.webp" },
      ],
      rosters: [
        {
          name: "Tech Team",
          names: [
            "Haniya Ahmed", "Nahyan Shaikh", "Shaheer Abbas", "Momin Cheema",
            "Bakthawar Hayat", "Abarka", "Ziyan Afzal", "Luqman",
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
            "Aisy Yumna", "Yaqtan Imran", "Thea Edades", "Nhyira Ama Afful",
          ],
        },
      ],
    },
  ],

  /* ---- COMMITTEES, CHAIRS, ISSUES & RESEARCH REPORTS -------------------- */
  // focus: optional subtitle (used for the General Assembly committees).
  // school: the chair's school, shown as a small tag; leave "" for MIS.
  // issues: { title, report } each. report is the link to that issue's
  // research report; the Resources page lists every report from here.
  // Leave report as "" and its button says "Coming soon". While a committee
  // has no issues its card says "To be announced".
  committees: [
    {
      abbr: "GA1", name: "General Assembly First Committee", focus: "Disarmament and International Security",
      chairs: [{ role: "Head Chair", name: "Rulan Rossouw", school: "OIS" }, { role: "Deputy Chair", name: "Ayaan Atif", school: "" }],
      issues: [
        { title: "Addressing the Use of Economic Interdependence as a Tool of Geopolitical Influence", report: "https://docs.google.com/document/d/1Gf4WsHOevKoiC8PLtm2rVNogyEJgwExeDwLpgy5V-9o/edit" },
        { title: "Protecting Critical Infrastructure during Armed Conflict", report: "https://drive.google.com/file/d/1kQW0UJfVwq3Pr39p--FIdgerBHQ898BL/view" },
      ],
    },
    {
      abbr: "SC", name: "Security Council",
      chairs: [{ role: "Head Chair", name: "Aarna Kalakoti", school: "OIS" }, { role: "Deputy Chair", name: "Muhammad Shaheer", school: "" }],
      issues: [
        { title: "Balancing National Sovereignty, Civil Liberties and Security during Counterterrorism Operations and Armed Conflict", report: "https://docs.google.com/document/d/1ZHRt8ZLs8Eb73NobUJiaq8KZO8QIlTOKpKJq0XZX4Q4/edit" },
        { title: "Addressing the Humanitarian Consequences of Armed Conflicts, Natural Disasters and State Fragility", report: "https://docs.google.com/document/d/1JbaheEvQH1OY_mTg5Y0Qq2ZZgtCwuUohM8QpQWlQ1Ic/edit" },
      ],
    },
    {
      abbr: "UNESCO", name: "United Nations Educational, Scientific and Cultural Organization",
      chairs: [{ role: "Head Chair", name: "Zainab Ali", school: "" }, { role: "Deputy Chair", name: "Maryam Killikot", school: "" }],
      issues: [
        { title: "Safeguarding Academic Freedom and Supporting Safe, Inclusive Learning Environments", report: "https://docs.google.com/document/d/1_EEcuPhI02-mCsr1aw-jLYNGQaWesCBxEslnpBOt7oU/edit" },
        { title: "Protecting Cultural Expression and Safeguarding the Languages and Heritage of Indigenous and Minority Communities", report: "https://docs.google.com/document/d/1oslFqaBrqk0Q447dBbfa7fXgCmkRZ6lb319zkxXbs3Q/edit" },
      ],
    },
    {
      abbr: "HRC", name: "Human Rights Council",
      chairs: [{ role: "Head Chair", name: "Nicole Claudio", school: "OIS" }, { role: "Deputy Chair", name: "Muhammad Ali Khan", school: "" }],
      issues: [
        { title: "Protecting Freedom of Expression and Civil Liberties in the Digital Age", report: "https://docs.google.com/document/d/1FFfohHWx1ATA5dAhgo21ytCNXeLB0BhlLZFvHhcNLAA/edit" },
        { title: "Protecting Fundamental Human Rights in the Use of Detention and Criminal Justice Measures", report: "https://docs.google.com/document/d/1SwoZRPMO0QNwsqO6Rr5OgFy60vYUu0iSuonCTeEOq10/edit" },
      ],
    },
    {
      abbr: "UNCSW", name: "Commission on the Status of Women",
      chairs: [{ role: "Head Chair", name: "Abdelrahman Amr Ayad", school: "NIA" }, { role: "Deputy Chair", name: "Noor ul Ain Sajid", school: "" }],
      issues: [
        { title: "Promoting Women’s Participation in Public Life and Decision-Making", report: "https://docs.google.com/document/d/1uAVy05VVua99fEBMavCYrhCD5F5EEfz-rfaGMv6fbSM/edit" },
        { title: "Advancing the Protection of Women’s Rights while Recognising Diverse Legal and Cultural Contexts", report: "https://docs.google.com/document/d/1AvdwtKsGCacuA8V6qz0T_GDFaSS9WQHg7wce9GRbV4c/edit" },
      ],
    },
    {
      abbr: "CCPCJ", name: "Commission on Crime Prevention and Criminal Justice",
      chairs: [{ role: "Head Chair", name: "Zohaa Fahad", school: "" }, { role: "Deputy Chair", name: "Chinmayee Kothekar", school: "DES" }],
      issues: [
        { title: "Protecting Civil Liberties while Combating Transnational Organized Crime and Terrorism", report: "https://docs.google.com/document/d/1xXP-IYHd7Z86hUkavCnEaGRjkP0gLvxE0w8glbCOjKc/edit" },
        { title: "Promoting Fair and Independent Criminal Justice Systems while Protecting Fundamental Rights", report: "https://docs.google.com/document/d/1EHgSP8CtsqtYDTOFwyHvhDi9z9rIJTwTNw_LPHx8wgk/edit" },
      ],
    },
    {
      abbr: "ECOSOC", name: "Economic and Social Council",
      chairs: [{ role: "Head Chair", name: "Zaidhan Sakkir", school: "" }, { role: "Deputy Chair", name: "Momin Cheema", school: "" }],
      issues: [
        { title: "Promoting Economic Independence and Equal Opportunity for Marginalized Communities", report: "https://docs.google.com/document/d/1f9UQv6aHS3yo-6kQjyZh8Uf-N3reV27SXtkLebP6yl4/edit" },
        { title: "Combating Forced Labour and Economic Exploitation in Global Supply Chains", report: "https://docs.google.com/document/d/132wuUDCmiPKpqX-ZPu5MO2KBUDmy5D4UBOn_Ye7dW4M/edit" },
      ],
    },
    {
      abbr: "UNICEF", name: "United Nations Children’s Fund",
      chairs: [{ role: "Head Chair", name: "Fakiha Tajelli", school: "AKIS" }, { role: "Deputy Chair", name: "Youssef Zaitoun", school: "" }],
      issues: [
        { title: "Protecting Children’s Access to Education in Conflict and Humanitarian Emergencies", report: "https://docs.google.com/document/d/1DRcXRs56lCxLgbXXqg_Vh-9FpxKG6JS0wErs09DBWh4/edit" },
        { title: "Balancing Parental Responsibility, State Obligations and the Rights and Wellbeing of Children", report: "https://docs.google.com/document/d/13f4JwblatmOEXXrmQiwgc1StMezIOg1fGtsXxVn4yT0/edit" },
      ],
    },
    {
      abbr: "GA2", name: "General Assembly Second Committee", focus: "Economic and Financial",
      chairs: [{ role: "Head Chair", name: "Sahana Hareesh", school: "OIS" }, { role: "Deputy Chair", name: "Hafy Adrymansyah", school: "" }],
      issues: [
        { title: "Strengthening Economic Resilience and Protecting Essential Services in Debt-Distressed Economies", report: "https://docs.google.com/document/d/15wwoYad7yfIs11EpUMMQ355IUjwpSujkUOhIz7GqGgM/edit" },
        { title: "Addressing Structural Inequalities in Global Borrowing and Promoting Sustainable Debt Management", report: "https://docs.google.com/document/d/1faG5cH3XhtWFxuRRQegxdikcoW0ZbsNWCa5_ouJYpIU/edit" },
      ],
    },
    {
      abbr: "GA4", name: "General Assembly Fourth Committee", focus: "Special Political and Decolonization",
      chairs: [{ role: "Head Chair", name: "Manha Khan", school: "OIS" }, { role: "Deputy Chair", name: "Abdullah Hassan Khan", school: "" }],
      issues: [
        { title: "Examining the Role of International and Regional Cooperation in Prolonged Conflicts", report: "https://docs.google.com/document/d/1YLN6OFFBmlxwKby7fSVmmVTy1ZTrSgUHM_6gbVUAR8I/edit" },
        { title: "Addressing the Impact of Terrorism and Armed Conflict on Self-Determination, Liberty and Civilian Security", report: "https://docs.google.com/document/d/1g0rmwKnEF8YYg5O93UOp5T-rSLKZAgNI--mMN_o6Lo4/edit" },
      ],
    },
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
        { time: "3:30 PM – 4:00 PM", title: "Arrival", location: "Main Hall" },
        { time: "4:00 PM – 4:30 PM", title: "Opening Ceremony", location: "Main Hall" },
        { time: "5:00 PM – 7:00 PM", title: "Lobbying & Registration", location: "Committee Rooms" },
      ],
    },
    {
      day: "Day Two",
      weekday: "Friday",
      weekdayShort: "Fri",
      date: "4 December 2026",
      dateShort: "Dec 4",
      items: [
        { time: "8:00 AM – 8:45 AM", title: "Arrival & Breakfast", location: "Main Hall" },
        { time: "8:45 AM – 10:00 AM", title: "Committee Session 1", location: "Committee Rooms" },
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
};

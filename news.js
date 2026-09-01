const NEWS_ITEMS = [
  `<strong>[Aug 2026]</strong> I'm serving as a Reviewer for the <a href="https://sites.google.com/wimlworkshop.org/wimlworkshopneurips2026/home" target="_blank">Women in Machine Learning (WiML) Workshop</a>, co-located with NeurIPS 2026.`,

  `<strong>[Mar 2026]</strong> I served as a Reviewer for <a href="https://indabaxng.github.io/" target="_blank"> IndabaX Nigeria </a> 2026 Conference </a>.`,

  `<strong>[May 2026]</strong> Gave a talk, <em>"RESTLocator: Fault Localization for Defects in REST API Systems,"</em> at the <a href="https://pnwplse.org/" target="_blank">Pacific Northwest Programming Languages and Software Engineering (PNW PLSE)</a> workshop, University of Washington, USA. <a href="https://youtu.be/aaDhAIXkPv0?si=Y2x2_wCSFusAh_cY" target="_blank">Watch the talk</a>.`,

  `<strong>[May 2026]</strong> Won 1st place in the Social Impact track at <a href="https://beaverhacks.org/" target="_blank">BeaverHacks</a>, Oregon's largest hackathon, with <strong>SpeakAbroad</strong>, a platform I built to help international students practice real-life conversational scenarios. <a href="http://judge.beaverhacks.org" target="_blank">See the project</a> · <a href="https://youtu.be/vbdvsOMLxSw?si=NeJ64JtIh2AL5B-c" target="_blank">Watch the demo</a>.`,

  `<strong>[Jan 2026]</strong> Served as a Reviewer for the 7th AfricaNLP Workshop, co-located with EACL 2026, Rabat, Morocco.`,

  `<strong>[Dec 2025]</strong> Presented <em>"Can Text-to-Speech Systems Enable Inclusive Computer-Based Testing? An Evaluation of Yoruba TTS for Visually Impaired Learners"</em> at the <a href="https://sites.google.com/wimlworkshop.org/wimlworkshopneurips2025/home" target="_blank">Women in Machine Learning (WiML) Workshop</a>, co-located with NeurIPS 2025, San Diego, USA.`,

  `<strong>[March 2025]</strong> Served as a Reviewer for the 6th AfricaNLP Workshop, co-located with ACL 2025, Vienna, Austria.`,

  `<strong>[Jan 2024 – Jun 2025]</strong> Spoke at 50+ RAIN-INNetwork events across 22 tertiary institutions in Nigeria.`,

  `<strong>[Nov 2023]</strong> Delivered a session, <em>"Let's Build a Fast ChatApp with Flutter and Firebase,"</em> at the Flutteristas Global Conference. <a href="https://www.youtube.com/live/9UAOMzl7Nuo?si=p3-nfh_zguFasaxj&t=29860" target="_blank">Watch the talk</a>.`,

  `<strong>[Nov 2023]</strong> I gave a talk, <em>"TechWellness: Navigating Health Challenges in the Digital Age,"</em> at the FlutterBytes Global Conference.`,

  `<strong>[2023]</strong> Received the Overall Best Female Graduating Student award (Leadership Prizes) at Oduduwa University, given to the female student with the highest CGPA in the university, by Vice Chairperson Chief (Mrs.) Iyabo Adedoyin.`,

  `<strong>[2023]</strong> Named Best Graduating Student (University Prizes) at Oduduwa University, given to the student with the highest CGPA in the university, by Chancellor Prof. R.A. Adedoyin.`,

  `<strong>[2023]</strong> Awarded Best Overall Performance, College of Engineering and Technology, for overall performance and contributions to the life of the university and college.`,

  `<strong>[2023]</strong> Awarded Best Overall Performance, Department of Computer Engineering, given to the graduating student with the best overall performance in the program.`,

  `<strong>[2023]</strong> Earned a First Class Award for outstanding and exceptional academic performance.`,

  `<strong>[2023]</strong> Received the Event Maestro Award and Impact Amplifier Award, recognized among 231 Google Developer Groups on Campus clubs across Sub-Saharan Africa.`,

  `<strong>[2023]</strong> Placed 1st Runner-Up at an inter-university hackathon among 21 teams, organized by the Nigeria Association of Computer Science Students.`,

  `<strong>[2021]</strong> Won the Most Innovative award, in recognition of academic excellence and innovation, from the Nigeria University Engineering Students association.`,

  `<strong>[2020]</strong> Placed Second Runner-Up at the Hult Prize competition, Oduduwa University.`,

  `<strong>[2018]</strong> Received the Principal's Distinction Award, for maintaining distinction from JSS1 to SS3 (2017/2018 academic session).`,
];


function renderNews(containerId, limit) {
  const ul = document.getElementById(containerId);
  if (!ul) return;
  const items = limit ? NEWS_ITEMS.slice(0, limit) : NEWS_ITEMS;
  ul.innerHTML = items.map(item => `<li>${item}</li>`).join('');
}

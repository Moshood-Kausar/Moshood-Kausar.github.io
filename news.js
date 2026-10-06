const NEWS_ITEMS = [
  `<strong>[Sep 5–26, 2026]</strong> Co-hosted and coordinated the <a href="https://lynguallabs.substack.com/" target="_blank">LyngualLabs</a> weekly virtual seminar series, held every Saturday in September, moderating sessions and leading discussions with invited researchers. <a href="https://lynguallabs.substack.com/" target="_blank">Read the newsletter</a> · <a href="https://www.youtube.com/@LyngualLabs" target="_blank">Watch the recordings</a>.`,

  `<strong>[Sep 11, 2026]</strong> Our paper,<em>"<a href="https://proceedings.mlr.press/v302/bolarinwa26a.html" target="_blank">Closing the Gap in Low-Resource ASR: Leveraging Multilingual Models for Code-Switched Yoruba-English Speech</a>,"</em> was accepted as a poster at the <a href="https://sites.google.com/wimlworkshop.org/wimlworkshopneurips2026/home" target="_blank">Women in Machine Learning (WiML) Workshop</a>, co-located with NeurIPS 2026. I'll be presenting it in person in Atlanta, USA, in December.`,

  `<strong>[Sep 11, 2026]</strong> Our paper, <em>"<a href="https://arxiv.org/abs/2606.02375" target="_blank">WAXAL-NET: Finetuned Edge ASR Across 19 African Languages</a>,"</em> was accepted as a poster at the <a href="https://sites.google.com/wimlworkshop.org/wimlworkshopneurips2026/home" target="_blank">Women in Machine Learning (WiML) Workshop</a>, co-located with NeurIPS 2026, and will be presented in Paris, France, in December.`,

  `<strong>[Sep 11, 2026]</strong> Our paper, <em>"YECS: A 120-Hour Yoruba–English Code-Switching Corpus and a Diagnostic Framework for Low-Resource Speech Recognition,"</em> was accepted as a poster at the <a href="https://sites.google.com/wimlworkshop.org/wimlworkshopneurips2026/home" target="_blank">Women in Machine Learning (WiML) Workshop</a>, co-located with NeurIPS 2026, and will be presented in Sydney, Australia, in December.`,

  `<strong>[Sep 3, 2026]</strong> Nominated by the program committee to serve as a Reviewer for the <a href="https://vericodegen.github.io/" target="_blank">VeriCodeGen: AI for Verifiable Coding</a> Workshop at NeurIPS 2026, Atlanta, USA.`,

  `<strong>[Sep 2, 2026]</strong> Appointed as the first Student Lead of the <a href="https://www.meetup.com/aws-sbg-at-oregon-state-university-corvallis-campus/" target="_blank">AWS Student Builder Group at Oregon State University</a>, building a community of students who learn, build, and ship on the cloud together. <a href="https://www.meetup.com/aws-sbg-at-oregon-state-university-corvallis-campus/" target="_blank">Join the group</a>.`,

  `<strong>[Aug 3–7, 2026]</strong> Selected to attend the <a href="https://iaifi.org/phd-summer-school.html" target="_blank">IAIFI Summer School</a> virtually, an intensive program of lectures and hands-on tutorials at the intersection of AI and physics, organized by the NSF Institute for Artificial Intelligence and Fundamental Interactions and sponsored by the National Science Foundation, with support from Hudson River Trading, Google DeepMind, and others.`,

  `<strong>[Aug 2026]</strong> I'm serving as a Reviewer for the <a href="https://sites.google.com/wimlworkshop.org/wimlworkshopneurips2026/home" target="_blank">Women in Machine Learning (WiML) Workshop</a>, co-located with NeurIPS 2026.`,

  `<strong>[May 2026]</strong> Gave a talk, <em>"RESTLocator: Fault Localization for Defects in REST API Systems,"</em> at the <a href="https://pnwplse.org/" target="_blank">Pacific Northwest Programming Languages and Software Engineering (PNW PLSE)</a> workshop, University of Washington, USA. <a href="https://youtu.be/aaDhAIXkPv0?si=Y2x2_wCSFusAh_cY" target="_blank">Watch the talk</a>.`,

  `<strong>[May 2026]</strong> Won 1st place in the Social Impact track at <a href="https://beaverhacks.org/" target="_blank">BeaverHacks</a>, Oregon's largest hackathon, with <strong>SpeakAbroad</strong>, a platform I built to help international students practice real-life conversational scenarios. <a href="http://judge.beaverhacks.org" target="_blank">See the project</a> · <a href="https://youtu.be/vbdvsOMLxSw?si=NeJ64JtIh2AL5B-c" target="_blank">Watch the demo</a>.`,

  `<strong>[Mar 2026]</strong> Served as a Reviewer for the <a href="https://indabaxng.github.io/" target="_blank">IndabaX Nigeria</a> 2026 Conference.`,

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

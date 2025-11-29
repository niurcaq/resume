function linkedin() {
    window.open("https://www.linkedin.com/in/niurca-quirarte-658783299/", "_blank");
}

function github() {
    window.open("https://github.com/niurcaq", "_blank");
}

function listOpt() {
  const menu = document.getElementById("contact");
  menu.classList.toggle("show");
  menu.classList.toggle("hide");
}

const bios = [
  `Hi, I'm a Computer Science Engineering student at the 👩‍🎓University of Michigan 
   with a passion for creating technology that solves meaningful problems. 
   Based in📍Chicago, IL, and open to relocation. Currently looking for 
   <span class="emp">full-time</span> positions in <span class="emp">software engineering</span> or <span class="emp">full-stack development</span> 
   where I can grow as a developer and contribute to impactful projects!`,


  `My main areas of interest are <span class="emp">software engineering</span>, <span class="emp">full-stack development</span>, 
  <span class="emp">UX design</span>, <span class="emp">data analytics</span>, 
  <span class="emp">cybersecurity</span>, <span class="emp">AI/ML</span>, and <span class="emp">mobile app development</span>.`,


  `Coding Languages: <span class="emp">Python</span>, <span class="emp">C/C++</span>, <span class="emp">HTML</span>, <span class="emp">CSS</span>, 
  <span class="emp">JavaScript</span>, <span class="emp">SQL</span>, <span class="emp">Matlab</span><br>

  Frameworks: <span class="emp">Vue</span>, <span class="emp">Flask</span>, <span class="emp">React</span>, <span class="emp">Django</span>, 
  <span class="emp">Bootstrap</span><br>

  Development Tools: <span class="emp">Linux</span>, <span class="emp">Git</span>, <span class="emp">AWS</span>, <span class="emp">Docker</span><br>

  Other: <span class="emp">Regex</span>, <span class="emp">Figma</span>, <span class="emp">Google Colab</span>, <span class="emp">Google Workspace</span>, 
  <span class="emp">Microsoft Office</span>, <span class="emp">Tableau</span><br>

  Spoken Languages: <span class="emp">English</span>, <span class="emp">Spanish</span>`,


  `Some <span class="emp">hobbies outside of coding</span> include traveling ✈️, listening to music 🎧, building Legos🧩, 
   playing basketball 🏀, hanging out with friends👥, and watching movies📺!`
];

let index = 0;
const bioText = document.getElementById("bio-text");
const nextBtn = document.getElementById("next-btn");

nextBtn.addEventListener("click", () => {
  index = (index + 1) % bios.length;
  bioText.innerHTML = bios[index]; // use innerHTML since text contains <br> and spans
});

/* Copy to clipboard functionality */
document.querySelectorAll(".copy-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent menu from closing
    const textToCopy = btn.getAttribute("data-copy");
    navigator.clipboard.writeText(textToCopy).then(() => {
      // Show visual feedback
      const originalSvg = btn.innerHTML;
      btn.innerHTML = "✓";
      btn.style.color = "rgb(14, 150, 14)";
      setTimeout(() => {
        btn.innerHTML = originalSvg;
        btn.style.color = "rgb(17, 183, 17)";
      }, 1500);
    }).catch(() => {
      alert("Failed to copy to clipboard");
    });
  });
});

/* Download resume functionality */
function downloadResume() {
  const link = document.createElement("a");
  link.href = "./files/NiurcaQuirarteResume.pdf";
  link.download = "NiurcaQuirarteResume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

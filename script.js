document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("theme-toggle");
  toggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });
});

// Edit function
// ABOUT ME
function editText() {
  const el = document.getElementById("about-text");
  const userInput = prompt("Edit your About Me:", el.textContent);
  if (userInput !== null && userInput.trim() !== "") {
    el.textContent = userInput;
    localStorage.setItem("aboutText", userInput);
  }
}

// SKILLS AND TALENTS
function editSkill() {
  const el = document.querySelector("#Skills_and_Talents li");
  const userInput = prompt("Edit your Skills and Talents:", el.textContent);
  if (userInput !== null && userInput.trim() !== "") {
    el.innerHTML = userInput.replace(/\./g, ".<br>");
    localStorage.setItem("skillsText", userInput);
  }
}

// PROJECTS
function editProject() {
  const el = document.querySelector("#Project li");
  const userInput = prompt("Edit your Projects:", el.textContent);
  if (userInput !== null && userInput.trim() !== "") {
    el.innerHTML = userInput.replace(/\./g, ".<br>");
    localStorage.setItem("projectText", userInput);
  }
}

// LOAD SAVED CONTENT
document.addEventListener("DOMContentLoaded", () => {
  const aboutSaved = localStorage.getItem("aboutText");
  if (aboutSaved) {
    document.getElementById("about-text").textContent = aboutSaved;
  }

  const skillsSaved = localStorage.getItem("skillsText");
  if (skillsSaved) {
    document.querySelector("#Skills_and_Talents li").innerHTML =
      skillsSaved.replace(/\./g, ".<br>");
  }

  const projectSaved = localStorage.getItem("projectText");
  if (projectSaved) {
    document.querySelector("#Project li").innerHTML = projectSaved.replace(
      /\./g,
      ".<br>"
    );
  }
});

// CONTACT ME

function editContact() {
  const el = document.querySelector("#Contact_Me li");
  const rawText = el.innerText;

  const userInput = prompt("Edit your contact info:", rawText);
  if (userInput !== null && userInput.trim() !== "") {
    // Replace newlines with <br> for formatting
    const formatted = userInput
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line.length > 0)
      .join("<br>");

    el.innerHTML = formatted;
    localStorage.setItem("contactInfo", userInput);
  }
}

// Load saved contact info on page load
document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("contactInfo");
  if (saved) {
    const formatted = saved
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line.length > 0)
      .join("<br>");
    document.querySelector("#Contact_Me li").innerHTML = formatted;
  }
});

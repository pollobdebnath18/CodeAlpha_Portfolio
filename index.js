var typed = new Typed(".text", {
  strings: ["Frontend Developer", "Web Developer", "Competitive Programmer"],
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 1000,
  loop: true,
});

const tabLinks = document.getElementsByClassName("tab-link");
const tabContents = document.getElementsByClassName("tab-contents");

function TabOpen(value) {
  for (tabLink of tabLinks) {
    tabLink.classList.remove("active-link");
  }
  for (tabContent of tabContents) {
    tabContent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(value).classList.add("active-tab");
}

const sideMenu = document.getElementById("sidemenu");
function openMenu() {
  sideMenu.style.right = "0";
}
function closeMenu() {
  sideMenu.style.right = "-200px";
}

// for form

const scriptURL =
  "https://script.google.com/macros/s/AKfycbw7o1h3h62yWE2Y4qfzsjgmcauqtXWiu8yDR9YO9OB1ztaluNDtTL1Fq7OoQIiftQ/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Create FormData before clearing
  const data = new FormData(form);

  // Send data asynchronously immediately
  fetch(scriptURL, { method: "POST", body: data })
    .catch((error) => console.error("Error!", error.message));

  // Wait 1 second before clearing form and showing message
  setTimeout(() => {
    form.reset(); 

    msg.innerHTML = "Message Sent Successfully"; 
    setTimeout(() => {
      msg.innerHTML = ""; 
    }, 2000);
  }, 1000); 
});

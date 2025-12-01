var typed = new Typed(".text", {
  strings: ["Frontend Developer", "Web Developer", "Competitive Programmer"],
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 1000,
  loop: true,
});

const tabLinks = document.getElementsByClassName('tab-link');
const tabContents = document.getElementsByClassName('tab-contents');

function TabOpen(value){
  for(tabLink of tabLinks){
    tabLink.classList.remove('active-link');
  }
  for(tabContent of tabContents){
    tabContent.classList.remove('active-tab');
  }
  event.currentTarget.classList.add('active-link');
  document.getElementById(value).classList.add('active-tab');
}

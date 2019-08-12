const moreBtn = document.querySelector("#more-btn");

function displayMoreNav() {
  document.getElementById("more-nav-container").classList.toggle("show");
}

moreBtn.addEventListener("click", e => {
  if (!e.target.matches(".fa-ellipsis-h")) {
    var moreNav = document.getElementById("more-nav-container");
    if (moreNav.classList.contains("show")) {
      moreNav.classList.remove("show");
    }
  }
});

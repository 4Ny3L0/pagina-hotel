document.addEventListener("DOMContentLoaded", function () {
  navigation();
  topIcon();
});

function navigation() {
  const enlaces = document.querySelectorAll(".scrollable");
  enlaces.forEach(function (enlace) {
    enlace.addEventListener("click", function (e) {
      e.preventDefault();
      const elemento = document.querySelector(e.target.getAttribute("href"));
      elemento.scrollIntoView({ behavior: "smooth" });
    });
  });
}

function topIcon() {
  //Observer
  const observer = new IntersectionObserver((e) => {
    const intercept = e[0].isIntersecting;
    console.log(intercept);
  });

  //elemento a observar
  observer.observe(document.querySelector(".header"));
}

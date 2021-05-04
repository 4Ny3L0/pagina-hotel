document.addEventListener("DOMContentLoaded", function () {
  navigation();
  topIcon();
});

function navigation() {
  const enlaces = document.querySelectorAll(".scrollable");
  const flecha = document.querySelector(".scrollable2");
  enlaces.forEach(function (enlace) {
    enlace.addEventListener("click", function (e) {
      e.preventDefault();
      const elemento = document.querySelector(e.target.getAttribute("href"));
      elemento.scrollIntoView({ behavior: "smooth" });
    });
  });

  flecha.addEventListener("click", function (e) {
    e.preventDefault();
    const elemento = document.querySelector(
      e.target.getAttribute("data-href-link")
    );
    elemento.scrollIntoView({ behavior: "smooth" });
  });
}

function topIcon() {
  const flecha = document.querySelector(".flecha");
  //Observer
  const observer = new IntersectionObserver((entries) => {
    const intercept = entries[0].isIntersecting;
    if (intercept) {
      // console.log("sin flecha");
      flecha.classList.remove("go-up");
    } else {
      // console.log("con flecha");
      flecha.classList.add("go-up");
    }
    // console.log(intercept);
  });

  //elemento a observar
  observer.observe(document.querySelector(".header"));
}

// Febre90's — comportamento mínimo: menu mobile, revelar ao rolar,
// barra e tempo de leitura nas matérias, voltar ao topo.
(function () {
  "use strict";

  var root = document.documentElement;
  root.classList.add("js");

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ---- menu mobile ----
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("menu");

  function setMenu(open) {
    if (!toggle || !menu) return;
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    menu.classList.toggle("is-open", open);
  }

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      setMenu(toggle.getAttribute("aria-expanded") !== "true");
    });
    menu.addEventListener("click", function (e) {
      if (e.target.closest("a")) setMenu(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setMenu(false);
        toggle.focus();
      }
    });
  }

  // ---- revelar ao rolar ----
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reduceMotion) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    reveals.forEach(function (el) {
      io.observe(el);
    });
  } else {
    reveals.forEach(function (el) {
      el.classList.add("is-in");
    });
  }

  // ---- tempo de leitura ----
  var prose = document.querySelector(".prose");
  var readTime = document.getElementById("read-time");
  if (prose && readTime) {
    var words = prose.textContent.trim().split(/\s+/).length;
    readTime.textContent = Math.max(1, Math.round(words / 200)) + " min de leitura";
  }

  // ---- barra de leitura + voltar ao topo ----
  var bar = document.querySelector(".progress");
  var toTop = document.querySelector(".to-top");
  var ticking = false;

  function onScroll() {
    var y = window.scrollY || root.scrollTop;
    if (toTop) toTop.classList.toggle("is-visible", y > 600);
    if (bar && prose) {
      var start = prose.offsetTop;
      var end = start + prose.offsetHeight - window.innerHeight * 0.6;
      var p = (y - start + window.innerHeight * 0.3) / Math.max(1, end - start);
      bar.style.transform = "scaleX(" + Math.min(1, Math.max(0, p)) + ")";
    }
    ticking = false;
  }

  window.addEventListener(
    "scroll",
    function () {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(onScroll);
      }
    },
    { passive: true }
  );
  onScroll();

  if (toTop) {
    toTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    });
  }
})();

(function () {
  var nodes = document.querySelectorAll(".recommendation");
  if (!nodes.length) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    nodes.forEach(function (node) {
      node.classList.add("is-visible");
    });
    return;
  }

  if (!("IntersectionObserver" in window)) {
    nodes.forEach(function (node) {
      node.classList.add("is-visible");
    });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
  );

  var viewportHeight = window.innerHeight;

  nodes.forEach(function (node) {
    if (node.getBoundingClientRect().top < viewportHeight) {
      node.classList.add("is-visible");
    } else {
      observer.observe(node);
    }
  });
})();

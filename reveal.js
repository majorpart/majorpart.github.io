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
      if (allVisible()) teardownListeners();
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
  );

  var pending = false;

  function shouldReveal(node) {
    var rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) return true;
    if (rect.bottom <= 0) return true;
    return false;
  }

  function allVisible() {
    for (var i = 0; i < nodes.length; i++) {
      if (!nodes[i].classList.contains("is-visible")) return false;
    }
    return true;
  }

  function teardownListeners() {
    window.removeEventListener("scroll", scheduleViewportCheck);
    window.removeEventListener("resize", scheduleViewportCheck);
    observer.disconnect();
  }

  function markVisibleInViewport() {
    nodes.forEach(function (node) {
      if (!node.classList.contains("is-visible") && shouldReveal(node)) {
        node.classList.add("is-visible");
        observer.unobserve(node);
      }
    });
    if (allVisible()) teardownListeners();
  }

  function scheduleViewportCheck() {
    if (pending) return;
    pending = true;
    requestAnimationFrame(function () {
      pending = false;
      markVisibleInViewport();
    });
  }

  nodes.forEach(function (node) {
    if (shouldReveal(node)) {
      node.classList.add("is-visible");
    } else {
      observer.observe(node);
    }
  });

  window.addEventListener("scroll", scheduleViewportCheck, { passive: true });
  window.addEventListener("resize", scheduleViewportCheck, { passive: true });

  requestAnimationFrame(function () {
    requestAnimationFrame(markVisibleInViewport);
  });
  setTimeout(markVisibleInViewport, 0);
  if (allVisible()) teardownListeners();
})();

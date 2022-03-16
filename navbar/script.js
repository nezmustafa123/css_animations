(function () {
  let header = document.getElementById("header");
  let navToggle = document.getElementById("nav-toggle");

  navToggle.addEventListener("click", function () {
    toggleClass(header, "open");
  });
  function addClass(element, className) {
    let classList = element.className.split("");
    classList.push(className);
  }
});

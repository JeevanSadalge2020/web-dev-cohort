const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  let body = document.querySelector("body");
  let button = document.querySelector("button");
  if (button.textContent.toLowerCase() === "dark") {
    body.className = "dark-bg";
    button.textContent = "Light";
    button.className = "light-btn";
  } else {
    body.className = "light-bg";
    button.textContent = "Dark";
    button.className = "dark-btn";
  }
});

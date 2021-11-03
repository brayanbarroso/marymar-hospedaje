const $menu = document.querySelector("#menu");
const $btn = document.querySelector("#btn-mobile");
const $icon = document.querySelector("#btn-icon");

$btn.addEventListener("click", () => {
  if ($menu.classList.contains("open")) {
    $menu.classList.remove("open");
    $icon.textContent = "menu";
  } else {
    $menu.classList.add("open");
    $icon.textContent = "close";
  }
});

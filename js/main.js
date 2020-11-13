// Создаем переменную, в которую положим кнопку меню
let menuToggle = document.querySelector("#menu-toggle");
// Создаем переменную, в которую положим меню
let menu = document.querySelector(".sidebar");
// Отслеживаем клик по кнопке меню и запускаем функцию
menuToggle.addEventListener("click", function (event) {
  // Отменяем стандартное поведение ссылки
  event.preventDefault();
  // Вешаем класс меню, когда кликнули по кнопке меню
  menu.classList.toggle("visible");
});

let btn = document.getElementById("theme-button");
let link = document.getElementById("theme-link");

btn.addEventListener("click", function () {
  ChangeTheme();
});

function ChangeTheme() {
  let lightTheme = "css/style.css";
  let darkTheme = "css/dark.css";

  let currTheme = link.getAttribute("href");
  let theme = "";

  if (currTheme == lightTheme) {
    currTheme = darkTheme;
    theme = "dark";
  } else {
    currTheme = lightTheme;
    theme = "light";
  }

  link.setAttribute("href", currTheme);

  Save(theme);
}

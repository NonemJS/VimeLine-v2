// Выбираем кнопку
const btn = document.querySelector(".btn-toggle");
// Выбираем таблицу стилей
const theme = document.querySelector("#theme-link");
// Отслеживаем щелчок по кнопке
btn.addEventListener("click", function() {
  // Если текущий адрес содержит "light-theme.css"
  if (theme.getAttribute("href") == "assets/css/light.css") {
    // …то переключаемся на "dark-theme.css"
    theme.href = "assets/css/style.css";
    // В противном случае… 
  } else {
    // …переключаемся на "light-theme.css"
    theme.href = "assets/css/light.css";
  }
});

const btn2 = document.querySelector(".btn-toggle2");
// Выбираем таблицу стилей
const theme2 = document.querySelector("#theme-link");
// Отслеживаем щелчок по кнопке
btn2.addEventListener("click", function() {
  // Если текущий адрес содержит "light-theme.css"
  if (theme2.getAttribute("href") == "assets/css/light.css") {
    // …то переключаемся на "dark-theme.css"
    theme2.href = "assets/css/style.css";
    // В противном случае… 
  } else {
    // …переключаемся на "light-theme.css"
    theme2.href = "assets/css/light.css";
  }
});

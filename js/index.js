//нажатие кнопки меняет отображаемый контент
const tabBtns = document.querySelectorAll(".navigation__link");
const tabsItems = document.querySelectorAll(".tab-item");
console.log(tabBtns);
console.log(tabsItems);
function hideTabs() {
  tabsItems.forEach(item => item.classList.add("hide"));
  tabBtns.forEach(item => item.classList.remove("navigation__link--active"));
}

function showTab(index) {
  tabsItems[index].classList.remove("hide");
  tabBtns[index].classList.add("navigation__link--active");
}

tabBtns.forEach((btn, index) => btn.addEventListener("click", () => {
  hideTabs();
  showTab(index);
}));

hideTabs();
showTab(0);



// let first_name = prompt('what is your name?',);
// let result = prompt('how old are you?',);
// alert(`${first_name}, you are ${result} years old`);
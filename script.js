let title = 'Glo Academy';
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 100;
let rollBack = 2;
let fullPrice = 3000;
let adaptive = true;


console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(`Стоимость верстки экранов ${screenPrice} рублей/ долларов/гривен/юани`);
console.log(`Стоимость разработки  экранов ${fullPrice} рублей/ долларов/гривен/юани`);
console.log(screens.toLowerCase().split(''));
console.log((fullPrice * (rollBack / 100)));


let titleAnswer = prompt('Как называется ваш проект?');
let screensAnswer = prompt('Какие типы экранов нужно разработать?');
let screenPriceAnswer = prompt('Сколько будет стоить данная работа?');
let adaptiveAnswer = prompt('Нужен ли адаптив на сайте?');

let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");

let service2 = prompt("Какой еще дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");

fullPrice = screenPrice + servicePrice1 + servicePrice2;

const servicePercentPrice = Math.ceil(parseFloat(fullPrice - 250));
console.log(servicePercentPrice);

if (fullPrice > 30000) {
  alert('Даем скидку в 10%');
} else if (fullPrice > 15000 && fullPrice < 30000) {
  alert('Даем скидку в 5%');
} else if (fullPrice < 15000 && fullPrice > 0) {
  alert('Скидка не предусмотрена');
} else if (fullPrice < 0) {
  alert('Что то пошло не так');
}
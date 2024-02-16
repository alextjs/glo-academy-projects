'use strict';


let titleAnswer = prompt('Как называется ваш проект?');
let screensAnswer = prompt('Какие типы экранов нужно разработать?');
let screenPriceAnswer = prompt('Сколько будет стоить данная работа?');
let adaptiveAnswer = prompt('Нужен ли адаптив на сайте?');
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой еще дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");
let rollBack = 10;
let adaptive = true;
let fullPrice = screenPriceAnswer + servicePrice1 + servicePrice2;
let servicePercentPrice = fullPrice - (fullPrice * (rollBack / 100))


const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
}


showTypeOf(titleAnswer);
showTypeOf(screenPriceAnswer);
showTypeOf(adaptiveAnswer);


const getRollBackMessage = function (price) {
  if (price > 30000) {
    return 'Даем скидку в 10%';
  } else if (price > 15000 && fullPrice < 30000) {
    return 'Даем скидку в 5%';
  } else if (price < 15000 && fullPrice > 0) {
    return 'Скидка не предусмотрена';
  } else if (price < 0) {
    return 'Что то пошло не так';
  }
}


console.log(getRollBackMessage(fullPrice));


const getAllServicePrices = function () {
  return screenPrice + servicePrice1 + servicePrice2;
}

const allServicePrices = getAllServicePrices();

function getFullPrice(sum1, sum2) {
  fullPrice = sum1 + sum2;
  return fullPrice;
}


const getTitle = function (title) {
  const titleToUpperCase = title.trim().toUpperCase();
  return titleToUpperCase;
}


const getServicePercentPrices = function (getPrice, percent) {
  const servicePercentPrice = getPrice - percent;
  return servicePercentPrice;
}
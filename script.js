'use strict';


let titleAnswer
let screensAnswer
let screenPriceAnswer
let adaptiveAnswer
let rollBack = 10
let allServicePrices
let fullPrice
let servicePercentPrice
let title
let adaptive = true
let service1
let service2
let servicePrice

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num)
}

const asking = function () {
  titleAnswer = prompt('Как называется ваш проект?', 'Калькулятор верстки');
  screensAnswer = prompt('Какие типы экранов нужно разработать?', 'Простые, сложные');

  do {
    screenPriceAnswer = prompt('Сколько будет стоить данная работа?');
  } while (!isNumber(screenPriceAnswer));


  adaptiveAnswer = prompt('Нужен ли адаптив на сайте?');
}

const getAllServicePrices = function () {
  let sum = 0;

  for (let i = 0; i < 2; i++) {
    prompt("Какой дополнительный тип услуги нужен?");
    let servicePrice;

    do {
      servicePrice = prompt('Сколько будет стоить данная работа?');
    } while (!isNumber(servicePrice));


    sum += Number(servicePrice);
  }

  return sum;

}


function getFullPrice(sum1, sum2) {
  fullPrice = sum1 + sum2;
  return fullPrice;
}


const getTitle = function (title) {
  const titleToUpperCase = title.trim()[0].toUpperCase() + title.trim().substr(1).toLowerCase();
  return titleToUpperCase;
}


const getServicePercentPrices = function (getPrice, percent) {
  const servicePercentPrice = getPrice - percent;
  return servicePercentPrice;
}


const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
}


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

asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
title = getTitle(titleAnswer);




showTypeOf(titleAnswer);
showTypeOf(screenPriceAnswer);
showTypeOf(adaptiveAnswer);

console.log('allServicePrices', allServicePrices);
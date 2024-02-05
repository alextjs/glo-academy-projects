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
// let str = "добро Пожаловать";
// alert(str.toUpperCase());
// // let str = "Как дела";
// // alert(str.toUpperCase());

// let age = prompt("Ввидите возраст");
//  age>18
// ? alert("Добро Пожаловать")
// : alert("Ljcneg")

// const name = prompt("Ввидите имя");
// if (name === "Вика") {
//   alert("Я тебя Люблю");
// } else {
//   alert("Пока");
// }

// const chislo = +prompt("Ввидите число");
// const vtoroeChislo = +prompt("Ввидите число");
// let sum = chislo + vtoroeChislo;
// alert(sum);

alert(Math.round(6.31 * 10) / 10);

function readNumber() {
  let chislo;
  chislo = prompt("Ввидите число");
  while (!isFinite(chislo)) {
    chislo = prompt("Ввидите число");
  }
  if (chislo === null || chislo === "") {
    return null;
  }
  return +chislo;
}
console.log(readNumber());

function random(min, max) {
  console.log(Math.random());
  let random = Math.random() * (max - min) + min;
  console.log(random);
  console.log(Math.random() * max);
}
random(1, 10);
random(1, 10);
random(1, 10);
random(1, 10);
random(1, 10);
random(1, 10);
random(1, 10);
random(1, 10);
random(1, 10);
random(1, 10);
random(1, 10);
random(1, 10);
random(1, 10);
random(1, 10);
random(1, 10);

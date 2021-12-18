// // Task 1
let a1 = true + false;
console.log(a1);
// // ответ 1, т.к true=1, false=0

let a2 = 12 / "6";
console.log(a2);
// // ответ 2, т.к при делении значения не преобразуются
// // в строку, остаются числами и происходит обычное деление чисел

let a3 = "number" + 15 + 3;
console.log(a3);
// // ответ number153, т.к '' стоят первыми, преобразуют все последующие значения в строку

let a4 = 15 + 3 + "number";
console.log(a4);
// ответ 18number, т.к сначала идет сложение чисел,затем присоединяется к  '', образуя строку

let a5 = [1] > null;
console.log(a5);
// // ответ true, т.к [1]='1'=1, null=0

let a6 = "foo" + +"bar";
console.log(a6);
// // ответ foonan, т.к +'bar' = nan, далее идет присоединение

let a7 = "true" == true;
console.log(a7);
// ответ false, т.к 'true'=nan, true=1

let a8 = false == "false";
console.log(a8);
// ответ false, т.к false=0, 'false'=nun

let a9 = null == "";
console.log(a9);
// ответ false, т.к. в данном случае null подразумевает ничего

let a10 = !!"false" == !!"true";
console.log(a10);
// ответ true, т.к !! преобразовывает в boolean, "false" и "true" являются заполненными строками со значением и соотвественно = true

let a11 = ["x"] == "x";
console.log(a11);
// ответ true, т.к ['x'] становится 'x'

let a12 = [] + null + 1;
console.log(a12);
// ответ null1, т.к [] = '', а после строки все значения присоединяются

let a13 = 0 || ("0" && {});
console.log(a13);
//ответ true, т.к 0 становится false, "0" = true, {} = true

let a14 = !!null;
console.log(a14);
// // ответ false, т.к !! преобразовывает в boolean, а null в boolean = false

let a15 = !!undefined;
console.log(a15);
// // ответ false, т.к !! преобразовывает в boolean, а undefined в boolean = false

// Task 2
let i = 20;
while (i) {
  alert(i--);
}
console.log(i);
// последнее значение будет 0, т.к цикл выводит i пока i<20, т.е будет 19 итераций

// // Task 3
let i2 = 39;
while (i2 < 91) {
  i2++;
  console.log(i2);
}

// // Task 4
let i3 = 11;
while (i3 < 340) {
  i3 += 4;
  console.log(i3);
}

// Task 5
for (let i4 = 100; i4 >= -5; i4--) {
  console.log(i4);
}

// Task 6
let str1 = "";
for (let i = 0; i < 15; i++) {
  str1 = str1 + "y";
  console.log(str1);
}

// Task 7
for (let str2 = 0; str2 <= 100; str2 += 2) {
  console.log(str2);
}

// Task 8
let sum = 0;
for (let i = 0; i <= 100; i = i + 1) {
  sum = i;
}
console.log(sum);

// Task 9
let str3 = "";
for (let i = 1; i <= 11; i += 2) {
  str3 = str3 + i;
}
console.log(str3);

// Task 10
let str4 = "";
for (let i = -123; i < -117; i++) {
  str4 = str4 + i;
}
console.log(str4);

// Task 11
let str5 = "-";
for (let i = 1; i <= 9; i++) {
  str5 = str5 + i + "-";
}
console.log(str5);

// Task 12
let x1 = 3;
let x2 = 2;
if (x1 == x2) {
  console.log("Все хорошо");
} else {
  console.log("Числа не равны, попробуй снова");
}

x1 == x2
  ? console.log("Все хорошо")
  : console.log("Числа не равны, попробуй снова");

// Task 13
let y1 = 15;
let y2 = 2;
if (y1 + y2 > 10) {
  console.log("Все хорошо");
} else {
  console.log("Сумма не больше 10");
}

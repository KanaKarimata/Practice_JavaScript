//HTMLでHello World と表示する方法 
alert('Hello World');

// 変数の書き方
let hello = 'Hello World';
alert(hello);
let int1 = 1;
alert(int1);
let int2 = 2;
alert(int2);
let float1 = 3.14;
alert(float1)
let str1 = 'Javascriptを覚えよう';
alert(str1);

// 四則演算
alert('Hello' + 'World');

// 文字列を結合させる
let str2 = 'Hello';
let str3 = 'World!!';
alert(str2 + str3);

// 条件分岐
// if(条件１){ 処理1 }
// if(条件１){ 処理１ } else {処理２}
let orange = 100;
let apple = 120;

if(orange < apple){
  alert('みかんの値段がりんごより安い');
} else if (orange == apple){
  alert('みかんとりんごが同じ値段');
} else {
  alert('みかんの値段がリンゴより高い');
}

// 繰り返し処理
let max = 100;
let num = 1;
let count = 9;

while(num < max){
  num = num*2;
  count = count + 1;
}

alert('2をかけ続けて' + max + 'を超えるように必要だった回数は' + count + '回です');

// for文
let i;
let num1 = 0

for(i = 1; i < 11; i++){
  num1 = num1 + i;
}
alert('1から10まで足し算した結果は' + num + 'です');
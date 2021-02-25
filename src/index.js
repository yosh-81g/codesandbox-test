/**
 * const, let等の変数宣言
 */
// var val1 = "var宣言";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // let変数は上書き可能
// val2 = "let変数を上書き";
// console.log(val2);

// // letは再宣言不可能
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// // const変数は上書き不可
// // val3 = "const変数を上書き";

// const val3 = "const変数を再宣言";

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "じゃけ",
//   age: 39
// };
// val4.name = "test";
// val4.address = "aaaaaaaaaa";
// console.log(val4);

// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "じゃけぇ";
// const age = 39;
// 「私の年齢は・・・です。年齢は・・・歳です」
// 従来は
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// テンプレート文字列を用いると・・・
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */
// 従来の関数
// function func1(str) {
//   return str;
// }
// const func1 = function func1(str) {
//   return str;
// };
// console.log(func1("こんにちは！"));

// アロー関数で記述すると
// const func2 = (str) => {
//   return str;
// };
// const func2 = (str) => str;

// console.log(func2("Hello!"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };

// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(1, 2));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "テスト",
//   age: 30
// };

// const message1 = `私の名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// const myProfile = ["テスト", 30];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message4);

/**
 * デフォルト値
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん`);

// sayHello("よっしー");

/**
 * スプレッド構文
 */
// 配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);
// console.log(...arr3);

// 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4;
// // console.log(arr8);
// arr8[0] = 100;
// console.log(arr8);
// console.log(arr4);

/**
 * mapやfilterを使った配列の処理
 */
// const nameArr = ["田中", "山田", "よっしー"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}です。`);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// Mapの第二引数にはインデックスを持っているので、欲しければ追加してやればよし！
// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です。`));

// const numArr = [1, 2, 3, 4, 5];
// // ある条件に合致する値のみ取り出して新しい配列を作成する
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);
// const newNameArr = nameArr.map((name) => {
//   if (name === "よっしー") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子
 */
// ある条件 ？ 条件がtrueの時 ： 条件がfalseの時
// const val1 = 1 < 0 ? "trueです" : "falseです";
// console.log(val1);

// const num = "1300";
// console.log(num.toLocaleString(num));

// const formatterdNum =
//   typeof num === "number" ? num.toLocaleString(num) : "数値を入力してください";
// console.log(formatterdNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています" : "許容範囲内です";
// };
// console.log(checkSum(2, 99));

/**
 * 論理演算子の本当の意味を知ろう
 */
// %%とか||とか
// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("1か２はtrueになります");
// }

// if (flag1 && flag2) {
//   console.log("1も２もtrueになります");
// }

// ||（パイプライン二つ）は左側がfalseとなる時右側を返す
// const num = 100;
// const fee = num || "金額未設定です。";
// console.log(fee);

// &&は左側がtrueなら右側を返す
// const num2 = 100;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2);

/* 
   條件: 題目 2 ~ 7 的操作都不能修改到 題目 1 建立的陣列
*/

// 1. 建立一個長度 50，數值介於 40~100 的陣列 (亂數產生) (Array)
var array = [];
const randon402100 = () => Math.floor(Math.random()*60 + 40);
for (let i=0 ; i<50 ; i++) {
    array.push(randon402100());
}
console.log(array);
// 2. 篩選出大於 60 的結果
var gt60 = array.filter(num => num > 60);
console.log(gt60);
// 3. 找出最大值
var maxValue = Math.max(...array);
console.log(maxValue);
// 4. 計算全部數值的合計數
const reducer = (a,b) => a + b;
var sum = array.reduce(reducer,array.length);
console.log(sum);
// 5. 找出最小值
var minValue = Math.min(...array);
console.log(minValue);
// 6. 全部開根號並乘上 10
const sqrt = array.map( x => Math.sqrt(x)*10 );
console.log(sqrt);
// 7. 請依數值大小排序，由大而小
const desc = array.sort(function(a, b) {
    return b-a;
});
console.log(desc);

// #
// 20. 평균구하기
// 배열을 인자로 전달받아 각 요소의 평균을 구하는 함수를 완성하라.
var a = 0;

function average(array) {
  for (var i = 0; i < array.length; i++) {
    a += array[i];

  }
  return a / array.length;
}

var testArray = [5, 3, 4];
console.log(average(testArray)); // 4
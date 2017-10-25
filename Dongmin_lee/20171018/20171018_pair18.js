// 18. 배열의 인접한 요소곱 중 가장 큰 값 구하기
// 정수의 배열에서 인접한 요소의 곱이 가장 큰 값을 반환하는 함수를 완성하라.
// 예를 들어 인수가[3, 6, -2, -5, 7, 3] 인 경우, 21 을 반환한다.

function adjacentElementsProduct(arr) {
  var array = [];
  for (i = 0; i < arr.length - 1; i++) {
    array.push(arr[i] * arr[i + 1]);
  }
  console.log(array);
  return Math.max.apply(null, array);
}
console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3])); // 21
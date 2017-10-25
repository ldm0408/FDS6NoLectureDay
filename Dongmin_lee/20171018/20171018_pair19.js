// 19. 배열에서 특정 값만을 구하기
// 배열 arr에서 짝수이고 3 보다 큰 수만을 구하여 이를 배열로 반환하는 함수를 작성하라
function getArray(arr) {
  var res = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 3 && arr[i] % 2 === 0) {
      res.push(arr[i]);
    }
  }
  return res;

}

var arr = [10, 15, 0, 1, 2, 23, 26];
console.log(getArray(arr)); // [ 4, 6 ]
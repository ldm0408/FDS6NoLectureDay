// #
// 21. 최단 거리 1 차원 점의 쌍 구하기(DAUM)
// 1 차원의 점들이 주어졌을 때, 그 중 가장 거리가 짧은 것(들) 의 쌍을 배열로 반환하는 함수를 작성하라.
// (단 점들의 배열은 모두 정렬되어있다고 가정한다.) 
// 예를들어[1, 3, 4, 8, 13, 17, 20, 23, 24] 이 주어졌다면, 
// 결과값은[[3, 4], [23, 24]] 가 될 것이다.

**
다시 풀어보자 - 10.18
해결 못함


// function findMinDistance(array) {
//   var grp = [];
//   var res = [];
//   for (var i = 0; i < array.length - 1; i++) {
//     var src = [];
//     src.push(array[i], array[i + 1]);
//     grp.push(src)
//   }
//   for (var j = 0; j < grp.length - 1; j++) {
//     var a = grp[j][1] - grp[j][0];
//     var b = grp[j + 1][1] - grp[j + 1][0];

//     if (a * 1 < b * 1) {
//       res.push(grp[j]);
//     }
//   }

//   return res;

// }



// 1차원 점의 배열
var array = [1, 3, 4, 8, 13, 17, 20, 23, 24];
console.log(findMinDistance(array)); // [[3, 4], [23, 24]]
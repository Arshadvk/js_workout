// const array1 = [1, 2, 3, 4, 5];
// const array2 = [4, 5, 6, 7, 8];
// let newarray = [];

// let n;
// if (array1.length > array2.length) {
//   n = array1.length;
// } else {
//   n = array2.length;
// }

// function duplication(arr1, arr2) {
//   for (let i = 0; i < n; i++) {
//     let flag = 0;
//     for (let j = 0; j < n; j++) {
//       if (arr1[i] === arr2[j]) {
//         flag = 1;
//       }
//     }
//     if (flag !== 1) {
//       newarray.push(arr1[i]);
//     }
//   }


//   for (let i = 0; i < n; i++) {
//     let flag = 0;
//     for (let j = 0; j < n; j++) {
//       if (arr2[i] === arr1[j]) {
//         flag = 1;
//       }
//     }
//     if (flag !== 1) {
//       newarray.push(arr2[i]);
//     }
//   }

//   console.log(newarray);
// }

// duplication(array1, array2);



const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 2, 6, 7, 8];
let newarray = [];

function duplication(arr1, arr2) {
  arr1.forEach(item => {
    if (!arr2.includes(item)) {
      newarray.push(item);
    }
  });

  arr2.forEach(item => {
    if (!arr1.includes(item)) {
      newarray.push(item);
    }
  });

  console.log(newarray);
}

duplication(array1, array2);


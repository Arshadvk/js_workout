// function add(num1,num2){
//     return new Promise((resolve,reject)=>{
//         if(num1===0){
//             reject("first num is null")
//         }
//         resolve(num1+num2)
//     })
// }

// add(0,20).then(
//     (sum)=>console.log(sum)
// ).catch(
//     (err)=>console.log(err)
// )




// promise race and allsettled
// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Promise 1 resolved'), 2000);
//   });
  
//   const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Promise 2 resolved'), 1000);
//   });
  
//   Promise.race([promise1, promise2])
//     .then(result => {
//       console.log(result); // Output: "Promise 2 resolved"
//     })
//     .catch(error => {
//       // This won't be executed as both promises resolve successfully.
//     });
  



// pomise allseteled
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise 1 resolved'), 2000);
  });
  
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => reject('Promise 2 rejected'), 1000);
  });
  
  Promise.allSettled([promise1, promise2])
    .then(results => {
      console.log(results);
    });
      








    const promise1 = new Promise((resolve, reject) => {
      setTimeout(() => resolve('Promise 1 resolved'), 2000);
    });
    
    const promise2 = new Promise((resolve, reject) => {
      setTimeout(() => reject('Promise 2 rejected'), 1000);
    });
    
    Promise.allSettled([promise1, promise2])
      .then(results => {
        console.log(results);
      })
      .catch(error => {
        console.error(error);
      });
    
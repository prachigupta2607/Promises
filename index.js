// Import stylesheets
import './style.css';

// Write Javascript code!
const fetchData = () => {
  const urls = [
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/posts/2",
    "https://jsonplaceholder.typicode.com/posts/3",
    "https://jsonplaceholder.typicode.com/posts/4",
    "https://jsonplaceholder.typicode.com/post/5",
    "https://jsonplaceholder.typicode.com/posts/6",
    "https://jsonplaceholder.typicode.com/posts/7",
    "https://jsonplaceholder.typicode.com/posts/8"
  ];

  const allRequests = urls.map(url => 
    fetch(url).then(response => response.json())
    .catch(e => status = 'rejected')
  );

  return Promise.all(allRequests);
};

fetchData().then(arrayOfResponses => 
  console.log("The data we got from the server:", arrayOfResponses)
);

// const urls = [
//     "https://jsonplaceholder.typicode.com/posts/1",
//     "https://jsonplaceholder.typicode.com/posts/2",
//     "https://jsonplaceholder.typicode.com/posts/3",
//     "https://jsonplaceholder.typicode.com/posts/4",
//     "https://jsonplaceholder.typicode.com/post/5",
//     "https://jsonplaceholder.typicode.com/posts/6",
//     "https://jsonplaceholder.typicode.com/posts/7",
//     "https://jsonplaceholder.typicode.com/posts/8"
//   ];


// var myArray = [1, 2, 3, 4, 5, 6] //doesn't really matter

// //type: number -> Promise<number>
// function myPromise(num){
//   return new Promise((resolve) => {
//     window.setTimeout(()=>{
//       resolve(console.log("done: " + num)  )
//     },2000)
//   })
// }

// function sequencePromises(promise, number) {
//   return new Promise((resolve) => {
//     resolve(promise.then(_ => myPromise(number)));
//   });
// } 

// myArray.reduce(sequencePromises, Promise.resolve());

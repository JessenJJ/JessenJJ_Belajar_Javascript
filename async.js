//delay
// console.log("start");
// setTimeout(()=>{
//     console.log("first timeout");
// },2000);
// console.log("end");

//promise
let users = [
  {
    email: "jess@gmail.com",
    password: "password",
  },
];

//callback
function register1(newUser, callback) {
  setTimeout(() => {
    users.push(newUser);
    callback();
  }, 2000);
}

//promise
function register(newUser) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = 0;
      if (error) {
        reject("Register Failed");
      } else {
        console.log("register successfully");
        users.push(newUser);
        resolve();
      }
    }, 2000);
  });
}

function getUsers() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
        let error = 0;
      if (error) {
        reject("error!");
      } else {
        // setTimeout(()=>{
        //     return users;
        // },1000);
        resolve(users);
      }
    }, 1000);
  });
}

const newUser = {
  email: "user1@gmail.com",
  password: "pass",
};

//callback
//   register1(newUser,getUsers)

//promise
// register(newUser)
//   .then(() => {
//     getUsers()
//         .then((result)=>{
//             console.log(result);
//             let fetchuser = result;
//         })
//         .catch((err)=> console.log(err))
//         .finally(()=>console.log("end function"));
//   })

register(newUser)
  .then(() => getUsers())
  .then((result) => console.log(result))
  .catch((error) => console.log(error))
  .finally(() => console.log("end function"));

//   console.log("batas");
//   getUsers();

// Async - Await
// async function main(){
//     try{
//         await register(newUser);
//         let result = await getUsers();
//         console.log(result);
//     }
//     catch(error){
//         console.log(error);
//     }finally{
//         console.log("close connection");
//     }
// }

// main();

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json,"json"));
 
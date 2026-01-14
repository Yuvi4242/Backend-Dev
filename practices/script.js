// // const rawUsers = [
// //   { id: 1, name: "Rahul", password: "fb_password", role: "admin" },
// //   { id: 2, name: "Sanya", password: "123_password", role: "user" },
// //   { id: 3, name: "Amit", password: "secret_password", role: "user" }
// // ];

// // const safeUsers = rawUsers.map(({ password, ...rest })=>rest);
// // console.log(safeUsers);
// // const admins = safeUsers.filter(user => user.role === "admin");
// // console.log(admins);

// console.log("fetching data...");
// let user;
// setTimeout(() => {
//   user = { name: "John Doe", age: 30 };
//   console.log("data fetched");
// }, 2000);

// console.log("user:", user); // This will log 'undefined' because the data is not yet fetched.

// console.log("first data");
// setTimeout(() => {
//     console.log("task2");
// }, 0);
// Promise.resolve().then(()=> console.log("task4"));
// console.log("task2");

// const fetchUser=(id) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const users = {1:{ name: "Ram", age: 30 }, 2:{ name: "Shyam", age: 25 }};
//             const user = users[id];
//             if (user) {
//                 resolve(user);
//             } else {
//                 reject("User not found");
//             }
//         }, 2000);
//     });
// };

// // fetchUser(1)

// const getUserData = async()=> {
//     try {
//         const user = await fetchUser(4);
//         console.log("User Data:", user);
//     } catch (error) {
//         console.log("Error:", error);
//     }
// }

// getUserData();




function getUser(username){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({
                name: 'Yuvraj',
                type: 'premium'
            });
        },1500);
    });
}

function checkSubscription(user){
    return new Promise((resolve,reject)=>{
        if(user.type=="premium"){
            resolve("granted");
        }
        else{
            reject("subscribe please");
        }
    });
}

async function authenticateUser(username){
    try{
        const user=await getUser(username);
        const access=await checkSubscription(user);
        console.log(access);   
    }
    catch(error){
        console.log(error);
    }
}

authenticateUser('yuvraj123');
authenticateUser('rahul');
authenticateUser("123")
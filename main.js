// "use strict"
// class User{
//   constructor(username,email,password){
//     this.username=username;
//     this.email=email;
//     this.password=password
//   }
//   static countUsers(){
//     console.log('there are 50 users');
//   }
//   register(){
//     console.log(this.username +' is now registerd')
//   }
// }
// // let ram=new User('ram','ramgmail.com','123')
// // let hasya=new User('hasya','hasya@gmail.com','123')
// // ram.register();hasya.register
// // ();
//  User.countUsers()
// class Member extends User{
//   constructor(username,email,password,packages){
//       super(username,email,password);
//       this.package=packages
//   }
//   getpackage(){
//     console.log(this.username+" is subscribed to "+this.package+" package")
//   }
// } 
// let ram = new Member('ram','ram@gmail.com','1234','standard')
// ram.getpackage()
// ram.register()
/// return upcase.toUpperCase()
// }
// let name='ram'
// let template=`<h1>Hello ${uppercase(name)}</h1>
// <p> This is a simple template in JAVAscript</p>`
// document.getElementById('template').innerHTML=template
// let theString ="hello, my name is prakash i love javascript"

// console.log(theString.startsWith('hello'))
// console.log(theString.endsWith('javascript'))
// console.log(theString.includes('love'))
// console.log(0xff)
// console.log(0b101100)
// console.log(0o75343)
// console.log(Number.isFinite(123))
// console.log(Number.isNaN(Nan))
// console.log(Number.isInteger(1))
// function greet(greeting='hello world'){
// console.log(greeting)
// }
// greet()

// let a=[1,2,3]
// let b=[4,5,6]
// function test(){
//   console.log(a+','+b)
// }
// test(...a,...b)

// let myarray=[13,134,4313,134,12];
// let myset= new Set(myarray);
// myset.add('100')
// myset.add({a:1,b:2})
// myset.delete(12)
// // console.log(myset.size)
// myset.forEach(value=>{
//   console.log(value)
// })

// let myMap=new Map([['a1','hello world'],['b1','goodbye']])
// myMap.set('a3','hii')
// myMap.delete('a1')
// console.log(myMap.size)

// let carWeakSet  = new WeakSet();
// let car1 = {
//   make: 'Honda',
//   model:'Civic'
// };
// carWeakSet.add(car1);
// let car2 = {
//   make: 'tata',
//   model:'tata'
// };
// carWeakSet.add(car2);

// console.log(carWeakSet);

// let carWeakMap=new WeakMap();
// let key1={
//   id:1
// }
// let car1 = {
//     make: 'Honda',
//     model:'Civic'
//   };
//   let key2={
//     id:2
//   }
//   let car2={
//     make:'tata',
//     model:'tata'
//   }
//   carWeakMap.set(key1,car1)
//   carWeakMap.set(key2,car2)
//   carWeakMap.delete(key1)


//   console.log(carWeakMap)

// function prefixer(prefix){
//   this.prefix=prefix
// }
// prefixer.prototype.arra=function(arr){
// return arr.map((x)=>{
//   console.log(this.prefix+x)
// })
// }
// let pre =new prefixer('hello ')
// pre.arra(['ram','hasya'])
// let add =function (a,b){
//  let sum=a+b;
//  console.log(sum);
//  return false;
// }
  // let add = (a,b)=>{
  //   let sum=a+b;
  //   console.log(sum);
  //   return false;
  //  }
  // add(2,2 )
  // let myPromise=Promise.resolve('food')
  // myPromise.then((a)=>console.log(a))
  // let mypromise=new Promise(function(reslove,reject){
  //   setTimeout(()=>reslove(4),2000)
  // })
  // mypromise.then((arr)=>{
  //   arr+=9
  //   console.log(arr)
  // })
 

  // function getData(method,url){
  //   return new Promise(function(resolve,reject){
  //     var xhr= new XMLHttpRequest();
  //     xhr.open(method,url)
  //     xhr.onload=function(){
  //       if(this.status>=200 && this.status<300){
  //         resolve(xhr.response)
  //       }else{
  //         reject({
  //           ststus :this.status,
  //           ststusText:xhr.statusText

  //         })
  //       }
  //     }
  //     xhr.onerror=function(){
  //       reject({
  //         ststus :this.status,
  //         ststusText:xhr.statusText

  //       })
  //     }
  //     xhr.send()
  //   })
  // }
  // getData('GET','https://jsonplaceholder.typicode.com/todos')
  // .then(function(data){
  //   console.log(data)
  // })
  // .catch(function(err){
  //   console.log(err)
  // })

//   function getData(method,url){
//  return new Promise(function(resolve,reject){
//   var xhr= new XMLHttpRequest();
//   xhr.open(method,url)
//   xhr.onload=function(){
//     if(this.status>=200 && this.status<300){
//       resolve(xhr.response)
//     }else{
//       reject({
//         status:this.status,
//         statusText:this.statusText
//       })
//     }
//   }
//   xhr.onerror=function(){
//     reject({
//       status:this.status,
//       statusText:this.statusText
//     })
//   }
//   xhr.send()
//  })
//   }
//   getData('GET','https://jsonplaceholder.typicode.com/todos')
//   .then(data=>{
//     let todos=JSON.parse(data);
//     let output=''
//     for(let todo of todos){
//       output+=`
//       <li>
//         <h4>${todo.title}</h4>
//         <p>completed:${todo.completed}</p>
//       </li>
//       `
//     }
//     document.getElementById('template').innerHTML=output
//   })
//   .catch(err=>console.log(err))

function *g1(){
  console.log('hello')
  yield 'yield 1 ran...'
  console.log('world')
  yield'yield 2 ran...'
  return 'retuen'
}
var g=g1()
// console.log(g.next().value)
// console.log(g.next().value)
// console.log(g.next().value)
for(let val of g){
  console.log(val)
  

}
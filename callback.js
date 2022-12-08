const cookies = [{name:"Chocolate Cookies"},{name:"Macaron Cookies"}]
const newCookie = {name:"Biscotti Cookies"};


// Progression 1: create a function to get all the cookies
function cookieNames(cookie,addCookie,myCallBack){
  setTimeout(()=>{
      cookie.push(addCookie)
      // document.write("\n")
      myCallBack(cookie)
  },2000)
}
// cookieNames(cookies,createCookie,createCookie);


//Progression 3: Create a function to creat cookies
cookieNames(cookies,newCookie,function myCallBack(cookie){
  cookie.forEach((c)=>{
    document.write(c.name+"\n")
  })
})
  // let newCookie={name:"Vanilla Chocochip Cookies"};
  // setTimeout(()=>{
  //   cookies.push(newCookie)
    
  // },2000)


// Progression 5: calling function

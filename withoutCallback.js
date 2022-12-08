const cookies = [{name:"Chocolate Cookies"},{name:"Macaron Cookies"}]
const newCookie = {name:"Biscotti Cookies"};


// Progression 1: create a function to get all the cookies
function cookieNames(cookie){
  
  setTimeout(()=>{
    cookies.forEach((c)=>{
      document.write(c.name)
      document.write("\n")
    })
  },1000)
}
cookieNames(cookies)
  // Progression 2: using setTimeout() - use 1000 units for time parameter

//Progression 3: Create a function to creat cookies
  // use setTimeout() -- use 2000 units for time parameter

function createCookie(){
  let newCookie={name:"Vanilla Chocochip Cookies"};
  setTimeout(()=>{
    cookies.push(newCookie)
  },2000)
}
createCookie()
// Progression 4: calling functions


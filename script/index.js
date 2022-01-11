search()
async function search()
{
  var name=document.getElementById("search_btn").value;
 console.log(name);
  var res=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);

  var data=await res.json();
  
  appendFood(data.meals)
}
// append data

function appendFood(data)
{
 
  document.getElementById("food_container").innerHTML=""
  
  if(data!=null){
    data.map(({strMealThumb,idMeal,strMeal})=>
  {
  
    var mainDiv=document.createElement("div");

    var img=document.createElement("img");
    img.setAttribute("src",strMealThumb);
   var id=document.createElement("h5");
   id.textContent="Id "+idMeal;

    var name=document.createElement("h4");
    name.textContent="Food "+strMeal;
    var price=document.createElement("h5");
    var ran =Math.floor(Math.random() *100)+1
    price.textContent="Price "+ran+"Rs"
    

   mainDiv.append(img,id,name,price)
    document.getElementById("food_container").append(mainDiv)

  })
  }else{
    var img=document.createElement("img");
    img.setAttribute("src","https://tse1.mm.bing.net/th?id=OIP.aKpZRgqkH76SVkXKdHIQZwAAAA&pid=Api&P=0&w=300&h=300");
    document.getElementById("food_container").append(img);
    img.setAttribute("id","err")
  }
 
}
 //debounce function
 function debounce(func)
 {
     setTimeout(function()
     {
         func();
     },1000)
 }
var countNoOfPeople=0;
var countMissionaryAtA=0;
var countMissionaryAtB=0;
var countCannabilAtA=0;
var countCannabilAtB=0;

function myFunction(clicked){ 
var clickedElement = document.getElementById(clicked);
var theCSSprop = window.getComputedStyle(clickedElement, null).getPropertyValue("width");

var boat = document.getElementById("boat1");
var theCSSprop1 = window.getComputedStyle(boat, null).getPropertyValue("margin-left");

var IslandB1 = document.getElementById("B1");
var IslandB2 = document.getElementById("B2");
var IslandA1 = document.getElementById("A8");
var IslandA2 = document.getElementById("A9");
if (boat.contains(clickedElement))
{   
  if(theCSSprop==="40px" && theCSSprop1==="0px")
  {
  document.getElementById('A8').appendChild(clickedElement);
  countNoOfPeople-=1;
  }
  else if(theCSSprop==="50px" && theCSSprop1==="0px")
  {
  document.getElementById('A9').appendChild(clickedElement);
  countNoOfPeople-=1;
  }
  else if(theCSSprop==="40px" && theCSSprop1==="400px")
  {
  document.getElementById('B1').appendChild(clickedElement);
  countNoOfPeople-=1;
  }
  else if(theCSSprop==="50px" && theCSSprop1==="400px")
  {
  document.getElementById('B2').appendChild(clickedElement);
  countNoOfPeople-=1;
  }
  
}
  else{     
    if(theCSSprop1==="0px")
    {
    if(countNoOfPeople<2 &&((IslandA1.contains(clickedElement))||(IslandA2.contains(clickedElement)))){
    document.getElementById('boat1').appendChild(clickedElement);
    countNoOfPeople+=1;}
    }
   else if(theCSSprop1==="400px")
   {
     if(countNoOfPeople<2 &&((IslandB1.contains(clickedElement))||(IslandB2.contains(clickedElement))))
     {
      document.getElementById('boat1').appendChild(clickedElement);
      countNoOfPeople+=1;
     }
   }
  }
   countMissionaryAtA=0;
   countMissionaryAtB=0;
   countCannabilAtA=0;
   countCannabilAtB=0;
  let missionaryAtA = document.getElementById("A8").children;
  let cannabilAtA = document.getElementById("A9").children;
  let missionaryAtB = document.getElementById("B1").children;
  let cannabilAtB = document.getElementById("B2").children;
for (let i = 0; i < missionaryAtA.length; i++) {
  let theCssprop3 = window.getComputedStyle(missionaryAtA[i], null).getPropertyValue("width");
  if(theCssprop3 === "40px")
  {
    countMissionaryAtA+=1;
  }
}
for(let i=0;i<cannabilAtA.length;i++)
{ let theCssprop3 = window.getComputedStyle(cannabilAtA[i], null).getPropertyValue("width");
  if(theCssprop3 === "50px")
  {
    countCannabilAtA+=1;
  }
}
for (let i = 0; i < missionaryAtB.length; i++) {
  let theCssprop3 = window.getComputedStyle(missionaryAtB[i], null).getPropertyValue("width");
  if(theCssprop3 === "40px")
  {
    countMissionaryAtB+=1;
  }
}
for(let i=0;i<cannabilAtB.length;i++)
{ let theCssprop3 = window.getComputedStyle(cannabilAtB[i], null).getPropertyValue("width");
  if(theCssprop3 === "50px")
  {
    countCannabilAtB+=1;
  }
}
if(countNoOfPeople===0 && (countMissionaryAtA ===0 && countCannabilAtA===0 && countMissionaryAtB===3 && countCannabilAtB===3))
{
  setTimeout( won, 1000);
}
}
function won (){
  alert( "You Won")
  location.reload();
}
var count1=0;
function myFunction2(){
  var Boat1= document.getElementById("boat1");
  var theCSSprop2 = window.getComputedStyle(Boat1, null).getPropertyValue("margin-left");
  
   count1+=1;
   var start=0;
   var x = Boat1.childElementCount;
   if(x===0)
   {
     alert("boat is empty");
   }
  if(theCSSprop2==="400px" && count1===1)
  {
  var interval = setInterval(rmove, 200); 
  }
  if(theCSSprop2==="0px"&& count1===1)
  {
  var interval = setInterval(fmove, 200);
  }  
  function fmove(){
    if(((Boat1.contains(document.getElementById('a1')))||(Boat1.contains(document.getElementById('a2')))||(Boat1.contains(document.getElementById('a3')))
    ||(Boat1.contains(document.getElementById('a4')))||(Boat1.contains(document.getElementById('a5')))||(Boat1.contains(document.getElementById('a6')))))
    {  theCSSprop2 = window.getComputedStyle(Boat1, null).getPropertyValue("margin-left");
        Boat1.style.marginLeft =parseInt(theCSSprop2)+10+"px"; 
        if(theCSSprop2==="380px")
        {
        if(countMissionaryAtA<countCannabilAtA  && countMissionaryAtA!=0)
        {
          setTimeout(alert("game over"),30000);
          clearInterval(interval);
          location.reload();  
        }
    }
         else if(theCSSprop2==="390px")
          {
          clearInterval(interval);
          count1=0;
         
        }
     
    }
    else{
      count1=0;
      clearInterval(interval);
      }
  }
  function rmove(){
    if(((Boat1.contains(document.getElementById('a1')))||(Boat1.contains(document.getElementById('a2')))||(Boat1.contains(document.getElementById('a3')))
    ||(Boat1.contains(document.getElementById('a4')))||(Boat1.contains(document.getElementById('a5')))||(Boat1.contains(document.getElementById('a6')))))
    {
    theCSSprop2 = window.getComputedStyle(Boat1, null).getPropertyValue("margin-left");
    Boat1.style.marginLeft= parseInt(theCSSprop2) -10+"px";
    if(theCSSprop2==="20px")
    {
    if(countMissionaryAtB<countCannabilAtB  && countMissionaryAtB!=0)
    { 
      setInterval(alert("game over"),30000);
      clearInterval(interval);
      location.reload();  
    }
   } 
    else if(theCSSprop2==="10px")
    {
      clearInterval(interval);
      count1=0;
    }
  }
  else{
    count1=0;
    clearInterval(interval);
  }
 }
}
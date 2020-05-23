(() =>{
  console.log('Floral Logos!');
//select element here
  let flowerGarden = document.querySelector("#flowerGarden");
  let cactusVillage = document.querySelector("#cactusVillage");
  let lotusPower = document.querySelector("#lotusPower");
  let spring = document.querySelector("#spring");
  let palmLeafSummerCamp = document.querySelector("#palmLeafSummerCamp");
  let shanty = document.querySelector("#shanty");
  let rose = document.querySelector("#rose");
  let blueFlower = document.querySelector("#blueFlower");
  let yellowFlower = document.querySelector("#yellowFlower");
  let greenTulip = document.querySelector("#greenTulip");


function logID(){
  console.log("Icon",this.id);
  this.classList.add("selected");
}
flowerGarden.addEventListener("click", logID);
cactusVillage.addEventListener("click", logID);
lotusPower.addEventListener("click", logID);
spring.addEventListener("click", logID);
palmLeafSummerCamp.addEventListener("click", logID);
shanty.addEventListener("click", logID);
rose.addEventListener("click", logID);
blueFlower.addEventListener("click", logID);
yellowFlower.addEventListener("click", logID);
greenTulip.addEventListener("click", logID);
})();

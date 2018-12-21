//$("#box1").css("background-color","#ff0")
//$("#box1").css({"background-color":"#ff0"})

$("#box1").css("background-color", "#ff0");

//ES5
 document.getElementById("#box1").addEventListener("click", function(){

 });
//ES6
 document.querySelector("#box1").addEventListener("click", function(){
	 
 });
$("#box1").on("mouseenter", function(){
	console.log("마우스 온!")
});
$("#box1").on("mouseleave", function(){
	console.log("마우스 오프!")
});
/* $("#box1").hover(function () {
	console.log("마우스 온!")
}, function () {
	console.log("마우스 오프!")
}); 요즘은 잘 안쓰는 hover */
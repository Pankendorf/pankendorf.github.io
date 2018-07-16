$(document).ready(function(){
  
  


var x=0;var prize;var color;var z;var timerId;var len;
  
  
  len=$('.card').length;
  
  $('.test').html(len);

$(".card").click(function(){
clearInterval(timerId);
x++
  
if(x==1){
prize=Math.floor(Math.random()*9+1);
  $('.test').html(prize);
}
 
$(this).css({transform: 'rotatey(0deg)'}).addClass('active');
   
var cardname=$(this).attr('name');
    
if(cardname!=prize){
      cardname="LOSE",
      color="red" }
else{
      cardname="WIN",
      color="green",
   $(this).siblings('.card').css({transform: 'rotatey(0deg)'}).addClass('active').children('.face').html('LOSE').css({color:'red'})

}
    
$(this).children('.face').html(cardname).css({color: color});
    

  
}); 

 
 
  
$("button").click(function(){
  
  setTimeout(function () {
  z=10;
  
    
  timerId=setInterval(function() {
 
  
  $(".card[name="+z+"]").css({transform: 'rotatey(180deg)'}).removeClass('active');
  x=0;
  z--
  }, 100);
      
      
  }, 100);
  
  })
  
 

})
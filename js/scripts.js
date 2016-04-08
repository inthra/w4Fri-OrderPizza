// business logic ---------------
function Pizza(top1, top2, top3, size, name) {
  this.top1 = top1;
  this.top2 = top2;
  this.top3 = top3;
  this.size = size;
  this.name = name;
}



// user interface logic ---------------
$(document).ready(function(){
  $("#order form").submit(function(event){
    event.preventDefault();
    var inputTop1 = parseInt($("input:radio[name=first]:checked").val());
    alert(inputTop1)


  });
});

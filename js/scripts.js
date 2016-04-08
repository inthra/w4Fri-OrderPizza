// business logic ---------------
var toppings = [];
function Pizza(top1, top2, top3, size, name) {
  this.top1 = top1;
  this.top2 = top2;
  this.top3 = top3;
  this.size = size;
  this.name = name;
};

Pizza.prototype.sizePrice = function(size) {
  var price = 7;

  if (this.size === "small") {
    return price;
  }
  else if (this.size === "medium") {
    return price += 2;
  }
  else {
    return price += 4;
  }
}

  // prototype for calculating total price -----
Pizza.prototype.totalPrice = function() {
  var total = this.top1 + this.top2 + this.top3 + this.sizePrice(this.size);

  return total;
};


// user interface logic ---------------
$(document).ready(function(){
  $("#order form").submit(function(event){
    event.preventDefault();
    var inputTop1 = parseInt($("input:radio[name=first]:checked").val());
    var inputTop2 = parseInt($("input:radio[name=second]:checked").val());
    var inputTop3 = parseInt($("input:radio[name=third]:checked").val());
    var inputSize = $("input:radio[name=size]:checked").val();
    var inputName = $("#name").val();

    var newOrder = new Pizza(inputTop1, inputTop2, inputTop3, inputSize, inputName);
    console.log(newOrder);

    $("ul#orderList").append("<li><span class='list'>" + newOrder.name +"</span></li>");

    $(".list").last().click(function(){
      $("#output").show();
      $("#total").text(newOrder.totalPrice());
      $("#orderName").text(newOrder.name);
    });

    $("#name").val("");
  });
});

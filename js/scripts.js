// business logic ---------------
function Pizza(top1, top2, top3, size, name) {
  this.top1 = top1;
  this.top2 = top2;
  this.top3 = top3;
  this.size = size;
  this.name = name;
};

Pizza.prototype.toppings = function(topping) {
  var price = 0;

  if (topping === "parmesan" || topping === "bacon" || topping === "garlic-cloves" || topping === "broccoli" || topping === "pineapple" || topping === "spinach" || topping === "anchovy") {
    return price = 2;
  }
  else if (topping === "goat-cheese" || topping === "mozzarella" || topping === "slice-beef" || topping === "bbq-chicken" || topping === "asparagus" || topping === "organic-basil" || topping === "avocado" || topping === "strawberry") {
    return price = 3;
  }
  else if (topping === "special-herb" || topping === "primb-rib") {
    return price = 10;
  }
  else if (topping === "truffle" || topping === "king-crab" || topping === "lobster" || topping === "" || topping === "" || topping === "" || topping === "" || topping === "" || topping === "" || topping === "" || topping === "") {
    return price = 12;
  }
  else if (topping === "kobe-beef") {
    return price = 18;
  }
  else {
    return price;
  }
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
};

  // prototype for calculating total price -----
Pizza.prototype.totalPrice = function() {
  var total = this.toppings(this.top1) + this.toppings(this.top2) + this.toppings(this.top3) + this.sizePrice(this.size);

  return total;
};


// user interface logic ---------------
$(document).ready(function(){
  $("#order form").submit(function(event){
    event.preventDefault();
    var inputTop1 = $("input:radio[name=first]:checked").val();
    var inputTop2 = $("input:radio[name=second]:checked").val();
    var inputTop3 = $("input:radio[name=third]:checked").val();
    var inputSize = $("input:radio[name=size]:checked").val();
    var inputName = $("#name").val();

    var newOrder = new Pizza(inputTop1, inputTop2, inputTop3, inputSize, inputName);

    $("ul#orderList").append("<li><span class='list'>" + newOrder.name +"</span></li>");

    $(".list").last().click(function(){
      $("#output").show();
      $("#total").text(newOrder.totalPrice());
      $("#orderName").text(newOrder.name);
      $("ul#pizzaDetail").empty().append("<li>Toppings: " + newOrder.top1 + ", " + newOrder.top2 + ", " + newOrder.top3 + "</li>");
      $("ul#pizzaDetail").append("<li>Size: " + newOrder.size + "</li>");
    });

    $("#name").val("");
  });
});

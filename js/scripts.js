//Business Logic -------
function Pizza(size, toppings) {
this.size = size;
this.toppings = toppings;
}

var toppingsArray = [];
var price = 0;

Pizza.prototype.totalPrice = function() {
  if (this.size === "small") {
    price += 10;
  } if(this.size === "large") {
    price += 15;
  } if (this.size === "family-size") {
    price += 20;
  }
  return price + this.toppings.length *1;
  };

//UI Logic -------
$(document).ready(function() {
  $("form#customPizza").submit(function(event) {
    event.preventDefault();

    var customerName = $("#customer-name").val();
    var currentSize = $("#size").val();

    //Pushes the checked values into the empty array above
    $("input:checkbox[name=toppings-deluxe]:checked").each(function() {
      toppingsArray.push($(this).val());
    });

    var pizza1 = new Pizza(currentSize, toppingsArray);

    //Lets the customer review and confirm their order
    var confirmed = confirm("Your total is $" + pizza1.totalPrice() + ". Press \"okay\" to complete your order.");

    if (confirmed === true) {
      alert("Thanks for your order, " + customerName + "! Your pizza will be ready for pickup in 30 minutes.");
      location.reload(true);
    } else if (confirmed === false) {
      location.reload(true);
    }

  });
});

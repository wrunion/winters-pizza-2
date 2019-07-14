//Business Logic -------
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

var price = 0;

var toppingsArray = [];

var toppingPrice = function() {
  return toppingsArray.length * 1;
};

//UI Logic -------
$(document).ready(function() {
  $("form#customPizza").submit(function(event) {
    event.preventDefault();

    var customerName = $("#customer-name").val();
    var currentSize = $("#size").val();

    //Creates a toppings array by pushing the checked values into the array above
    $("input:checkbox[name=toppings-deluxe]:checked").each(function() {
      toppingsArray.push($(this).val());
    });

    var pizza1 = new Pizza(currentSize, toppingsArray);

    if (pizza1.size === "small") {
      price += 10;
    } else if (pizza1.size === "large") {
      price += 15;
    } else if (pizza1.size === "family-size") {
      price += 20;
    }

    var subtotal = toppingPrice();
    var total = subtotal + price;
    var confirmed = confirm("Your total is $" + total + ". Press \"okay\" to complete your order.");

    if (confirmed === true) {
      alert("Thanks for your order, " + customerName + "! Your pizza will be ready for pickup in 30 minutes.");
      location.reload(true);
    } else if (confirmed === false) {
      location.reload(true);
    }

  });
});

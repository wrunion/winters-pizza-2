
//Business Logic -------
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

var price = 0;

// Pizza.prototype.totalPrice = function() {
//     if (size === "small") {
//          price += 10;
//         } else if (size === "large") {
//           price += 15;
//         } else if (size === "family-size") {
//           price += 20;
//         }
// };

// function PizzaPrice(size, toppings) {
//
// }

  var toppingsArray = [];
  // var toppingPrice = function() {
  //   return toppingsArray.length * 1;
  // };

  var toppingPrice = function() {
      return toppingsArray.length * 1;
  };
  //
  // var totalPrice = 0;

  // var totalPrice = function(size) {
  //   if (size === "small") {
  //      toppingPrice += 10;
  //   } else if (size === "large") {
  //      toppingPrice += 15;
  //   } else if (size === "family-size") {
  //     toppingPrice += 20;
  //   }
  // };

  // var total = function() {
  //   return subtotal() + 10;
  // };

  // Pizza.prototype.total = function() {
  //     if (size === "small") {
  //       return 10 + subtotal;
  //     } else if (size === "medium") {
  //       return 15 + subtotal;
  //     } else if (size === "large") {
  //       return 20 + subtotal;
  //     }
  // };

  // var total = function() {
  //   if (size === "small") {
  //     return 10 + subtotal;
  //   } else if (size === "medium") {
  //     return 15 + subtotal;
  //   } else if (size === "large") {
  //     return 20 + subtotal;
  //   }
  //   return 10 + subtotal;
  // };

  //UI Logic -------
  $(document).ready(function() {
    $("form#customPizza").submit(function(event) {
      event.preventDefault();
      var currentSize = $("#size").val();
      alert(currentSize);

      //Creates a toppings array by pushing the checked values into the array above
      // $("input:checkbox[name=toppings-regular]:checked").each(function() {
      //   regularToppingsArray.push($(this).val());
      // });
      // alert(regularToppingsArray);
      //Creates a second toppings array by pushing the checked values into the array above

      $("input:checkbox[name=toppings-deluxe]:checked").each(function() {
        toppingsArray.push($(this).val());
      });
      alert(toppingsArray);
      var pizza1 = new Pizza(currentSize, toppingsArray);

      if (pizza1.size === "small") {
        price += 10;
      } else if (pizza1.size === "large") {
        price += 15;
      } else if (pizza1.size === "family-size") {
        price += 20;
      }

      // var toppingPrice2 = pizza1.toppings.length();

      // var totalPrice = function() {
      //     return price + toppingPrice();
      // };

      // alert(toppingPrice());
      var subtotal = toppingPrice();
      var total = subtotal + price;
      alert(total);

      // var totalPrice =
      // alert(toppingPrice());

      // var total = function() {
      //   if (currentSize === "small") {
      //     return toppingPrice() += 10;
      //   } else if (currentSize === "large") {
      //     return toppingPrice() += 15;
      //   } else if (currentSize === "family-size") {
      //     return toppingPrice() += 20;
      //   }
      // };





      // alert(totalPrice(currentSize)());
    });
  });

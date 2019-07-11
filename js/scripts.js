// function Pizza(size, toppings, price) {
//     this.size = size;
//     this.toppings = toppings;
//     this.price = function() {
//       toppings.length * 1;
//     }
// }
//Business Logic -------
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  // this.subtotal = function() {
  //   return toppingsArray.length * 1;
  // }
  //
  // this.total = function() {
  //   if (size === "small") {
  //     return 10 + subtotal;
  //   } else if (size === "medium") {
  //     return 15 + subtotal;
  //   } else if (size === "large") {
  //     return 20 + subtotal;
  //   }
  // };
}

  var toppingsArray = [];
  // var size;
  var subtotal = function() {
    return toppingsArray.length * 1;
  };

  var total = function() {
    return subtotal() + 10;
  };

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
      //Creating a toppings array by pushing the checked values into the array above
      $("input:checkbox[name=toppings]:checked").each(function() {
        toppingsArray.push($(this).val());
      });
      alert(toppingsArray);

      var pizza1 = new Pizza(currentSize, toppingsArray);
      alert(subtotal());
      alert(total());
    });
  });

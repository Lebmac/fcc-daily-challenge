/*
=== Free Shipping ===
=== Source ===
https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-18

=== Input ===
Given:
- an array of strings representing items in your shopping cart, and 
- a number for the minimum order amount to qualify for free shipping, 

=== Output ===
determine if the items in your shopping cart qualify for free shipping.

=== Function ===
The given array will contain items from the list below:

Item	Price
"shirt"	34.25
"jeans"	48.50
"shoes"	75.00
"hat"	19.95
"socks"	15.00
"jacket"	109.95 */

function getsFreeShipping(cart, minimum) {
  const values = {
    shirt:   34.25,
    jeans:   48.50,
    shoes:   75.00,
    hat:     19.95,
    socks:   15.00,
    jacket: 109.95,
  };

  let total = cart.reduce((value, item) => {
    return value + values[item];
  }, 0)

  return (total >= minimum);
}

/* 
=== Design rationale === 
Build a lookup table to map all items to their prices.
Loop through cart and sum the price of all items.
Validate the sum meets minimum criteria for free shipping.
*/

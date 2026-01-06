function updateInventory(arr1, arr2) {
    let keys = [];
    let items = arr1.concat(arr2);
    let output = [];

    // Extract a complete set of product keys from the
    // two input arrays. Remove duplicates, and sort
    // Them alphabetically.
    items.map(el => { keys = [...keys, el[1]]; });
    keys = [...new Set(keys)].sort();

    // Filter through input items, and add stock qty
    // against each key.
    // improvement: delete an item once it has been summed.
    keys.forEach(key => {
        let qty = 0;
        items.forEach(item => {
            if (key == item[1]) {
                qty += item[0];
            }
        });
        output = [...output, [qty, key]];
    });
    
    return output;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);

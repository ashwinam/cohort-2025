/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  expenditures = [];
  for (let item = 0; item < transactions.length; item++) {
    const input_object = transactions[item];
    let isItemFound = false;
    
    
      
      for (let object = 0; object < expenditures.length; object++) {
        const element = expenditures[object];
        if (input_object.category === element.category) {
          element.totalSpent += input_object.price;
          isItemFound = true;
          break;
        }
        
      }
 if (!isItemFound) {
    expenditures.push({
      category: input_object.category,
      totalSpent: input_object.price
    });
  }
  }
  return expenditures;
}


trnsc = [
  {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	},
  {
		id: 2,
		timestamp: 1656076800000,
		price: 25,
		category: 'Food',
		itemName: 'manchurian',
	}
]

console.log(calculateTotalSpentByCategory(trnsc));

module.exports = calculateTotalSpentByCategory;

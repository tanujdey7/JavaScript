var originalPrice = 999;
var sellingPrice = 299;
var discountPer = ((originalPrice - sellingPrice) * 100) / originalPrice;
console.log(`Discount Percentage: ${Math.round(discountPer)}`);
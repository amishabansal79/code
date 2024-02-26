// Task Statements:
// Calculate Total Inventory Value:

// Iterate over the products array.
// For each product, calculate its total value (quantity * price).
// Sum up the total values to get the total inventory value.
// Print Details of Each Product:

// Iterate over the products array.
// Print the details of each product, including its quantity, price, and total value.
// Check and Print Out-of-Stock Products:
let n=0;
let m=0;
let k=0;
let total=[];
let totalsum=0;
let product=["Laptop","phone","bag","pen","eraser","pencil"];
let price=[70000,40000,1000,20,5,10]
let quantity=[10,20,10,10,5,10]
for(let i=0;i<product.length;i++){
  total[i]= price[i]*quantity[i];
}
console.log("product\tprice\tquantity\ttotal");
for(let i=0;i<product.length;i++){
  console.log(product[i]+"\t"+price[i]+"\t"+quantity[i]+"\t"+total[i]);
}
for(let i=0;i<product.length;i++){
  totalsum=totalsum+total[i];
}
console.log("total sum="+totalsum+"\n");

let stock=[100,30,80,60,40,20]
console.log("product\tprice\tquantity\tstock");
for(let i=0;i<product.length;i++){
  console.log(product[i]+"\t"+price[i]+"\t"+quantity[i]+"\t\t"+(stock[i]-quantity[i]));
}

for(let i=0;i<product.length;i++){
  if(stock[i]==0){
      console.log("OUT OF STOCK");
  }
}

// Iterate over the products array.
// Check if the quantity of a product is zero.
// If zero, print a message indicating the product is out of stock.
// Identify Product with Highest Price:

// Initialize a variable to store the product with the highest price.
// Iterate over the products array.
// Compare the price of each product and update the variable if a higher price is found.
// Print the details of the product with the highest price.
// Prompt User for Product Name and Search:

// Prompt the user to enter a product name.
// Iterate over the products array.
// Check if the entered product name matches any in the array.
// If found, print the details of the product; otherwise, print "Product not found."

for(let i=0;i<product.length;i++){
  if(quantity[i]==0){
      console.log("OUT OF STOCK");
  }
}
console.log("\n");
for(let i=0;i<product.length;i++){
  m=price[k];
  if(m<price[i+1]){
    k++;
  }
  n=product[k];
}
console.log("Highest price:"+m+"of product"+n);
let f=0;
let a=prompt("Enter a product name");
for(let i=0;i<product.length;i++){
  if(product[i]===a){
    console.log("Product found");
       f++;
  }
}
if(f==0){
  console.log("Product not found");
}





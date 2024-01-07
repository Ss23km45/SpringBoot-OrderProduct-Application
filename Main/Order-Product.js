// async function fetchProductData(){
//     const productData = await fetch('http://127.0.0.1:8083/product/v1/getAllProducts'
//     , {
//         mode: 'no-cors',
//         headers: {
//             "Access-Control-Allow-Origin": "*",
//             "Access-Control-Allow-Methods": "POST, GET, PUT",
//             "Access-Control-Allow-Headers": "Content-Type",
//             "Content-Type": "application/json",
//             "Accept": "application/json"
//         }
//     });
//We have to call real time api
    // const mydata = await productData.json();
 const productData = [
    { price: 15000, productName: 'Redmi', quantity: 20, productId: 1111 },
    {
      price: 50000,
      productName: 'Apple-Iphone',
      quantity: 15,
      productId: 2111
    },
    {
      price: 85000,
      productName: 'Dell-Laptop',
      quantity: 36,
      productId: 3111
    },
    {
      price: 20000,
      productName: 'Refridgerator',
      quantity: 11,
      productId: 4111
    },
    {
      price: 12000,
      productName: 'Samsung',
      quantity: 29,
      productId: 5111
    },
    { price: 185000, productName: 'FZ-x', quantity: 12, productId: 6111 },
    {
      price: 6000,
      productName: 'MemoryCard',
      quantity: 134,
      productId: 7111
    }
  ]   
    // appendDataToHtmlTable(productData);


function myFunction(){
    // fetchProductData();
    appendDataToHtmlTable(productData);
}

function appendDataToHtmlTable(jsonData){
    console.log(jsonData);
    const myTable = document.getElementById("product_Table");
    jsonData.forEach(element => 
        {
        let tr = document.createElement("tr");
        Object.values(element).forEach(value => {
            let td = document.createElement("td");
            td.innerHTML += value;
            tr.appendChild(td);
        })
        myTable.appendChild(tr);
    });
}


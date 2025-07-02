
// document.addEventListener("DOMContentLoaded", function(){
//     const apiUrl = "http://localhost:8080/products"
//     const tableBody = document.getElementById("tableBody");

//     fetch(apiUrl)
//         .then(response => response.json)
//         .then(data => {

//             data.forEach(proudct => {
//                 const row = document.createElement("tr");
//                 row.innerHTML =`
//                     <td> ${proudct.proId} </td>
//                     <td> ${proudct.proName} </td>
//                     <td> ${proudct.price} </td>
//                 `;

//                 tableBody.appendChild(row)
//             });

//         }).catch(error => {
//             console.log("there is error " + error);
//         })
// })

document.addEventListener("DOMContentLoaded", fetchProduct);

async function fetchProduct() {
    try {

        const response = await fetch("http://localhost:8080/products")

        if (response.ok) {
            const data = await response.json();
            const tableBody = document.getElementById("tableBody");

            tableBody.innerHTML = '';

            data.forEach(product => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    
                    <td> ${product.proName} </td>
                    <td> ${product.proBrand} </td>
                    <td> ${product.price} </td>
                    <td> <button onclick="delelteProduct('${product.proId}')" class="btn btn-primary mt-2"> Delete </button> </td>
                    <td> <button onclick="updateProduct( ${product.proId}, '${product.proName}', '${product.proBrand}' , '${product.price}')" class="btn btn-primary mt-2"> Update </button> </td>
                `;

                tableBody.appendChild(row)
            });
        }

    } catch (error) {
        console.log("erorr is " + error)
    }
}

async function delelteProduct(id) {
    const baseURL = "http://localhost:8080/products/"+id;
    try {
        const response = await fetch(baseURL, {
            method : "DELETE"
        });
        alert("data deleted successfully");
        fetchProduct();
    }catch(error){
        console.log("error ..." + error)
    }
}

function updateProduct(id, name, brand, price){
    window.location.href = `update.html?id=${id}&name=${name}&brand=${brand}&price=${price}`;
}

function redirectAddProduct(){
    window.location.href = 'index.html';
}
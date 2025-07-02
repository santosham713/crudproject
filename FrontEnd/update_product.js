
document.addEventListener("DOMContentLoaded", () => {

    const URLParams = new URLSearchParams(window.location.search);

    document.getElementById("proId").value = URLParams.get('id');
    document.getElementById("update_name").value = URLParams.get('name');
    document.getElementById("update_brand").value = URLParams.get('brand');
    document.getElementById("update_price").value = URLParams.get('price');

});

async function updateProduct(event) {
    event.preventDefault();

    const id = document.getElementById("proId").value;
    const proName = document.getElementById("update_name").value;
    const proBrand = document.getElementById("update_brand").value;
    const price = document.getElementById("update_price").value;

    const product = {proName, proBrand, price}

    console.log("Your converted data is " + JSON.stringify(product))

    try {

        const urlapp = "http://localhost:8080/products/"+id;

        const response = await fetch(urlapp, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })

        if (response.ok) {
            alert("Data updated successfully ");
            window.location.href = "product.html";
        }else {
            console.log("some problem")
        }

    } catch (error) {
        console.log("erorr " + error)
    }
}
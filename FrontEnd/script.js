

async function handleSumbit(event) {

    event.preventDefault();

    const proName = document.getElementById("name").value;
    const proBrand = document.getElementById("brand").value;
    const price = document.getElementById("price").value;

    const product = { proName, proBrand, price };

    console.log("this is your data of product " + JSON.stringify(product));

    const baseURL = "http://localhost:8080/products";

    // fetch(baseURL,{
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify(product)
    // })
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log("User saved:", data);
    //     })
    //     .catch(error => {
    //         console.error("Error:", error);
    //     });


    try {
        const response = await fetch(baseURL, {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(product)
        });

        if (response.ok) {
            alert("Data added successfully ... ");
            window.location.href = "product.html";
        }else{
            alert("something wrong");
        }

    } catch (error) {
        console.log("error .." + error)
    }

}

function redirectToShow(){
    window.location.href = "product.html"
}


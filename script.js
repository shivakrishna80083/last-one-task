fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((products) => {
        products.forEach((product) => {
            let h1 = document.createElement("h1");

            h1.textContent = product.title;

            document.querySelector(".products").appendChild(h1);
        });
    });




    fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((products) => {
        products.forEach((product) => {
            let h2 = document.createElement("h2");

            h2.textContent = product.id + " - " + product.title;

            document.querySelector(".products").appendChild(h2);
        });
    });



    fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((products) => {
        products.forEach((product) => {
            let p = document.createElement("p");

            p.textContent = product.title.slice(0, 30);

            document.querySelector(".products").appendChild(p);
        });
    });




    fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((products) => {
        products.forEach((product) => {
            let p = document.createElement("p");

            p.textContent = product.description.slice(0, 100);

            document.querySelector(".products").appendChild(p);
        });
    });





    fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((products) => {
        products.forEach((product) => {
            let div = document.createElement("div");

            let img = document.createElement("img");
            img.src = product.image;

            div.appendChild(img);

            document.querySelector(".products").appendChild(div);
        });
    });




    fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((products) => {
        products.forEach((product) => {
            let div = document.createElement("div");

            let h2 = document.createElement("h2");
            h2.textContent = product.title;

            let p = document.createElement("p");
            p.textContent = product.description;

            let img = document.createElement("img");
            img.src = product.image;
            img.width = 200;

            div.append(h2, p, img);

            document.querySelector(".products").appendChild(div);
        });
    });






    fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((products) => {
        products.forEach((product) => {
            let p = document.createElement("p");

            p.textContent = "Price: $" + product.price;

            document.querySelector(".products").appendChild(p);
        });
    });






    fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((products) => {
        products.forEach((product) => {
            let h3 = document.createElement("h3");

            h3.textContent = product.category;

            document.querySelector(".products").appendChild(h3);
        });
    });




    fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((products) => {
        products.forEach((product) => {
            let h2 = document.createElement("h2");

            h2.textContent = product.title.toUpperCase();

            document.querySelector(".products").appendChild(h2);
        });
    });





    fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((products) => {
        products.forEach((product) => {
            let p = document.createElement("p");

            p.textContent =
                "Title: " + product.title +
                " | Character Count: " + product.title.length;

            document.querySelector(".products").appendChild(p);
        });
    });





    fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((products) => {
        let firstFive = products.slice(0, 5);

        firstFive.forEach((product) => {
            let h2 = document.createElement("h2");

            h2.textContent = product.title;

            document.querySelector(".products").appendChild(h2);
        });
    });





    fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((products) => {
        products.forEach((product) => {
            let div = document.createElement("div");

            let p1 = document.createElement("p");
            p1.textContent = "ID: " + product.id;

            let p2 = document.createElement("p");
            p2.textContent = "Title: " + product.title;

            let p3 = document.createElement("p");
            p3.textContent = "Price: $" + product.price;

            div.append(p1, p2, p3);

            document.querySelector(".products").appendChild(div);
        });
    });





    fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((products) => {
        products.forEach((product) => {
            let img = document.createElement("img");

            img.src = product.image;
            img.style.width = "200px";

            document.querySelector(".products").appendChild(img);
        });
    });




    fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((products) => {
        products.forEach((product) => {
            let div = document.createElement("div");

            div.className = "card";

            let h2 = document.createElement("h2");
            h2.textContent = product.title;

            div.appendChild(h2);

            document.querySelector(".products").appendChild(div);
        });
    });




    fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((products) => {
        products.forEach((product) => {
            let div = document.createElement("div");

            let h2 = document.createElement("h2");
            h2.textContent = product.title;

            let p = document.createElement("p");
            p.textContent = product.description.slice(0, 50);

            div.append(h2, p);

            document.querySelector(".products").appendChild(div);
        });
    });



    fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((products) => {
        products.forEach((product) => {

            console.log(product.title);

            let h2 = document.createElement("h2");
            h2.textContent = product.title;

            document.querySelector(".products").appendChild(h2);
        });
    });




    fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((products) => {
        products.forEach((product) => {
            let div = document.createElement("div");

            let h2 = document.createElement("h2");
            h2.textContent = product.title;

            let h3 = document.createElement("h3");
            h3.textContent = product.category;

            div.append(h2, h3);

            document.querySelector(".products").appendChild(div);
        });
    });





    fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((products) => {

        document.querySelector(".api").textContent =
            "Product data loaded successfully!";

    })
    .catch((error) => {
        console.warn(error.message);
    });





    let api = document.querySelector(".api");

api.textContent = "Loading...";

fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((products) => {
        api.textContent = "Data loaded successfully!";
    })
    .catch((error) => {
        api.textContent = "Error: " + error.message;
    });





    let api1 = document.querySelector(".api");

api1.textContent = "Loading...";

fetch("https://fakestoreapi.com/products")
    .then((response) => {
        if (!response.ok) {
            throw new Error("API request failed");
        }

        return response.json();
    })
    .then((products) => {
        api1.textContent = "Products loaded successfully!";
    })
    .catch((error) => {
        api1.textContent = "Error: " + error.message;
    })
    .finally(() => {
        api1.textContent += " API request completed";
    });


    
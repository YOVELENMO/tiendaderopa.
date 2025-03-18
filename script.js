document.addEventListener("DOMContentLoaded", function() {
    if (document.getElementById("lista-carrito")) {
        mostrarCarrito();
    } else if (document.getElementById("nombre-producto")) {
        mostrarDetalles();
    }
});

function agregarAlCarrito(producto, precio) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito.push({ producto, precio });
    localStorage.setItem("carrito", JSON.stringify(carrito));
    alert(`${producto} agregado al carrito.`);
}

function mostrarCarrito() {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    let listaCarrito = document.getElementById("lista-carrito");
    listaCarrito.innerHTML = "";

    carrito.forEach((item, index) => {
        let li = document.createElement("li");
        li.textContent = `${item.producto} - $${item.precio}`;

        let btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.onclick = function() {
            eliminarDelCarrito(index);
        };

        li.appendChild(btnEliminar);
        listaCarrito.appendChild(li);
    });
}

function eliminarDelCarrito(index) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito.splice(index, 1);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
}

function vaciarCarrito() {
    localStorage.removeItem("carrito");
    mostrarCarrito();
}

function mostrarDetalles() {
    const urlParams = new URLSearchParams(window.location.search);
    let nombreProducto = urlParams.get("producto");
    let precioProducto = urlParams.get("precio");

    document.getElementById("nombre-producto").textContent = nombreProducto || "Producto no encontrado";
    document.getElementById("precio-producto").textContent = precioProducto ? `Precio: $${precioProducto}` : "";
}
document.addEventListener("DOMContentLoaded", function() {
    const carrito = [];

    document.getElementById("registroForm")?.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Registro exitoso");
    });

    document.getElementById("loginForm")?.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Inicio de sesión exitoso");
    });
});
document.addEventListener("DOMContentLoaded", function() {
document.getElementById("registroForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Registro exitoso");
    cerrarRegistro();
});

document.getElementById("loginForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    let usuario = document.getElementById("usuario").value;
    let password = document.getElementById("password").value;
    if (usuario && password) {
        alert("Inicio de sesión exitoso");
        cerrarLogin();
    } else {
        alert("Por favor, complete todos los campos");
    }
});
});

function abrirRegistro() {
document.getElementById("registroPopup").style.display = "block";
}

function cerrarRegistro() {
document.getElementById("registroPopup").style.display = "none";
}

function abrirLogin() {
document.getElementById("loginPopup").style.display = "block";
}

function cerrarLogin() {
document.getElementById("loginPopup").style.display = "none";
}
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("registroForm")?.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Registro exitoso");
        cerrarRegistro();
    });
    
    document.getElementById("loginForm")?.addEventListener("submit", function(event) {
        event.preventDefault();
        let usuario = document.getElementById("usuario").value;
        let password = document.getElementById("password").value;
        if (usuario && password) {
            alert("Inicio de sesión exitoso");
            cerrarLogin();
        } else {
            alert("Por favor, complete todos los campos");
        }
    });
    });
    
    function abrirRegistro() {
    document.getElementById("registroPopup").style.display = "block";
    }
    
    function cerrarRegistro() {
    document.getElementById("registroPopup").style.display = "none";
    }
    
    function abrirLogin() {
    document.getElementById("loginPopup").style.display = "block";
    }
    
    function cerrarLogin() {
    document.getElementById("loginPopup").style.display = "none";
    }
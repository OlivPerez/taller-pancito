
async function loadFragment(id, file) {
    const response = await fetch(file);
    const text = await response.text();
    document.getElementById(id).innerHTML = text;
}

loadFragment("navbar", "navbar.html");
loadFragment("destacados", "destacados.html");
loadFragment("inicio", "inicio.html");
loadFragment("productos", "productos.html");
loadFragment("servicios", "servicios.html");
loadFragment("contacto", "contacto.html");
loadFragment("nosotros", "nosotros.html")
loadFragment("preguntas", "preguntas.html")
loadFragment("footer", "footer.html");



const btnSubmitLogin = document.getElementById("btnSubmitLogin");
btnSubmitLogin.addEventListener("click", function () {
    const user = document.getElementById("txtUsernameLogin").value;
    const pass = document.getElementById("txtPasswordLogin").value;

    console.log("Usuario:", user);

    // validacion de credenciales
    if (user === "admin" && pass === "admin") {

        alert("Se ha logueado correctamente, bienvenido, " + user);
    } else {
        alert("Usuario o contraseña incorrectos.");
    }
});
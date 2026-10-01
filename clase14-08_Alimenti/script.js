const contraseña = "hola123";

function esSegura(contraseña) {
    if (contraseña.length >= 8) {
        return true;
    } else {
        return false;
    }
}

function tieneNumero(contraseña) {
    for (const caracter of contraseña) {
        if (caracter >= "0" && caracter <= "9") {
            return true;
        }
    }
    return false;
}

function tieneMayuscula(contraseña) {
    for (const caracter of contraseña) {
        if (caracter === caracter.toUpperCase() && caracter !== caracter.toLowerCase()) {
            return true;
        }
    }
    return false;
}

console.log(esSegura("hola123"));
console.log(esSegura("miClaveSegura2026"));

console.log(tieneNumero("hola123"));
console.log(tieneNumero("holamundo"));
console.log(tieneNumero("Clave2026"));

console.log(tieneMayuscula("hola123"));
console.log(tieneMayuscula("Hola123"));
console.log(tieneMayuscula("holamundo"));

function clasificarContraseña(contraseña) {
    let contador = 0;

    if (esSegura(contraseña)) {
        contador++;
    }

    if (tieneNumero(contraseña)) {
        contador++;
    }

    if (tieneMayuscula(contraseña)) {
        contador++;
    }

    if (contador === 3) {
        return "Contraseña muy segura";
    } else if (contador === 2) {
        return "Contraseña aceptable";
    } else {
        return "Contraseña debil, mejorala";
    }
}

document.getElementById("contrasena-mostrada").textContent = contraseña;

document.getElementById("resultado-longitud").textContent =
    esSegura(contraseña) ? "Si" : "No";

document.getElementById("resultado-numero").textContent =
    tieneNumero(contraseña) ? "Si" : "No";

document.getElementById("resultado-mayuscula").textContent =
    tieneMayuscula(contraseña) ? "Si" : "No";

document.getElementById("mensaje-final").textContent =
    clasificarContraseña(contraseña);

const contraseñas = [
    "hola",
    "hola123",
    "Hola123",
    "MiClave2026"
];

for (const clave of contraseñas) {
    console.log(clave + ": " + clasificarContraseña(clave));
}
import "./style.css";
import { createIcons, icons } from "lucide";
import { router } from "./router";
import { auth } from "./auth/auth";

// Inicializa íconos
createIcons({ icons });

// Configurar eventos globales
function setupGlobalEvents() {
    // Este código se ejecutará después de que se cargue cada página
    setTimeout(() => {
        const logoutBtn = document.getElementById("logout-button");
        if (logoutBtn) {
            logoutBtn.addEventListener("click", () => {
                auth.logout();
                window.location.href = `${window.location.origin}/#/login`;
            });
        }
    }, 100);
}

// Configurar eventos al cargar y cambiar de ruta
window.addEventListener("load", () => {
    router();
    setupGlobalEvents();
});

window.addEventListener("hashchange", () => {
    router();
    setupGlobalEvents();
});

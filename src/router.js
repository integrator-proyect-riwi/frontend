import { loginPage } from "./auth/pages";
import { auth } from "./auth/auth";

import {
    calendarPage,
    configurationPage,
    dashboardPage,
    employeesPage,
    myProfilePage,
    reportsPage,
    newRequestPage,
    requestPage,
} from "./pages";

// Rutas
const routes = {
    "#/login": loginPage,
    "#/dashboard": dashboardPage,
    "#/dashboard/solicitudes": requestPage,
    "#/dashboard/nueva-solicitud": newRequestPage,
    "#/dashboard/calendario": calendarPage,
    "#/dashboard/mi-perfil": myProfilePage,
    "#/dashboard/empleados": employeesPage,
    "#/dashboard/reportes": reportsPage,
    "#/dashboard/configuracion": configurationPage,
};

export function router() {
    const path = location.hash || "#/login";
    const user = auth.getUser();
    const isAuthenticated = auth.isAuthenticated();

    // Ejemplo: proteger rutas de dashboard
    if (path.startsWith("#/dashboard") && !isAuthenticated) {
        console.log("Esta authenticado:", { isAuthenticated });
        location.hash = "#/login";
        return;
    }

    if (isAuthenticated) {
        window.document.getElementById("sidebar").classList.remove("hidden");
        window.document.getElementById("sidebar").classList.add("flex");
    } else {
        window.document.getElementById("sidebar").classList.remove("flex");
        window.document.getElementById("sidebar").classList.add("hidden");
    }

    // Ejemplo: evitar que usuarios logueados accedan a login/register
    if (path === "#/login" && isAuthenticated) {
        location.hash = "#/dashboard";
        return;
    }

    // Load view
    const view = routes[path];
    if (view) {
        view();
    } else {
        renderNotFound();
    }
}

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
    landingPage,
} from "./pages";

// Rutas
const roleAccess = {
    administrator: [
        "#/dashboard",
        "#/dashboard/solicitudes",
        "#/dashboard/nueva-solicitud",
        "#/dashboard/calendario",
        "#/dashboard/mi-perfil",
        "#/dashboard/empleados",
        "#/dashboard/reportes",
        "#/dashboard/configuracion",
    ],
    employee: [
        "#/dashboard",
        "#/dashboard/solicitudes",
        "#/dashboard/nueva-solicitud",
        "#/dashboard/calendario",
        "#/dashboard/mi-perfil",
    ],
    boss: [
        "#/dashboard",
        "#/dashboard/solicitudes",
        "#/dashboard/calendario",
        "#/dashboard/mi-perfil",
        "#/dashboard/reportes",
    ],
};

// Rutas
const routes = {
    "#/login": loginPage,
    "#/landing": landingPage,
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

    // Evitar acceso a dashboard sin estar autenticado
    if (path.startsWith("#/dashboard") && !isAuthenticated) {
        location.hash = "#/login";
        return;
    }

    // Evitar que usuarios logueados accedan a login
    if (path === "#/login" && isAuthenticated) {
        location.hash = "#/dashboard";
        return;
    }

    // Control de acceso por rol
    if (path.startsWith("#/dashboard") && isAuthenticated) {
        const allowedRoutes = roleAccess[user.role.toLowerCase()] || [];
        if (!allowedRoutes.includes(path)) {
            location.hash = "#/dashboard"; // Redirige a ruta segura
            return;
        }
    }

    // Mostrar u ocultar sidebar y actualizar info personal
    const sidebar = document.getElementById("sidebar");
    if (isAuthenticated) {
        sidebar.classList.remove("hidden");
        sidebar.classList.add("flex");

        document.getElementById("personal-info-name").textContent =
            user.username;
        document.getElementById("personal-info-role").textContent = user.role;

        // Control de visibilidad de links según rol
        const allowedRoutes = roleAccess[user.role.toLowerCase()] || [];

        const menuLinks = sidebar.querySelectorAll("#menu a");

        menuLinks.forEach((link) => {
            if (!allowedRoutes.includes(link.getAttribute("href"))) {
                link.style.display = "none"; // Ocultar link
            } else {
                link.style.display = "flex"; // Mostrar link
            }
        });
    } else {
        sidebar.classList.remove("flex");
        sidebar.classList.add("hidden");
    }

    // Renderizar la vista correspondiente
    const view = routes[path];
    if (view) {
        view();
    } else {
        renderNotFound();
    }
}

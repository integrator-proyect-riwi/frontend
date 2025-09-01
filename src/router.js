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
    admin: [
        "#/dashboard",
        "#/dashboard/requests",
        "#/dashboard/new-request",
        "#/dashboard/calendar",
        "#/dashboard/my-profile",
        "#/dashboard/employees",
        "#/dashboard/reports",
        "#/dashboard/settings",
    ],
    employee: [
        "#/dashboard",
        "#/dashboard/requests",
        "#/dashboard/new-request",
        "#/dashboard/calendar",
        "#/dashboard/my-profile",
    ]
};

// Rutas
const routes = {
    "#/login": loginPage,
    "#/landing": landingPage,
    "#/dashboard": dashboardPage,
    "#/dashboard/requests": requestPage,
    "#/dashboard/new-request": newRequestPage,
    "#/dashboard/calendar": calendarPage,
    "#/dashboard/my-profile": myProfilePage,
    "#/dashboard/employees": employeesPage,
    "#/dashboard/reports": reportsPage,
    "#/dashboard/settings": configurationPage,
};

export function router() {
    const path = location.hash || "#/landing";
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
        const allowedRoutes = roleAccess[user.role] || [];
        if (!allowedRoutes.includes(path)) {
            location.hash = "#/dashboard"; // Redirige a ruta segura
            return;
        }
    }

    // Mostrar u ocultar sidebar y actualizar info personal
    const sidebar = document.getElementById("sidebar");
    if (isAuthenticated && path !== '#/landing') {
        sidebar.classList.remove("hidden");
        sidebar.classList.add("flex");

        document.getElementById("personal-info-name").textContent =
            user.username;
        document.getElementById("personal-info-role").textContent = user.role;

        // Control de visibilidad de links según rol
        const allowedRoutes = roleAccess[user.role] || [];

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

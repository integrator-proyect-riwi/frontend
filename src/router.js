import { loginPage } from "./auth/pages";
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

const routes = {
    "/login": loginPage,
    "/dashboard": dashboardPage,
    "/dashboard/solicitudes": requestPage,
    "/dashboard/new-request": newRequestPage,
    "/dashboard/calendar": calendarPage,
    "/dashboard/my-profile": myProfilePage,
    "/dashboard/empleados": employeesPage,
    "/dashboard/reportes": reportsPage,
    "/dashboard/configuracion": configurationPage,
    // "/dashboard/solicitudes": ,
    // "/dashboard/solicitudes": ,
};

export const handleLocation = () => {
    const path = window.location.pathname;
    const route = routes[path];

    const publicRoutes = ['/', '/404']

    if (route) {
        route();
    } else {
        const app = document.getElementById("app");
        if (app) app.innerHTML = "<h1>404</h1><p>Página no encontrada</p>";
    }
};

export const initRouter = () => {
    // Un solo listener global
    document.body.addEventListener("click", (e) => {
        const link = e.target.closest("a");
        if (!link) return;

        const href = link.getAttribute("href");
        if (!href || href.startsWith("http")) return;

        e.preventDefault();
        console.log("click capturado:", href);

        window.history.pushState({}, "", href);
        handleLocation();
    });

    // Botón atrás/adelante
    window.addEventListener("popstate", handleLocation);

    // Primera carga
    handleLocation();
};

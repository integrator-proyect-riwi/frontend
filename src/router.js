import {
    loginPage,
    calendarPage,
    configurationPage,
    dashboardPage,
    employeesPage,
    myProfilePage,
    reportsPage,
    newRequestPage,
    requestPage,
} from "./auth/pages";

const routes = {
    "/login": loginPage,
    "/dashboard": "dashboardPage",
    "/dashboard/solicitudes": "requestPage",
};

export const handleLocation = () => {
    const path = window.location.pathname;
    const route = routes[path];

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

import { api } from "./api/api";

// Simulación de un sistema de autenticación
export const auth = {
    currentUser: null,
    token: null,

    login: async (email, password) => {
        const url = "/api/v1/auth/login";
        const res = await api.post(url, { email, password });

        auth.currentUser = res.user;
        auth.token = res.token;

        localStorage.setItem("user", JSON.stringify(res.user));
        localStorage.setItem("token", res.token);

        return res.user;
    },

    logout() {
        this.currentUser = null;
        localStorage.clear();
    },

    isAuthenticated() {
        if (this.currentUser) return true;

        const savedUser = localStorage.getItem("user");
        if (savedUser) {
            this.currentUser = JSON.parse(savedUser);
            return true;
        }

        return false;
    },

    // Obtener usuario actual
    getUser() {
        return this.currentUser;
    },
};

import { api } from "./api/api";

export const auth = {
  currentUser: null,
  token: null,

  // Save session in memory + localStorage
  setSession(user, token) {
    this.currentUser = user;
    this.token = token;
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
  },

  // Clear Session

  clearSession() {
    this.currentUser = null;
    this.token = null;
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  },

  // Login
  async login(email, passwd) {
    try {
      const url = "/auth/login";
      const res = await api.post(url, { email, passwd });

      if (!res || !res.user || !res.token) {
        throw new Error("Respuesta inválida del servidor");
      }

      this.setSession(res.user, res.token);
      return res.user;

    } catch (err) {
      console.error("Error en login:", err.message);
      throw err;
    }
  },

  // Logout
  logout() {
    this.clearSession();
  },

  // Validation if there is an active session
  isAuthenticated() {
    if (this.currentUser && this.token) return true;

    const savedUser = localStorage.getItem("user");
    const savedToken = localStorage.getItem("token");

    if (savedUser && savedToken) {
      this.currentUser = JSON.parse(savedUser);
      this.token = savedToken;
      return true;
    }

    return false;
  },

  // get user
  getUser() {
    if (this.currentUser) return this.currentUser;

    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      this.currentUser = JSON.parse(savedUser);
      return this.currentUser;
    }

    return null;
  },
};
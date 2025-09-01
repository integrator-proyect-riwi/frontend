import { auth } from "../auth.js";

export const api = {
  base: import.meta.env.VITE_API_URL_DEV,

  async request(path, { method = "GET", data, token } = {}) {
    try {
      const isFormData = data instanceof FormData;

      const headers = {
        ...(token || auth.token ? { Authorization: `Bearer ${token || auth.token}` } : {}),
        ...(!isFormData && data ? { "Content-Type": "application/json" } : {}),
      };

      const res = await fetch(`${this.base}${path}`, {
        method,
        headers,
        ...(data && { body: isFormData ? data : JSON.stringify(data) }),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.message || `Error ${method} ${path}: ${res.status}`);
      }

      return await res.json();
    } catch (err) {
      console.error(`❌ Error en la petición ${method} ${path}:`, err.message);
      throw err;
    }
  },

  get(path, token) {
    return this.request(path, { method: "GET", token });
  },
  post(path, data, token) {
    return this.request(path, { method: "POST", data, token });
  },
  patch(path, data, token) {
    return this.request(path, { method: "PATCH", data, token });
  },
  put(path, data, token) {
    return this.request(path, { method: "PUT", data, token });
  },
  delete(path, token) {
    return this.request(path, { method: "DELETE", token });
  },
};

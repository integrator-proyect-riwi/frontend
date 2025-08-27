export const api = {
    base: import.meta.env.VITE_API_URL || "http://localhost:3000",

    
    post: async (path, data, token) => {
        try {
            const res = await fetch(`${api.base}${path}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    ...(token && { Authorization: `Bearer ${token}` }), // opcional: token
                },
                body: JSON.stringify(data),
            });

            if (!res.ok) {
                // devuelve info útil del error
                const errorData = await res.json().catch(() => ({}));
                throw new Error(
                    errorData.message || `Error POST ${path}: ${res.status}`
                );
            }

            return await res.json();
        } catch (err) {
            console.error("❌ Error en la petición POST:", err);
            throw err;
        }
    },
};

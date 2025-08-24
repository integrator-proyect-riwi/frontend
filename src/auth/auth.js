// Simulación de un sistema de autenticación
export const auth = {
    currentUser: null,
    
    // Simular login
    async login(email, password) {
        // Aquí normalmente verificarías con un backend
        if (email && password) {
            // Simular respuesta exitosa
            this.currentUser = {
                email: email,
                name: "Usuario Ejemplo"
            };
            
            // Guardar en localStorage para persistencia
            localStorage.setItem('user', JSON.stringify(this.currentUser));
            return true;
        }
        throw new Error('Credenciales inválidas');
    },
    
    // Cerrar sesión
    logout() {
        this.currentUser = null;
        localStorage.removeItem('user');
    },
    
    // Verificar si está autenticado
    isAuthenticated() {
        // Verificar si hay un usuario en memoria o en localStorage
        if (this.currentUser) return true;
        
        const savedUser = localStorage.getItem('user');
        if (savedUser) {
            this.currentUser = JSON.parse(savedUser);
            return true;
        }
        
        return false;
    },
    
    // Obtener usuario actual
    getUser() {
        return this.currentUser;
    }
};
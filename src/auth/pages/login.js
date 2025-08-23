      

import { createIcons, icons } from "lucide";


export async function loginPage() {
  const content = document.getElementById("app");
  if (!content) return;

  content.innerHTML = `
    <section
        id="login-page"
        class="flex-1 gap-10 flex items-center justify-center bg-[#eaf2ff]"
      >
        <div id="welcome" class="">
          <div class="flex items-center gap-5 w-[400px]">
            <div class="p-4 bg-[#191919] w-fit rounded-full">
              <i data-lucide="building" class="w-8 h-8 text-white"></i>
            </div>
            <div>
              <h1 class="text-2xl font-medium">Gestión de Personal</h1>
              <p>Sitema de solicitudes y Tramites</p>
            </div>
          </div>
          <ul class="mt-5 p-2 flex flex-col gap-2">
            <li class="flex items-center gap-2">
              <i data-lucide="shield" class="text-blue-500"></i> 
              <span class="text-sm">Acceso seguro y protegido</span>
            </li>
            <li class="flex items-center gap-2">
              <i data-lucide="users" class="text-green-500"></i> 
              <span class="text-sm">Gestion integral de recursos humanos</span>
            </li>
            <li class="flex items-center gap-2">
              <i data-lucide="lock" class="text-purple-500"></i> 
              <span class="text-sm">Control de roles y permisos</span>
            </li>
          </ul>
        </div>

        <!-- form -->
        <form
          id="form-login"
          class="bg-white p-6 rounded-md shadow-2xl w-[430px]"
        >
          <div>
            <h2 class="text-2xl font-medium">Iniciar Sesión</h2>
            <span class="text-gray-500"
              >Ingresa tus credenciales para acceder al sistema</span
            >
          </div>

          <div id="form-login-inputs" class="flex flex-col gap-2.5 mt-5">
            <div>
              <label
                for="email"
                class="block text-sm font-medium text-gray-700 mb-1"
                >Correo Electrónico</label
              >
              <div class="relative flex items-center">
                <i
                  data-lucide="mail"
                  class="w-4 h-4 text-gray-500 absolute left-3 outline-gray-500"
                ></i>
                <input
                  type="email"
                  placeholder="usuario@empresa.com"
                  class="bg-gray-200 pl-10 py-2 flex-1 rounded outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 text-sm"
                />
              </div>
            </div>
            <div>
              <label
                for="email"
                class="block text-sm font-medium text-gray-700 mb-1"
                >Contraseña</label
              >
              <div class="relative flex items-center">
                <i
                  data-lucide="lock"
                  class="w-4 h-4 text-gray-500 absolute left-3 outline-gray-500"
                ></i>
                <input
                  type="password"
                  placeholder="Ingresa tu contraseña"
                  class="bg-gray-200 pl-10 py-2 flex-1 rounded outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 text-sm"
                />
              </div>
            </div>
          </div>

          <!-- actions -->
          <div id="form-actions" class="flex-1 flex justify-between mt-5">
            <div class="flex items-center gap-1 cursor-pointer">
              <input type="checkbox" name="record" id="recordarme" class="bg-gray-400 cursor-pointer">
              <label for="recordarme" class="text-sm cursor-pointer select-none">Recordarme</label>
            </div>
            <a href="#" class="text-sm font-medium hover:underline">¿Olvidaste tu contraseña?</a>
          </div>

          <button type="submit" class="bg-[#191919] text-white w-full rounded py-1.5 cursor-pointer hover:bg-[#393939] duration-200 flex items-center justify-center gap-2 mt-4">
            <i data-lucide="log-in" class="w-4 h-4"></i>
            Iniciar sesion
          </button>

          <hr class="my-5 border-t-gray-300" />

          <!-- credentials -->
          <div>
            <p>empleado</p>
            <p>Supervisor</p>
            <p>rh admin</p>
          </div>
        </form>
      </section>
  `;

  createIcons({ icons });
}
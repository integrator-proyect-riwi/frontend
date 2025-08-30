
import { createIcons, icons } from "lucide";


export async function employeesPage() {
    document.getElementById("content").innerHTML = `
        <div id="dashboard" class="flex-1">
          <div id="title" class="w-full flex justify-between p-5">
            <div>
              <h1 class="text-xl font-semibold">Gestión de Empleados</h1>
              <p class="text-sm text-gray-500">
                Administra la información y solicitudes de los empleados
              </p>
            </div>
            <div class="flex items-end">
              <a href="#/dashboard/new-request" class="button-primary">
                <i data-lucide="plus" class="w-4 h-4"></i>
                Nueva Solicitud
              </a>
            </div>
          </div>
        </div>`;

    createIcons({ icons });
}
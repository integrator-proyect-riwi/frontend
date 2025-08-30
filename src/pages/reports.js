
import { createIcons, icons } from "lucide";


export async function reportsPage() {
    document.getElementById("content").innerHTML = `
        <div id="dashboard" class="flex-1">
          <div id="title" class="w-full flex justify-between p-5">
            <div>
              <h1 class="text-xl font-semibold">Reportes y Métricas</h1>
              <p class="text-sm text-gray-500">
                Análisis detallado de solicitudes y gestión de personal
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
import { createIcons, icons } from "lucide";

export async function calendarPage() {

    document.getElementById("content").innerHTML = `
        <div id="dashboard" class="flex-1">
          <div id="title" class="w-full flex justify-between p-5">
            <div>
              <h1 class="text-xl font-semibold">Calendario de Vacaciones</h1>
              <p class="text-sm text-gray-500">
                Visualización de vacaciones y ausencias del personal
              </p>
            </div>
            <div class="flex items-end">
              <a href="#/dashboard/nueva-solicitud" class="button-primary">
                <i data-lucide="plus" class="w-4 h-4"></i>
                Nueva Solicitud
              </a>
            </div>
          </div>
        </div>`;

    createIcons({ icons });
}

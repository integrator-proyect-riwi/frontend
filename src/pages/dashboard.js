import { createIcons, icons } from "lucide";

export async function dashboardPage() {
    const content = document.getElementById("content");
    if (!content) return;
    
    content.innerHTML = `
    <div id="dashboard" class="flex-1">
      <div id="title" class="w-full flex justify-between p-5">
        <div>
          <h1 class="text-xl font-semibold">Dashboard</h1>
          <p class="text-sm text-gray-500">
            Resumen de solicitudes y trámites de personal
          </p>
        </div>
        <div class="flex items-end">
          <a href="/dashboard/nueva-solicitud" class="button-primary">
            <i data-lucide="calendar" class="w-4 h-4"></i>
            Generar Reporte
          </a>
        </div>
      </div>
    </div>
  `;

    createIcons({ icons });
}

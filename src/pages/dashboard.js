import { createIcons, icons } from "lucide";

export async function dashboardPage() {
    
    document.getElementById("content").innerHTML = `
    <div id="dashboard" class="flex-1">
      <div id="title" class="w-full flex justify-between p-5">
        <div>
          <h1 class="text-xl font-semibold">Dashboard</h1>
          <p class="text-sm text-gray-500">
            Resumen de solicitudes y trámites de personal
          </p>
        </div>
        <div class="flex items-end">
          <a href="#/dashboard/new-request" class="button-primary">
            <i data-lucide="calendar" class="w-4 h-4"></i>
            Generar Reporte
          </a>
        </div>
      </div>

      <div id="" class="grid grid-cols-4 gap-5 px-5">
        <div class="w-full border border-gray-300 p-4 rounded-xl">
          <div class="flex justify-between">
            <h3 class="font-medium text-sm">Solicitudes Totales</h3>
            <i data-lucide="file-text" class="w-4 h-4 text-blue-500"></i>
          </div>
          <div class="flex flex-col mt-3">
            <span class="font-extrabold text-lg">147</span>
            <p class="text-sm">
              <span class="text-green-600">+12%</span>
               desde el mes pasado
            </p>
          </div>
        </div>  
        <div class="w-full border border-gray-300 p-4 rounded-xl">
          <div class="flex justify-between">
            <h3 class="font-medium text-sm">Solicitudes Totales</h3>
            <i data-lucide="clock" class="w-4 h-4 text-red-500"></i>
          </div>
          <div class="flex flex-col mt-3">
            <span class="font-extrabold text-lg">23</span>
            <p class="text-sm">
              <span class="text-green-600">+12%</span>
               desde el mes pasado
            </p>
          </div>
        </div>  
        <div class="w-full border border-gray-300 p-4 rounded-xl">
          <div class="flex justify-between">
            <h3 class="font-medium text-sm">Solicitudes Totales</h3>
            <i data-lucide="circle-check-big" class="w-4 h-4 text-green-500"></i>
          </div>
          <div class="flex flex-col mt-3">
            <span class="font-extrabold text-lg">89</span>
            <p class="text-sm">
              <span class="text-green-600">+12%</span>
               desde el mes pasado
            </p>
          </div>
        </div>  
        <div class="w-full border border-gray-300 p-4 rounded-xl">
          <div class="flex justify-between">
            <h3 class="font-medium text-sm">Solicitudes Totales</h3>
            <i data-lucide="circle-x" class="w-4 h-4 text-red-500"></i>
          </div>
          <div class="flex flex-col mt-3">
            <span class="font-extrabold text-lg">12</span>
            <p class="text-sm">
              <span class="text-green-600">+12%</span>
               desde el mes pasado
            </p>
          </div>
        </div>  
      </div>
    </div>
  `;

    console.info("Dashboard cargado correctamente");
    createIcons({ icons });
}

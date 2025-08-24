import { createIcons, icons } from "lucide";

export async function myProfilePage() {
    document.getElementById("content").innerHTML = `
        <div id="dashboard" class="flex-1">
          <div id="title" class="w-full flex justify-between p-5">
            <div>
              <h1 class="text-xl font-semibold">Mi perfil</h1>
              <p class="text-sm text-gray-500">
                En proceso
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

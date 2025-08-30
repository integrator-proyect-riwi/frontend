import { createIcons, icons } from "lucide";

export async function requestPage() {
    document.getElementById("content").innerHTML = `
        <div id="dashboard" class="flex-1">
          <div id="title" class="w-full flex justify-between p-5">
            <div>
              <h1 class="text-xl font-semibold">Solicitudes</h1>
              <p class="text-sm text-gray-500">
                Gestiona todas las solicitudes de trámites de personal
              </p>
            </div>
            <div class="flex items-end">
              <a href="#/dashboard/new-request" class="button-primary">
                <i data-lucide="plus" class="w-4 h-4"></i>
                Nueva Solicitud
              </a>
            </div>
          </div>
          <div id="" class="p-5 flex flex-col gap-5">
            <form class="border border-gray-300 p-5 rounded-xl">
                <div id="" class="mb-5">Filtros de Búsqueda</div>
                <div class="">
                    <div class="grid grid-cols-4 gap-5">
                        <div
                            class="w-full relative flex items-center"
                        >
                            <i
                                data-lucide="search"
                                class="w-4 h-4 text-gray-500 absolute left-3 outline-gray-500"
                            ></i>
                            <input
                                id="password-input"
                                type="password"
                                name="password"
                                placeholder="Buscar solicitudes..."
                                class="bg-gray-200 pl-10 py-2 flex-1 rounded outline-none focus:ring-3 focus:ring-gray-300 focus:border-gray-500 text-sm"
                            />
                        </div>
                        <div
                            class="w-full relative flex items-center"
                        >
                            <select
                                class="w-full bg-gray-200 px-3 py-2 flex-1 rounded outline-nonefocus:ring-3 focus:ring-gray-300 focus:border-gray-500 text-sm"
                            >
                                <option value="">
                                    Todos los estados
                                </option>
                                <option value="pendiente">
                                    Pendiente
                                </option>
                                <option value="revision">
                                    En Revisión
                                </option>
                                <option value="aprobada">
                                    Aprobada
                                </option>
                                <option value="rechazada">
                                    Rechazada
                                </option>
                            </select>
                        </div>
                        <div
                            class="w-full relative flex items-center"
                        >
                            <select
                                class="w-full bg-gray-200 px-3 py-2 flex-1 rounded outline-nonefocus:ring-3 focus:ring-gray-300 focus:border-gray-500 text-sm"
                            >
                                <option value="">
                                    Todos los tipos
                                </option>
                                <option value="vacaciones">
                                    Vacaciones
                                </option>
                                <option value="permiso medico">
                                    Permiso Medico
                                </option>
                                <option value="cambio de horario">
                                    Cambio de Horario
                                </option>
                                <option
                                    value="licencia de paternidad"
                                >
                                    Licencia de Paternidad
                                </option>
                            </select>
                        </div>
                        <div class="w-full flex items-center gap-5">
                            <button
                                class="border border-gray-300 rounded-md flex items-center px-3 py-1.5 gap-3"
                            >
                                <i
                                    data-lucide="funnel"
                                    class="w-4 h-4 text-gray-500"
                                ></i>
                                <span class="text-sm"
                                    >Filtros Avanzados</span
                                >
                            </button>
                            <button
                                class="border border-gray-300 rounded-md flex items-center px-3 py-1.5 gap-3"
                            >
                                <i
                                    data-lucide="download"
                                    class="w-4 h-4 text-gray-500 outline-gray-500"
                                ></i>
                                <span class="text-sm"
                                    >Exportar</span
                                >
                            </button>
                        </div>
                    </div>
                </div>
            </form>
                <div
                    class="w-full border border-gray-300 rounded-2xl overflow-hidden"
                >
                    <table
                        class="w-full border-collapse divide-y divide-gray-300"
                    >
                        <thead>
                            <tr class="text-sm hover:bg-gray-100">
                                <th>ID</th>
                                <th>Tipo</th>
                                <th>Empleado</th>
                                <th>Departamento</th>
                                <th>Fecha Solicitud</th>
                                <th>Período</th>
                                <th>Estado</th>
                                <th>Prioridad</th>
                                <th>Supervisor</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-300">
                            <tr
                                class="hover:bg-gray-100 cursor-pointer text-sm"
                            >
                                <td class="hover:bg-gray-200">SOL-001</td>
                                <td class="hover:bg-gray-200">Vacaciones</td>
                                <td class="hover:bg-gray-200">María García Rodríguez</td>
                                <td class="hover:bg-gray-200">Recursos Humanos</td>
                                <td class="hover:bg-gray-200">2024-03-15</td>
                                <td class="hover:bg-gray-200">2024-04-01 - 2024-04-15</td>
                                <td class="hover:bg-gray-200">
                                    <p
                                        class="status-pending w-fit px-2 py-1 rounded-md"
                                    >
                                        Pendiente
                                    </p>
                                </td>
                                <td class="hover:bg-gray-200">
                                    <p
                                        class="status-normal w-fit px-2 py-1 rounded-md"
                                    >
                                        Normal
                                    </p>
                                </td>
                                <td class="hover:bg-gray-200">Juan Pérez</td>
                                <td class="hover:bg-gray-200">
                                  <i data-lucide="ellipsis"></i>
                                </td>
                            </tr>
                            <tr class="text-sm hover:bg-gray-100">
                                <td>SOL-002</td>
                                <td>Permiso Médico</td>
                                <td>Carlos López Martín</td>
                                <td>Ventas</td>
                                <td>2024-03-14</td>
                                <td>2024-03-16 - 2024-03-18</td>
                                <td>
                                    <p
                                        class="status-approved w-fit px-2 py-1 rounded-md"
                                    >
                                        Aprobada
                                    </p>
                                </td>
                                <td>
                                    <p
                                        class="status-urgent w-fit px-2 py-1 rounded-md"
                                    >
                                        Urgente
                                    </p>
                                </td>
                                <td>Ana Silva</td>
                                <td class="hover:bg-gray-200">
                                  <i data-lucide="ellipsis"></i>
                                </td>
                            </tr>
                            <tr class="text-sm hover:bg-gray-100">
                                <td>SOL-003</td>
                                <td>Cambio de Horario</td>
                                <td>Ana Martínez Torres</td>
                                <td>Contabilidad</td>
                                <td>2024-03-14</td>
                                <td>2024-04-01</td>
                                <td>
                                    <p
                                        class="status-under-review w-fit px-2 py-1 rounded-md"
                                    >
                                        En Revisión
                                    </p>
                                </td>
                                <td>
                                    <p
                                        class="status-normal w-fit px-2 py-1 rounded-md"
                                    >
                                        Normal
                                    </p>
                                </td>
                                <td>Roberto Kim</td>
                                <td class="hover:bg-gray-200">
                                  <i data-lucide="ellipsis"></i>
                                </td>
                            </tr>
                            <tr class="text-sm hover:bg-gray-100">
                                <td>SOL-004</td>
                                <td>Licencia de Paternidad</td>
                                <td>Roberto Silva Díaz</td>
                                <td>IT</td>
                                <td>2024-03-13</td>
                                <td>2024-03-20 - 2024-04-03</td>
                                <td>
                                    <p
                                        class="status-approved w-fit px-2 py-1 rounded-md"
                                    >
                                        Aprobada
                                    </p>
                                </td>
                                <td>
                                    <p
                                        class="status-normal w-fit px-2 py-1 rounded-md"
                                    >
                                        Normal
                                    </p>
                                </td>
                                <td>Laura Vega</td>
                                <td class="hover:bg-gray-200">
                                  <i data-lucide="ellipsis"></i>
                                </td>
                            </tr>
                            <tr class="text-sm hover:bg-gray-100">
                                <td>SOL-005</td>
                                <td>Vacaciones</td>
                                <td>Laura Vega Morales</td>
                                <td>Marketing</td>
                                <td>2024-03-12</td>
                                <td>2024-05-01 - 2024-05-10</td>
                                <td>
                                    <p
                                        class="status-rejected w-fit px-2 py-1 rounded-md"
                                    >
                                        Rechazada
                                    </p>
                                </td>
                                <td>
                                    <p
                                        class="w-fit px-2 py-1 rounded-md bg-slate-300"
                                    >
                                        Baja
                                    </p>
                                </td>
                                <td>Miguel Santos</td>
                                <td class="hover:bg-gray-200">
                                  <i data-lucide="ellipsis"></i>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
          </div>
        </div>`;

    createIcons({ icons });
}

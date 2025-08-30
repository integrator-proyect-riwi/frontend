import { createIcons, icons } from "lucide";
import { api } from "../auth/api/api";

export async function newRequestPage() {
    document.getElementById("content").innerHTML = `
        <div id="new request" class="w-[740px]">
          <div id="title" class="w-full flex flex-col p-5">
            <!-- title -->
            <div class="flex gap-5 items-center">
              <a href="#/dashboard/requests" class="flex items-center cursor-pointer">
                <i data-lucide="arrow-left" class="h-5"></i>
                <span class="font-medium">Back</span>
              </a>

              <div>
                <h1 class="text-xl font-semibold">Nueva Solicitud</h1>
                <p class="text-sm text-gray-500">
                Completa el formulario para crear una nueva solicitud de trámite
                </p>
              </div>
            </div>

            <!-- form -->
            <form id="form-new-request" class="w-full mt-8">
            
              <div id="" class="p-5 border rounded-xl flex flex-col border-gray-300">
                <div class="">
                  <!-- title label -->
                  <h2 class="mb-2">Información Básica</h2>
                </div>

                <div class="grid grid-cols-2 gap-5 mt-3">
                  <!-- Tipo de Solicitud -->
                  <div class="">
                    <label class="text-sm font-medium">Tipo de Solicitud *</label>
                    <select
                      id="type_request"
                      name="type_request"
                      class="bg-[#f3f3f5] text-sm w-full mt-0.5 py-1 px-2 rounded outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                    >
                      <option value="" disabled selected>Selecciona el tipo de solicitud</option>
                      <option value="1">Vacaciones</option>
                      <option value="2">Permiso Médico</option>
                      <option value="3">Licencia de Paternidad/Maternidad</option>
                      <option value="4">Cambio de Horario</option>
                      <option value="5">Permiso Personal</option>
                      <option value="6">Permiso por Capacitación</option>
                      <option value="7">Día Compensatorio</option>
                      <option value="8">Otro</option>
                    </select>
                  </div>

                  <!-- Supervisor Asignado -->
                  <div class="">
                    <label class="text-sm font-medium">Supervisor Asignado *</label>
                    <select
                      id="supervisor"
                      name="supervisor"
                      class="bg-[#f3f3f5] text-sm w-full mt-0.5 py-1 px-2 rounded outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                    >
                      <option value="" disabled selected>Selecciona el supervisor</option>
                      <option value="juan-perez">Juan Pérez - Recursos Humanos</option>
                      <option value="ana-silva">Ana Silva - Ventas</option>
                      <option value="roberto-kim">Roberto Kim - Contabilidad</option>
                      <option value="laura-vega">Laura Vega - IT</option>
                      <option value="miguel-santos">Miguel Santos - Marketing</option>
                    </select>
                  </div>

                  <!-- Urgente -->
                  <div class="flex items-center gap-1 col-span-2">
                    <input 
                      name="urgent"
                      id="urgent"
                      type="checkbox"
                    />
                    <label for="urgent" class="text-xs font-medium select-none cursor-pointer">Marcar como urgente</label>
                  </div>
                </div>
              </div>
              <!-- ------------------------------------------------------- end ------------------------------------------------------- -->
              
              <!-- -------------------------------------------------------  Start  ------------------------------------------------------- -->
              <div id="" class="p-5 border rounded-xl flex flex-col border-gray-300 mt-5">
                <div class="">
                  <!-- title label -->
                  <h2 class="mb-2">Periodo de la Solicitud</h2>
                </div>

                <div class="grid grid-cols-2 gap-5 mt-3">
                  <!-- Tipo de Solicitud -->
                  <!-- Fecha de Start -->
                  <div class="">
                    <label class="text-sm font-medium">Fecha de Start *</label>
                    <input 
                      name="start_date"
                      id="start_date"
                      type="date"
                      class="border text-sm border-gray-300 w-full rounded py-1 mt-0.5 px-3 outline-none focus:ring-2 focus:ring-gray-500"
                    />
                  </div>

                  <!-- Fecha de end -->
                  <div class="">
                    <label class="text-sm ">Fecha de end *</label>
                    <input 
                      name="end_date"
                      id="end_date"
                      type="date" 
                      class="border text-sm border-gray-300 w-full rounded py-1 mt-0.5 px-3 outline-none focus:ring-2 focus:ring-gray-500"
                    />
                  </div>

                  <div class="flex gap-2 col-span-2 border rounded-xl p-3 border-gray-300">
                    <i data-lucide="circle-alert" class="w-4 h-4"></i>
                    <p class="text-xs text-gray-500">Las solicitudes deben ser enviadas con al menos 48 horas de anticipación, excepto en casos de emergencia médica.</p>
                  </div>
                </div>
              </div>
              <!-- -------------------------------------------------------  end  ------------------------------------------------------- -->

              <!-- -------------------------------------------------------  Start  ------------------------------------------------------- -->
              <div id="" class="p-5 border rounded-xl flex flex-col border-gray-300 mt-5">
                <div class="">
                  <!-- title label -->
                  <h2 class="mb-2 text-sm font-medium">Detalles de Solicitud</h2>
                </div>

                <div class="flex flex-col gap-3 mt-3">
                  <!-- Tipo de Solicitud -->
                  <!-- Fecha de Start -->
                  <div class="">
                    <label class="text-sm font-medium">Motivo de la solicitud *</label>
                    <textarea 
                      name="reason" 
                      id="reason"
                      placeholder="Describe brevemente el motivo de tu solicitud..." 
                      class="bg-[#f3f3f5] w-full rounded-md focus:outline-gray-500 p-3 resize-none text-xs min-h-10 placeholder:text-[#8991a0]"></textarea>
                  </div>
                  <div class="">
                    <label class="text-sm font-medium">Observaciones adicionales</label>
                    <textarea 
                      name="notes" 
                      id="additional_notes"
                      placeholder="Información adicional que consideres relevante..." 
                      class="bg-[#f3f3f5] w-full rounded-md focus:outline-gray-500 p-3 resize-none text-xs min-h-10 placeholder:text-[#8991a0]"></textarea>
                  </div>

                </div>
              </div>
              <!-- -------------------------------------------------------  end  ------------------------------------------------------- -->

              <!-- -------------------------------------------------------  Start  ------------------------------------------------------- -->
              <div id="" class="p-5 border rounded-xl flex flex-col border-gray-300 mt-5">
                <div class="">
                  <!-- title label -->
                  <h2 class="mb-2 text-sm font-medium">Documentos Adjuntos</h2>
                </div>

                <div class="flex flex-col gap-3 mt-1">
                  <div class="">
                      <p class="text-sm font-medium">Subir archivos</p>
                      <label for="attachments" 
                        class="flex flex-col items-center justify-center w-full p-4 border-2 border-dashed border-gray-300 rounded-2xl mt-1 cursor-pointer bg-[#f3f3f5] hover:border-gray-300 hover:bg-[#e9e9e9] transition">
                        
                        <!-- Icono -->
                        <i data-lucide="upload" class="w-7 h-7 mb-3 text-gray-500"></i>
                        
                        <!-- Texto -->
                        <p class="text-gray-600 text-center text-xs">
                          <span class="font-medium">
                            Haz clic para subir
                          </span>
                           o arrastra archivos aquí
                        </p>
                        <p class="text-xs text-gray-500 mt-2">
                          PDF, DOC, DOCX, JPG, PNG (MAX: 10MB)
                        </p>
                        
                        <!-- Input oculto -->
                        <input type="file" id="attachments" name="attachments" class="hidden" />
                      </label>
                  </div>
                </div>
              </div>
              <!-- -------------------------------------------------------  end  ------------------------------------------------------- -->
              <hr class="my-4 border-t-gray-300">
              <div class="w-full flex gap-3 justify-end">
                  <button type="button" class="px-2 border border-gray-300 rounded-md py-2 flex items-center gap-4 box-border cursor-pointer hover:bg-gray-200">
                    <i data-lucide="save" class="w-4 h-4"></i>
                    <span class="text-xs font-medium">
                      Guardar Borrador
                    </span>
                  </button>
                  <button type="submit" class="px-2 border bg-black text-white rounded-md py-2 flex items-center gap-4 box-border hover:bg-slate-800 cursor-pointer">
                    <i data-lucide="send" class="w-4 h-4"></i>
                    <span class="text-xs font-medium">
                      Enviar Solicitud
                    </span>
                  </button>
              </div>
            </form>
          </div>
        </div>
  `;

    // form
    const form = document.getElementById("form-new-request");
    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const {
            notes = null,
            attachments = null,
            end_date,
            reason,
            start_date,
            supervisor,
            type_request,
            urgent = null,
        } = Object.fromEntries(formData.entries());

        const res = await api.post('api/v1/')

        try {
        } catch (error) {
            alert(err.message);
        }
    });

    createIcons({ icons });
}

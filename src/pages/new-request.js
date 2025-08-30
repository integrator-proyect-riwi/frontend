import { createIcons, icons } from "lucide";
import { api } from "../auth/api/api";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

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
                <h1 class="text-xl font-semibold">New Request</h1>
                <p class="text-sm text-gray-500">
                  Please complete the form to submit a new request
                </p>
              </div>
            </div>

            <div class="flex items-center gap-2 col-span-2 border rounded-xl p-3 border-gray-300 mt-5">
              <i data-lucide="circle-alert" class="w-5 h-5 text-red-700"></i>
              <p class="text-red-700">All fields marked with * must be filled in</p>
            </div>

            <!-- form -->
            <form id="form-new-request" class="w-full mt-5">
            
              <div id="" class="p-5 border rounded-xl flex flex-col border-gray-300">
                <div class="">
                  <!-- title label -->
                  <h2 class="mb-2 text-lg font-semibold">Basic Information</h2>
                </div>

                <div class="grid grid-cols-2 gap-5 mt-3">
                  <!-- Type request -->
                  <div class="">
                    <label class="font-medium">Type Request <span class="text-red-600">*</span></label>
                    <select
                      id="type_request"
                      name="type_request"
                      class="bg-[#f3f3f5] w-full mt-0.5 py-1 px-2 rounded outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                    >
                      <option value="" disabled selected>Select the type of request</option>
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

                  <!-- Assigned Supervisor -->
                  <div class="">
                    <label class="font-medium">Assigned Supervisor <span class="text-red-600">*</span></label>
                    <select
                      id="supervisor"
                      name="supervisor"
                      class="bg-[#f3f3f5] w-full mt-0.5 py-1 px-2 rounded outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                    >
                      <option value="" disabled selected>Select the supervisor</option>
                      <option value="juan-perez">Juan Pérez - Recursos Humanos</option>
                      <option value="ana-silva">Ana Silva - Ventas</option>
                      <option value="roberto-kim">Roberto Kim - Contabilidad</option>
                      <option value="laura-vega">Laura Vega - IT</option>
                      <option value="miguel-santos">Miguel Santos - Marketing</option>
                    </select>
                  </div>

                  <!-- Urgent -->
                  <div class="flex items-center gap-1 col-span-2 cursor-pointer">
                    <input 
                      name="urgent"
                      id="urgent"
                      type="checkbox"
                      class="cursor-pointer"
                    />
                    <label for="urgent" class="text-xs font-medium select-none cursor-pointer">Mark as urgent</label>
                  </div>
                </div>
              </div>
              <!-- ------------------------------------------------------- end ------------------------------------------------------- -->
              
              <!-- -------------------------------------------------------  Start  ------------------------------------------------------- -->
              <div id="" class="p-5 border rounded-xl flex flex-col border-gray-300 mt-5">
                <div class="">
                  <!-- title label -->
                  <h2 class="mb-2 text-lg font-semibold">Request Period</h2>
                </div>

                <div class="grid grid-cols-2 gap-5 mt-3">
                  <!-- Type request -->
                  <!-- Start date -->
                  <div class="">
                    <label class="font-medium">Start Date <span class="text-red-600">*</span></label>
                    <input 
                      name="start_date"
                      id="start_date"
                      type="date"
                      class="border placeholder:text-gray-600 border-gray-300 w-full rounded py-1 mt-0.5 px-3 outline-none focus:ring-2 focus:ring-gray-500"
                    />
                  </div>

                  <!-- End Date -->
                  <div class="">
                    <label class=" font-medium">End Date <span class="text-red-600">*</span></label>
                    <input 
                      name="end_date"
                      id="end_date"
                      type="date" 
                      class="border placeholder:text-gray-600 border-gray-300 w-full rounded py-1 mt-0.5 px-3 outline-none focus:ring-2 focus:ring-gray-500"
                    />
                  </div>

                  <div class="flex gap-2 col-span-2 border rounded-xl p-3 border-gray-300">
                    <i data-lucide="circle-alert" class="w-5 h-5"></i>
                    <p class="text-sm text-gray-500">Requests must be submitted at least 48 hours in advance, except in cases of medical emergency.</p>
                  </div>
                </div>
              </div>
              <!-- -------------------------------------------------------  end  ------------------------------------------------------- -->

              <!-- -------------------------------------------------------  Start  ------------------------------------------------------- -->
              <div id="" class="p-5 border rounded-xl flex flex-col border-gray-300 mt-5">
                <div class="">
                  <!-- title label -->
                  <h2 class="mb-2 text-lg font-semibold">Request details</h2>
                </div>

                <div class="flex flex-col gap-3 mt-3">
                  <!-- Tipo de Solicitud -->
                  <!-- Fecha de Start -->
                  <div class="">
                    <label class="font-medium">Reason for the request <span class="text-red-600">*</span></label>
                    <textarea 
                      name="reason" 
                      id="reason"
                      placeholder="Briefly describe the reason for your request..." 
                      class="bg-[#f3f3f5] w-full rounded-md focus:outline-gray-500 p-3 resize-none min-h-10 placeholder:text-[#8991a0]"></textarea>
                  </div>
                  <div class="">
                    <label class="font-medium">Additional comments</label>
                    <textarea 
                      name="notes" 
                      id="additional_notes"
                      placeholder="Additional information you consider relevant.." 
                      class="bg-[#f3f3f5] w-full rounded-md focus:outline-gray-500 p-3 resize-none min-h-10 placeholder:text-[#8991a0]"></textarea>
                  </div>

                </div>
              </div>
              <!-- -------------------------------------------------------  end  ------------------------------------------------------- -->

              <!-- -------------------------------------------------------  Start  ------------------------------------------------------- -->
              <div id="" class="p-5 border rounded-xl flex flex-col border-gray-300 mt-5">
                <div class="">
                  <!-- title label -->
                  <h2 class="mb-2 text-lg font-semibold">Attached documents</h2>
                </div>

                <div class="flex flex-col gap-3 mt-1">
                  <div class="">
                      <p class="font-medium">Upload Files</p>
                      <label for="attachments" 
                        class="flex flex-col items-center justify-center w-full p-4 border-2 border-dashed border-gray-300 rounded-2xl mt-1 cursor-pointer bg-[#f3f3f5] hover:border-gray-300 hover:bg-[#e9e9e9] transition">
                        
                        <!-- Icon -->
                        <i data-lucide="upload" class="w-7 h-7 mb-3 text-gray-500"></i>
                        
                        <!-- Texto -->
                        <p class="text-gray-600 text-center text-xs">
                          <span class="font-medium">
                            Click to upload
                          </span>
                           or drag files here
                        </p>
                        <p class="text-xs text-gray-500 mt-2">
                          PDF, DOC, DOCX, JPG, PNG (MAX: 10MB)
                        </p>
                        
                        <!-- Input hidden -->
                        <input type="file" id="attachments" name="attachments" class="hidden" />
                      </label>
                  </div>
                </div>
              </div>
              <!-- -------------------------------------------------------  end  ------------------------------------------------------- -->
              <hr class="my-4 border-t-gray-300">
              <div class="w-full flex gap-3 justify-end">
                  <!-- <button type="button" class="px-2 border border-gray-300 rounded-md py-2 flex items-center gap-4 box-border cursor-pointer hover:bg-gray-200">
                    <i data-lucide="save" class="w-4 h-4"></i>
                    <span class="text-xs font-medium">
                      Guardar Borrador
                    </span>
                  </button> -->
                  <button type="submit" class="px-2 border bg-black text-white rounded-md py-2 flex items-center gap-4 box-border hover:bg-slate-800 cursor-pointer">
                    <i data-lucide="send" class="w-4 h-4"></i>
                    <span class="text-sm font-medium">
                      Send Request
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

        // required fields
        const requiredIds = [
            "type_request",
            "supervisor",
            "start_date",
            "end_date",
            "reason",
        ];

        // reset borders
        requiredIds.forEach((id) => {
            document
                .getElementById(id)
                .classList.remove("border-red-500", "focus:ring-red-500");
        });

        // check missing
        const missingFields = [];
        if (!type_request) missingFields.push("type_request");
        if (!supervisor) missingFields.push("supervisor");
        if (!start_date) missingFields.push("start_date");
        if (!end_date) missingFields.push("end_date");
        if (!reason) missingFields.push("reason");

        if (missingFields.length > 0) {
            iziToast.error({
                message:
                    "Please complete all required fields before submitting the request.",
                position: "topRight",
                timeout: 5000,
                progressBar: true,
                close: true,
            });

            missingFields.forEach((id) => {
                const el = document.getElementById(id);
                el.classList.add("border-2", "border-red-300", "focus:ring-red-300");
            });

            return; // stop form submission
        }

        // fake api call
        try {
            const res = await api.post("api/v1/", formData);
            console.log(res);
        } catch (err) {
            alert(err.message);
        }
    });

    // remove red border once user fills field
    ["type_request", "supervisor", "start_date", "end_date", "reason"].forEach(
        (id) => {
            const el = document.getElementById(id);
            el.addEventListener("input", () => {
                if (el.value) {
                    el.classList.remove("border-red-300", "ring-red-300");
                }
            });
            el.addEventListener("change", () => {
                if (el.value) {
                    el.classList.remove("border-red-300", "focus:ring-red-300"); 
                }
            });
        }
    );

    createIcons({ icons });
}

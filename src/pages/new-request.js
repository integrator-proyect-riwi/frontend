import { createIcons, icons } from "lucide";
import { api } from "../auth/api/api";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

export async function newRequestPage() {
    const typeRequests = await api.get("/requests/types");
    const showSupevisors = await api.get("/leaders");

    document.getElementById("content").innerHTML = `
        <div id="new-request" class="w-[740px]">
          <div id="title" class="w-full flex flex-col p-5">
            <div class="flex gap-5 items-center">
              <a href="#/dashboard/requests" class="flex items-center cursor-pointer">
                <i data-lucide="arrow-left" class="h-5"></i>
                <span class="font-medium">Back</span>
              </a>
              <div>
                <h1 class="text-xl font-semibold">New Request</h1>
                <p class="text-sm text-gray-500">Please complete the form to submit a new request</p>
              </div>
            </div>

            <div class="flex items-center gap-2 col-span-2 border rounded-xl p-3 border-gray-300 mt-5">
              <i data-lucide="circle-alert" class="w-5 h-5 text-red-700"></i>
              <p class="text-red-700">All fields marked with * must be filled in</p>
            </div>

            <form id="form-new-request" class="w-full mt-5">
              <!-- Basic Information -->
              <div class="p-5 border rounded-xl flex flex-col border-gray-300">
                <h2 class="mb-2 text-lg font-semibold">Basic Information</h2>
                <div class="grid grid-cols-2 gap-5 mt-3">
                  <div>
                    <label class="font-medium">Type Request <span class="text-red-600">*</span></label>
                    <select id="request_type" name="request_type" class="bg-[#f3f3f5] w-full mt-0.5 py-1 px-2 rounded outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500">
                      <option value="" disabled selected>Select the type of request</option>
                    </select>
                  </div>
                  <div>
                    <label class="font-medium">Assigned leader <span class="text-red-600">*</span></label>
                    <select id="leader" name="leader" class="bg-[#f3f3f5] w-full mt-0.5 py-1 px-2 rounded outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500">
                      <option value="" disabled selected>Select the leader</option>
                      <option value="John Doe - Engineering Department">Juan Pérez - Recursos Humanos</option>
                      <option value="John Doe - Engineering Department">Ana Silva - Ventas</option>
                      <option value="John Doe - Engineering Department">Roberto Kim - Contabilidad</option>
                      <option value="John Doe - Engineering Department">Laura Vega - IT</option>
                      <option value="John Doe - Engineering Department">Miguel Santos - Marketing</option>
                    </select>
                  </div>
                  <div class="flex items-center gap-1 col-span-2 cursor-pointer">
                    <input name="urgent" id="urgent" type="checkbox" class="cursor-pointer" />
                    <label for="urgent" class="text-xs font-medium select-none cursor-pointer">Mark as urgent</label>
                  </div>
                </div>
              </div>

              <!-- Request Period -->
              <div class="p-5 border rounded-xl flex flex-col border-gray-300 mt-5">
                <h2 class="mb-2 text-lg font-semibold">Request Period</h2>
                <div class="grid grid-cols-2 gap-5 mt-3">
                  <div>
                    <label class="font-medium">Start Date <span class="text-red-600">*</span></label>
                    <input name="start_date" id="start_date" type="date" class="border placeholder:text-gray-600 border-gray-300 w-full rounded py-1 mt-0.5 px-3 outline-none focus:ring-2 focus:ring-gray-500" />
                  </div>
                  <div>
                    <label class="font-medium">End Date <span class="text-red-600">*</span></label>
                    <input name="end_date" id="end_date" type="date" class="border placeholder:text-gray-600 border-gray-300 w-full rounded py-1 mt-0.5 px-3 outline-none focus:ring-2 focus:ring-gray-500" />
                  </div>
                  <div class="flex gap-2 col-span-2 border rounded-xl p-3 border-gray-300">
                    <i data-lucide="circle-alert" class="w-5 h-5"></i>
                    <p class="text-sm text-gray-500">Requests must be submitted at least 48 hours in advance, except in cases of medical emergency.</p>
                  </div>
                </div>
              </div>

              <!-- Request Details -->
              <div class="p-5 border rounded-xl flex flex-col border-gray-300 mt-5">
                <h2 class="mb-2 text-lg font-semibold">Request Details</h2>
                <div class="flex flex-col gap-3 mt-3">
                  <div>
                    <label class="font-medium">Reason for the request <span class="text-red-600">*</span></label>
                    <textarea name="reason" id="reason" placeholder="Briefly describe the reason for your request..." class="bg-[#f3f3f5] w-full rounded-md focus:outline-gray-500 p-3 resize-none min-h-10 placeholder:text-[#8991a0]"></textarea>
                  </div>
                  <div>
                    <label class="font-medium">Additional comments</label>
                    <textarea name="notes" id="additional_notes" placeholder="Additional information you consider relevant.." class="bg-[#f3f3f5] w-full rounded-md focus:outline-gray-500 p-3 resize-none min-h-10 placeholder:text-[#8991a0]"></textarea>
                  </div>
                </div>
              </div>

              <!-- Attachments -->
              <div class="p-5 border rounded-xl flex flex-col border-gray-300 mt-5">
                <h2 class="mb-2 text-lg font-semibold">Attached Documents</h2>
                <div class="flex flex-col gap-3 mt-1">
                  <label for="attachments" class="flex flex-col items-center justify-center w-full p-4 border-2 border-dashed border-gray-300 rounded-2xl mt-1 cursor-pointer bg-[#f3f3f5] hover:border-gray-300 hover:bg-[#e9e9e9] transition">
                    <i data-lucide="upload" class="w-7 h-7 mb-3 text-gray-500"></i>
                    <p class="text-gray-600 text-center text-xs">
                      <span class="font-medium">Click to upload</span> or drag files here
                    </p>
                    <p class="text-xs text-gray-500 mt-2">PDF, DOC, DOCX, JPG, PNG (MAX: 10MB)</p>
                    <input type="file" id="attachments" name="attachments" class="hidden" multiple />
                  </label>
                </div>
              </div>

              <hr class="my-4 border-t-gray-300">
              <div class="w-full flex gap-3 justify-end">
                <button type="submit" class="px-2 border bg-black text-white rounded-md py-2 flex items-center gap-4 box-border hover:bg-slate-800 cursor-pointer">
                  <i data-lucide="send" class="w-4 h-4"></i>
                  <span class="text-sm font-medium">Send Request</span>
                </button>
              </div>
            </form>
          </div>
        </div>
    `;

    // Cargar select dinámicamente
    const typeSelect = document.getElementById("request_type");
    typeSelect.innerHTML = `<option value="" disabled selected>Select the type of request</option>`;
    typeSelect.innerHTML = `<option value="" disabled selected>Select the type of request</option>`;
    const fragment = document.createDocumentFragment();
    typeRequests.forEach((req) => {
        const option = document.createElement("option");
        option.value = req.codename;
        option.textContent = req.name;
        fragment.appendChild(option);
    });
    typeSelect.appendChild(fragment);

    // Seleccionar el select de líder
    const leaderSelect = document.getElementById("leader");

    // Limpiar opciones iniciales excepto el placeholder
    leaderSelect.innerHTML = `<option value="" disabled selected>Select the leader</option>`;

    // Crear fragmento para no hacer reflow innecesario
    const fragmentLeaders = document.createDocumentFragment();

    // Recorrer la lista de supervisores obtenida de la API
    showSupevisors.forEach((supervisor) => {
        const option = document.createElement("option");
        option.value = `${supervisor.leader} - ${supervisor.department}`; // o supervisor.codename si tu backend espera eso
        option.textContent = `${supervisor.leader} - ${supervisor.department}`; // ejemplo: "Juan Pérez - Recursos Humanos"
        fragmentLeaders.appendChild(option);
    });

    // Añadir las opciones al select
    leaderSelect.appendChild(fragmentLeaders);

    // Formulario
    const form = document.getElementById("form-new-request");
    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        // Crear objeto con los campos
        const payload = {
            request_type: document.getElementById("request_type").value,
            leader: document.getElementById("leader").value,
            start_date: document.getElementById("start_date").value,
            end_date: document.getElementById("end_date").value,
            reason: document.getElementById("reason").value,
            notes: document.getElementById("additional_notes").value || null,
            urgent: document.getElementById("urgent").checked,
        };

        // Validación de campos obligatorios
        const missingFields = [
            "request_type",
            "leader",
            "start_date",
            "end_date",
            "reason",
        ].filter((id) => !document.getElementById(id).value);

        if (missingFields.length > 0) {
            iziToast.error({
                message:
                    "Please complete all required fields before submitting the request.",
                position: "topRight",
                timeout: 5000,
                progressBar: true,
            });
            missingFields.forEach((id) => {
                document
                    .getElementById(id)
                    .classList.add(
                        "border-2",
                        "border-red-300",
                        "focus:ring-red-300"
                    );
            });
            return;
        }

        // Validación de fechas
        const startDate = new Date(payload.start_date);
        const endDate = new Date(payload.end_date);
        if (endDate < startDate) {
            iziToast.error({
                message: "End date cannot be earlier than start date.",
                position: "topRight",
                timeout: 5000,
                progressBar: true,
            });
            document
                .getElementById("end_date")
                .classList.add(
                    "border-2",
                    "border-red-300",
                    "focus:ring-red-300"
                );
            return;
        }

        try {
            const res = await api.post("/requests", payload);
            iziToast.success({
                message: "Request submitted successfully!",
                position: "topRight",
                timeout: 3000,
            });
            form.reset();
        } catch (err) {
            iziToast.error({
                message: err.message || "Error submitting the request.",
                position: "topRight",
                timeout: 5000,
            });
        }
    });

    // Quitar bordes rojos al modificar campos
    ["request_type", "leader", "start_date", "end_date", "reason"].forEach(
        (id) => {
            const el = document.getElementById(id);
            ["input", "change"].forEach((evt) => {
                el.addEventListener(evt, () => {
                    if (el.value)
                        el.classList.remove(
                            "border-red-300",
                            "focus:ring-red-300"
                        );
                });
            });
        }
    );

    createIcons({ icons });
}

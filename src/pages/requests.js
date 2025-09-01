import { createIcons, icons } from "lucide";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { api } from "../auth/api/api";
import { auth } from "../auth/auth";

export async function requestPage() {
    const statusClassMap = {
        pending: "status-pending",
        approved: "status-approved",
        under_review: "status-under-review",
        rejected: "status-rejected",
    };

    const priorityClassMap = {
        normal: "status-normal",
        urgent: "status-urgent",
        low: "status-low",
        high: "status-high",
    };

    const user = auth.getUser();
    let requests = []; // declarar afuera para poder reasignar

    async function fetchRequests() {
        requests = await api.get("/requests");
        applyFilters(); // vuelve a pintar la tabla con filtros activos
    }

    document.getElementById("content").innerHTML = `
    <div id="dashboard" class="flex-1">
      <div id="title" class="w-full flex justify-between p-5">
        <div>
          <h1 class="text-xl font-semibold">Requests</h1>
          <p class="text-sm text-gray-500">
            Manage all employee request processes
          </p>
        </div>
        <div class="flex items-end">
          <a href="#/dashboard/new-request" class="button-primary">
            <i data-lucide="plus" class="w-4 h-4"></i>
            New Request
          </a>
        </div>
      </div>
      <div class="p-5 flex flex-col gap-5">
        <form class="border border-gray-300 p-5 rounded-xl">
          <div class="mb-5">Search Filters</div>
          <div class="grid sm:grid-cols-3 xl:grid-cols-4 gap-5">
            <!-- Search -->
            <div class="w-full relative flex items-center">
              <i data-lucide="search" class="w-4 h-4 text-gray-500 absolute left-3"></i>
              <input
                id="search-input"
                type="text"
                placeholder="Search requests..."
                class="bg-gray-200 pl-10 py-2 flex-1 rounded text-sm"
              />
            </div>
            <!-- Type -->
            <div class="w-full relative flex items-center">
              <select id="type-filter" class="w-full bg-gray-200 px-3 py-2 flex-1 rounded text-sm">
                <option value="">All types</option>
                <option value="vacations">Vacation</option>
                <option value="medical permit">Medical Leave</option>
                <option value="Schedule Change">Schedule Change</option>
                <option value="Parental Leave">Paternity/Maternity Leave</option>
                <option value="Personal Permit">Personal Permit</option>
                <option value="Training Leave">Training Leave</option>
                <option value="Compensatory Day">Compensatory Day</option>
              </select>
            </div>
            <!-- Status -->
            <div class="w-full relative flex items-center">
              <select id="status-filter" class="w-full bg-gray-200 px-3 py-2 flex-1 rounded text-sm">
                <option value="">All statuses</option>
                <option value="pending">Pending</option>
                <option value="under_review">Under Review</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>
          </div>
        </form>
        <div class="w-full border border-gray-300 rounded-2xl overflow-hidden">
          <table class="w-full border-collapse divide-y divide-gray-300">
            <thead>
              <tr class="text-sm bg-gray-100">
                <th>ID</th>
                <th>Type</th>
                <th class="${user.role !== 'admin' ? 'hidden' : ''}">Employee</th>
                <th>Department</th>
                <th>Request Date</th>
                <th>Period</th>
                <th>Status</th>
                <th>Priority</th>
                <th>Supervisor</th>
                <th class="${user.role !== 'admin' ? 'hidden' : ''}">Actions</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-300"></tbody>
          </table>
        </div>
      </div>
    </div>`;

    // references to inputs
    const searchInput = document.getElementById("search-input");
    const statusSelect = document.getElementById("status-filter");
    const typeSelect = document.getElementById("type-filter");
    const tbody = document.querySelector("tbody");

    // function to apply filters
    const loadRequests = (filters = {}) => {
        tbody.innerHTML = "";

        let filtered = requests;

        // 🔎 filtro global
        if (filters.search) {
            const term = filters.search.toLowerCase();
            filtered = filtered.filter((req) =>
                Object.values(req).some((value) =>
                    String(value).toLowerCase().includes(term)
                )
            );
        }

        if (filters.status) {
            filtered = filtered.filter(
                (req) =>
                    req.status.toLowerCase() === filters.status.toLowerCase()
            );
        }

        if (filters.type) {
            filtered = filtered.filter(
                (req) =>
                    req.request_type.toLowerCase() ===
                    filters.type.toLowerCase()
            );
        }

        filtered.forEach((req) => {
          console.log(req);
          
            const tr = document.createElement("tr");
            const statusClass =
                statusClassMap[req.status.toLowerCase()] || "status-normal";
            const priorityClass =
                priorityClassMap[req.priority?.toLowerCase()] ||
                "status-normal";

            tr.classList.add("text-sm", "hover:bg-gray-100");
            tr.dataset.code = req.code;

            tr.innerHTML = `
                <td>${req.code}</td>
                <td>${req.request_type}</td>
                <td class="${user.role !== 'admin' ? 'hidden' : ''}">${req.employee}</td>
                <td>${req.department}</td>
                <td>${req.request_date}</td>
                <td>${req.period}</td>
                <td>
                    <p class="${statusClass} w-fit px-2 py-1 rounded-md">
                        ${req.status}
                    </p>
                </td>
                <td>
                    <p class="${priorityClass} w-fit px-2 py-1 rounded-md">
                        ${req.priority}
                    </p>
                </td>
                <td>${req.leader}</td>
                <td class="${user.role === "employee" ? "hidden" : ""}">
                    ${
                        user.role === "admin" &&
                        req.status.toLowerCase() === "pending"
                            ? `
                              <div class="flex gap-2 items-center">
                                <button class="approve-btn p-1 px-2 rounded-md border border-gray-300 flex gap-1 text-sm items-center h-fit cursor-pointer hover:bg-green-200 transition-all">
                                  <i data-lucide="circle-check-big" class="w-4 h-4 text-green-600"></i>
                                  <span>Approve</span>
                                </button>
                                <button class="reject-btn p-1 px-2 rounded-md border border-gray-300 flex gap-1 text-sm items-center h-fit cursor-pointer hover:bg-red-200 transition-all">
                                  <i data-lucide="circle-x" class="w-4 h-4 text-red-600"></i>
                                  <span>Reject</span>
                                </button>
                              </div>`
                            : `
                            <div class="flex gap-2 items-center">
                              <button class=" p-1 px-2 rounded-md border border-gray-300 flex gap-1 text-sm items-center h-fit cursor-pointer hover:bg-slate-200 transition-all">
                                <i data-lucide="eye" class="w-4 h-4 text-slate-600"></i>
                                <span>Show</span>
                              </button>
                           </div>`
                    }
                </td>
            `;
            tbody.appendChild(tr);

            // si es admin, buscar los botones dentro de la fila
            if (
                user.role === "admin" &&
                req.status.toLowerCase() === "pending"
            ) {
                const approveBtn = tr.querySelector(".approve-btn");
                const rejectBtn = tr.querySelector(".reject-btn");

                approveBtn?.addEventListener("click", async () => {
                    await updateRequestStatus(req.code, "approved");
                });

                rejectBtn?.addEventListener("click", async () => {
                    await updateRequestStatus(req.code, "rejected");
                });
            }
        });
        createIcons({ icons });
    };

    // events
    function applyFilters() {
        loadRequests({
            search: searchInput.value,
            status: statusSelect.value,
            type: typeSelect.value,
        });
    }

    async function updateRequestStatus(code, status) {
        try {
            const res = await api.patch(`/requests/${code}/status`, {
                codename: status,
            });
            if (res.message) {
                iziToast.success({
                    title: "Success",
                    message: `Request ${code} updated to ${status}`,
                    position: "topRight",
                });
            }
            await fetchRequests();
        } catch (error) {
            console.error("Error updating status:", error);
            iziToast.error({
                title: "Error",
                message: "Could not update request status.",
                position: "topRight",
            });
        }
        applyFilters();
    }

    searchInput.addEventListener("input", applyFilters);
    statusSelect.addEventListener("change", applyFilters);
    typeSelect.addEventListener("change", applyFilters);

    // initial render
    loadRequests();
    await fetchRequests();
    createIcons({ icons });
}

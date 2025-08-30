import { createIcons, icons } from "lucide";
import { auth } from "../auth/auth";

export async function myProfilePage() {
    const user = auth.getUser()

    document.getElementById("content").innerHTML = `
        <div id="dashboard" class="flex-1 max-w-11/12 py-10">
          <div id="title" class="">

            <div class="border border-gray-300 p-5 rounded-xl">

              <div class="flex justify-between">

                <div class="flex items-center gap-5">
                  <div class="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-2xl">
                    ${user.username[0]}
                  </div>
                  <div class="">
                    <h1 class="text-2xl">${user.username}</h1>
                    <h2 class="text-gray-500 capitalize">${user.role}</h2>
      
                    <div class="mt-2">
                      <span class="px-2 py-0.5 bg-green-200 rounded-xl text-sm font-medium text-green-800">Active</span>
                      <span class="text-sm text-gray-500 font-medium">EMP 001</span>
                    </div>
                  </div>
                </div>
                <div class="">
                  <button id="edit-profile" class="py-1 px-3 flex items-center gap-2 border border-gray-300 rounded-xl cursor-pointer hover:bg-gray-200 duration-200">
                    <i data-lucide="edit" class="w-4 h-4"></i>
                    <p>Edit Profile</p>
                  </button>
                </div>
              </div>

              <div class="flex items-center justify-between mt-8 px-5">
                
                <div class="flex gap-3 items-center">
                  <i data-lucide="building" class="h-5 text-gray-500"></i>
                  <div class="">
                    <p class="text-sm text-gray-500">Department</p>
                    <span class="text-sm font-medium">Human Resources<span>
                  </div>
                </div>
                <div class="flex gap-3 items-center">
                  <i data-lucide="user" class="h-5 text-gray-500"></i>
                  <div class="">
                    <p class="text-sm text-gray-500">Supervisor</p>
                    <span class="text-sm font-medium">Maria García<span>
                  </div>
                </div>
                <div class="flex gap-3 items-center">
                  <i data-lucide="calendar" class="h-5 text-gray-500"></i>
                  <div class="">
                    <p class="text-sm text-gray-500">Start Date</p>
                    <span class="text-sm font-medium">Human Resources<span>
                  </div>
                </div>
                <div class="flex gap-3 items-center">
                  <i data-lucide="clock" class="h-5 text-gray-500"></i>
                  <div class="">
                    <p class="text-sm text-gray-500">Seniority</p>
                    <span class="text-sm font-medium">5 years<span>
                  </div>
                </div>
              </div>

            </div>

            <div class="my-6 p-1 bg-gray-200 rounded-2xl grid grid-cols-5">
              <button
                id="btn-information"
                class="font-medium text-center w-full text-gray-600 cursor-pointer rounded-2xl duration-200"
                data-view="information"
                >
                Information
              </button>
              <button
                id="btn-holidays"
                class="font-medium text-center w-full text-gray-600 cursor-pointer rounded-2xl duration-200"
                data-view="holidays"
                >
                Holidays
              </button>
              <button
                id="btn-history"
                class="font-medium text-center w-full text-gray-600 cursor-pointer rounded-2xl duration-200"
                data-view="history"
                >
                History
              </button>
              <button
                id="btn-career"
                class="font-medium text-center w-full text-gray-600 cursor-pointer rounded-2xl duration-200"
                data-view="career"
                >
                Career
              </button>
              <button
                id="btn-documents"
                class="font-medium text-center w-full text-gray-600 cursor-pointer rounded-2xl duration-200"
                data-view="documents"
                >
                Documents
              </button>
            </div>

            <div id="view-information" class="grid grid-cols-2 gap-5">
                <div class="border border-gray-300 p-5 w-full rounded-xl">
                  <h3 class="font-semibold text-xl">Contact info</h3>
                  <hr class="border-t-gray-300 mt-1">
                  <div class="mt-5">
                    <ul class="flex flex-col gap-3">
                      <li class="flex gap-3 items-center">
                        <i data-lucide="mail" class="h-5 text-gray-500"></i>
                        <div class="">
                          <p class="text-sm text-gray-500">Email</p>
                          <span class="text-sm font-medium">${user.email}<span>
                        </div>
                      </li>
                      <li class="flex gap-3 items-center">
                        <i data-lucide="phone" class="h-5 text-gray-500"></i>
                        <div class="">
                          <p class="text-sm text-gray-500">Phone</p>
                          <span class="text-sm font-medium">+57 301 123 4567<span>
                        </div>
                      </li>
                      <li class="flex gap-3 items-center">
                        <i data-lucide="map-pin" class="h-5 text-gray-500"></i>
                        <div class="">
                          <p class="text-sm text-gray-500">Location</p>
                          <span class="text-sm font-medium">Barranquilla<span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <!-- -->
                <div class="border border-gray-300 p-5 w-full rounded-xl flex flex-col">
                  <h3 class="font-semibold text-xl">Statistics</h3>
                  <hr class="border-t-gray-300 mt-1">
                  <div class="flex-1 grid grid-cols-2 grid-rows-4 mt-5">
                    <p class="w-full text-sm font-medium text-gray-600 h-full">Applications this year<p><span class="w-full h-full font-bold">12<span>
                    <p class="w-full text-sm font-medium text-gray-600 h-full">Days absent<p><span class="w-full h-full font-bold">13 days<span>
                    <p class="w-full text-sm font-medium text-gray-600 h-full">Approval rate<p><span class="w-full h-full font-bold">95%<span>
                    <p class="w-full text-sm font-medium text-gray-600 h-full">Certificates issued<p><span class="w-full h-full font-bold">3<span>
                  </div>
                </div>
            </div>

            <div id="view-holidays" class="grid grid-cols-2 gap-5">
              <div class="border border-gray-300 rounded-xl p-5">
                <h3 class="font-semibold text-xl">Vacation Balance</h3>
                <div class="text-center my-3">
                  <span class="font-bold text-2xl">22</span>
                  <p class="text-xs text-gray-500">Available days</p>
                </div>
                <div class="grid grid-cols-2">
                  <span class="text-sm text-start w-full">Assigned days</span><span class="w-full text-end text-sm font-bold">30</span>
                  <span class="text-sm text-start w-full">Taken days</span><span class="w-full text-end text-sm font-bold">8</span>
                  <span class="text-sm text-start w-full">Available days</span><span class="w-full text-end text-sm font-bold">22</span>
                </div>
                <hr class="border-t-gray-300 my-3">
                <div class="space-y-1">
                <div class="grid grid-cols-2 items-center">
                    <span class="text-sm">Progress</span>
                    <span class="text-sm text-right font-medium">65%</span>
                  </div>

                  <div
                    class="h-1.5 w-full rounded-full bg-gray-200"
                    role="progressbar"
                    aria-valuenow="27"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div class="h-1.5 rounded-full bg-black" style="width: 27%;"></div>
                  </div>
                </div>
              </div>
              <div class="border border-gray-300 rounded-xl p-5 flex flex-col gap-3">
                <h3 class="font-semibold text-xl">Next vacation</h3>
                <div class="text-center text-sm text-gray-500">You do not have any vacations scheduled</div>
              </div>
            </div>

            <div id="view-history" class="border border-gray-300 rounded-xl p-5">
              
              <div class="flex justify-between">
                <h3 class="font-semibold text-xl">Requests History</h3>
                <button class="text-sm border px-3 border-gray-300 rounded-lg flex items-center gap-3 cursor-pointer hover:bg-gray-200 transition-all">
                  <i data-lucide="download" class="w-4 h-4"></i>
                  <span>Download History</span>
                </button>
              </div>

              <div class="mt-5 flex flex-col gap-5">
                <!-- Vacation -->
                  <div class="w-full border border-gray-300 p-4 rounded-lg">
                    <div class="flex justify-between">
                      <h2 class="text-sm capitalize font-semibold">Vacation</h2>
                      <span class="text-xs font-medium bg-green-100 px-2 rounded-xl text-green-700">Approved</span>
                    </div>
                    <span class="text-sm font-semibold text-gray-500">SOL-015</span>
                    <div class="grid grid-cols-4 gap-3 mt-3">
                      <div>
                        <span class="text-sm text-gray-500">Request Date</span>
                        <p class="text-sm font-medium">9/03/2024</p>
                      </div>
                      <div>
                        <span class="text-sm text-gray-500">Period</span>
                        <p class="text-sm font-medium">31/3/2024 - 9/4/2024</p>
                      </div>
                      <div>
                        <span class="text-sm text-gray-500">Days</span>
                        <p class="text-sm font-medium">8</p>
                      </div>
                      <div>
                        <span class="text-sm text-gray-500">Approved by</span>
                        <p class="text-sm font-medium">Maria Garcia</p>
                      </div>
                    </div>
                    <hr class="border-t-gray-300 my-3">
                    <div>
                      <span class="text-sm text-gray-500">Comments</span>
                      <p class="text-sm font-medium">Planned family trip</p>
                    </div>
                  </div>

                  <!-- Personal Leave -->
                  <div class="w-full border border-gray-300 p-4 rounded-lg">
                    <div class="flex justify-between">
                      <h2 class="text-sm capitalize font-semibold">Personal Leave</h2>
                      <span class="text-xs font-medium bg-green-100 px-2 rounded-xl text-green-700">Approved</span>
                    </div>
                    <span class="text-sm font-semibold text-gray-500">SOL-012</span>
                    <div class="grid grid-cols-4 gap-3 mt-3">
                      <div>
                        <span class="text-sm text-gray-500">Request Date</span>
                        <p class="text-sm font-medium">27/2/2024</p>
                      </div>
                      <div>
                        <span class="text-sm text-gray-500">Period</span>
                        <p class="text-sm font-medium">4/3/2024 - 4/3/2024</p>
                      </div>
                      <div>
                        <span class="text-sm text-gray-500">Days</span>
                        <p class="text-sm font-medium">1</p>
                      </div>
                      <div>
                        <span class="text-sm text-gray-500">Approved by</span>
                        <p class="text-sm font-medium">Maria Garcia</p>
                      </div>
                    </div>
                    <hr class="border-t-gray-300 my-3">
                    <div>
                      <span class="text-sm text-gray-500">Comments</span>
                      <p class="text-sm font-medium">Personal errands</p>
                    </div>
                  </div>

                  <!-- Work Certificate -->
                  <div class="w-full border border-gray-300 p-4 rounded-lg">
                    <div class="flex justify-between">
                      <h2 class="text-sm capitalize font-semibold">Work Certificate</h2>
                      <span class="text-xs font-medium bg-green-100 px-2 rounded-xl text-green-700">Completed</span>
                    </div>
                    <span class="text-sm font-semibold text-gray-500">SOL-008</span>
                    <div class="grid grid-cols-4 gap-3 mt-3">
                      <div>
                        <span class="text-sm text-gray-500">Request Date</span>
                        <p class="text-sm font-medium">14/1/2024</p>
                      </div>
                      <div>
                        <span class="text-sm text-gray-500">Approved by</span>
                        <p class="text-sm font-medium">HR</p>
                      </div>
                    </div>
                    <hr class="border-t-gray-300 my-3">
                    <div>
                      <span class="text-sm text-gray-500">Comments</span>
                      <p class="text-sm font-medium">For bank loan request</p>
                    </div>
                  </div>

                  <!-- Vacation (End of Year) -->
                  <div class="w-full border border-gray-300 p-4 rounded-lg">
                    <div class="flex justify-between">
                      <h2 class="text-sm capitalize font-semibold">Vacation</h2>
                      <span class="text-xs font-medium bg-green-100 px-2 rounded-xl text-green-700">Approved</span>
                    </div>
                    <span class="text-sm font-semibold text-gray-500">SOL-005</span>
                    <div class="grid grid-cols-4 gap-3 mt-3">
                      <div>
                        <span class="text-sm text-gray-500">Request Date</span>
                        <p class="text-sm font-medium">19/12/2023</p>
                      </div>
                      <div>
                        <span class="text-sm text-gray-500">Period</span>
                        <p class="text-sm font-medium">1/1/2024 - 4/1/2024</p>
                      </div>
                      <div>
                        <span class="text-sm text-gray-500">Days</span>
                        <p class="text-sm font-medium">4</p>
                      </div>
                      <div>
                        <span class="text-sm text-gray-500">Approved by</span>
                        <p class="text-sm font-medium">Maria Garcia</p>
                      </div>
                    </div>
                    <hr class="border-t-gray-300 my-3">
                    <div>
                      <span class="text-sm text-gray-500">Comments</span>
                      <p class="text-sm font-medium">Year-end break</p>
                    </div>
                  </div>
              </div>
            </div>
            <div id="view-career" class="border border-gray-300 rounded-xl p-5">
              <div class="flex gap-2 items-center">
                <i data-lucide="trending-up"></i>
                <h2 class="font-semibold text-xl capitalize">career history</h2>
                </div>
                <div class="w-full mt-5 flex flex-col gap-5">
                  <div class="flex gap-5">
                    <div class="bg-gray-200 rounded-full h-fit p-2">
                      <i data-lucide="award" class=""></i>
                    </div>
                    <div class="w-full flex flex-col">
                      <div class="w-full flex justify-between">
                        <h3 class="font-semibold">Promotion</h3>
                        <span class="text-sm text-gray-500 font-semibold">14/01/2023</span>
                      </div>
                      <span class="text-sm text-gray-500">Promoted to Systems Administrator</span>
                      <span class="text-sm font-medium">Previous Position: Systems Analyst</span>
                      <span class="text-sm font-medium">Department: Human Resources</span>
                    </div>
                  </div>

                  <div class="flex gap-5">
                    <div class="bg-gray-200 rounded-full h-fit p-2">
                      <i data-lucide="award" class=""></i>
                    </div>
                    <div class="w-full flex flex-col">
                      <div class="w-full flex justify-between">
                        <h3 class="font-semibold">Department Transfer</h3>
                        <span class="text-sm text-gray-500 font-semibold">31/05/2025</span>
                      </div>
                      <span class="text-sm text-gray-500">Transferred to Human Resources</span>
                      <span class="text-sm font-medium">Previous Position: Systems Analyst</span>
                      <span class="text-sm font-medium">Department: IT → Human Resources</span>
                    </div>
                  </div>
                  <div class="flex gap-5">
                    <div class="bg-gray-200 rounded-full h-fit p-2">
                      <i data-lucide="award" class=""></i>
                    </div>
                    <div class="w-full flex flex-col">
                      <div class="w-full flex justify-between">
                        <h3 class="font-semibold">Employment Start</h3>
                        <span class="text-sm text-gray-500 font-semibold">14/03/2020</span>
                      </div>
                      <span class="text-sm text-gray-500">Joined the company</span>
                      <span class="text-sm font-medium">Department: IT</span>
                    </div>
                  </div>
                </div>
            </div>
            
            <div id="view-documents" class="border border-gray-300 rounded-xl p-5">
                <div class="flex justify-between">
                    <div class="flex items-center gap-3">
                      <i data-lucide="file-text" class="w-5"></i>
                      <h2 class="font-semibold text-xl">Certificates and Documents</h2>
                    </div>
                    <button class="flex items-center gap-2 bg-black hover:bg-slate-800 transition-all text-white rounded-md px-2 cursor-pointer">
                      <i data-lucide="file-text" class="h-4"></i>
                      <span class="text-sm">Request Certificates</span>
                    </button>
                </div>

                <div class="mt-5 flex flex-col gap-5">
                  <div class="border border-gray-300 rounded-lg p-4 flex items-center justify-between">
                    <div class="flex items-center gap-3">
                      <div class="bg-blue-100 p-3 rounded-lg">
                          <i data-lucide="file-text" class="h-6 text-blue-600"></i>
                      </div>
                      <div class="flex flex-col">
                        <span class="text-sm font-semibold">Work Certificate</span>
                        <span class="text-sm text-gray-600">Issued: 19/01/2024</span>
                        <span class="text-sm text-gray-600">Purpose: Bank loan</span>
                      </div>
                    </div>
                    <div class="flex items-center gap-2.5">
                        <span class="bg-green-100 text-green-700 py-1 px-2 rounded-md text-sm font-medium select-none">current</span>
                        <button class="border border-gray-300 p-1 rounded-lg cursor-pointer hover:bg-gray-100">
                          <i data-lucide="download" class="h-5"></i>
                        </button>
                    </div>
                  </div>
                  <!-- ---------- -->
                  <div class="border border-gray-300 rounded-lg p-4 flex items-center justify-between">
                    <div class="flex items-center gap-3">
                      <div class="bg-blue-100 p-3 rounded-lg">
                          <i data-lucide="file-text" class="h-6 text-blue-600"></i>
                      </div>
                      <div class="flex flex-col">
                        <span class="text-sm font-semibold">Income Certificate</span>
                        <span class="text-sm text-gray-600">Issued: 14/11/2023</span>
                        <span class="text-sm text-gray-600">Purpose: Visa application</span>
                      </div>
                    </div>
                    <div class="flex items-center gap-2.5">
                        <span class="bg-green-100 text-green-700 py-1 px-2 rounded-md text-sm font-medium select-none">current</span>
                        <button class="border border-gray-300 p-1 rounded-lg cursor-pointer hover:bg-gray-100">
                          <i data-lucide="download" class="h-5"></i>
                        </button>
                    </div>
                  </div>
                  <div class="border border-gray-300 rounded-lg p-4 flex items-center justify-between">
                    <div class="flex items-center gap-3">
                      <div class="bg-blue-100 p-3 rounded-lg">
                          <i data-lucide="file-text" class="h-6 text-blue-600"></i>
                      </div>
                      <div class="flex flex-col">
                        <span class="text-sm font-semibold">Letter of Recommendation</span>
                        <span class="text-sm text-gray-600">Issued: 09/08/2023</span>
                        <span class="text-sm text-gray-600">Purpose: Master’s application</span>
                      </div>
                    </div>
                    <div class="flex items-center gap-2.5">
                        <span class="bg-green-100 text-green-700 py-1 px-2 rounded-md text-sm font-medium select-none">current</span>
                        <button class="border border-gray-300 p-1 rounded-lg cursor-pointer hover:bg-gray-100">
                          <i data-lucide="download" class="h-5"></i>
                        </button>
                    </div>
                  </div>
                    
                </div>
              </div>
            </div>

          </div>
        </div>`;

    const buttons = document.querySelectorAll("[data-view]");
    const views = document.querySelectorAll("[id^='view-']");

        views.forEach((v) => v.classList.add("hidden"));
    document.getElementById("view-information").classList.remove("hidden");
    document
        .querySelector("[data-view='information']")
        .classList.add("bg-white");

    buttons.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const view = e.currentTarget.dataset.view;

            views.forEach((v) => v.classList.add("hidden"));
            const activeView = document.getElementById(`view-${view}`);

            if (activeView) {
                activeView.classList.remove("hidden");
            }

            // buttons bg-white
            buttons.forEach((b) => b.classList.remove("bg-white"));
            e.currentTarget.classList.add("bg-white");
        });
    });

    createIcons({ icons });
}

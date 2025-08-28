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
                    <h2 class="text-gray-500">Administrador de Sistemas</h2>
      
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
                class="font-medium text-center w-full cursor-pointer rounded-2xl duration-200"
                data-view="information"
                >
                Information
              </button>
              <button
                id="btn-holidays"
                class="font-medium text-center w-full cursor-pointer rounded-2xl duration-200"
                data-view="holidays"
                >
                Holidays
              </button>
              <button
                id="btn-history"
                class="font-medium text-center w-full cursor-pointer rounded-2xl duration-200"
                data-view="history"
                >
                History
              </button>
              <button
                id="btn-carrer"
                class="font-medium text-center w-full cursor-pointer rounded-2xl duration-200"
                data-view="carrer"
                >
                Carrer
              </button>
              <button
                id="btn-documents"
                class="font-medium text-center w-full cursor-pointer rounded-2xl duration-200"
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
            <div id="view-holidays" class="hidden">
              Holidays
            </div>
            <div id="view-history" class="hidden">
              history
            </div>
            <div id="view-carrer" class="hidden">
              Carreer
            </div>
            <div id="view-documents" class="hidden">
              Documents
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

import { createIcons, icons } from "lucide";

export async function dashboardPage() {
  document.getElementById("content").innerHTML = `
    <div id="dashboard" class="flex-1 p-6">
      <!-- Header -->
      <div class="w-full flex justify-between items-center mb-8">
        <div>
          <h1 class="text-2xl font-bold">Dashboard</h1>
          <p class="text-sm text-gray-500">Overview of employee requests and processes</p>
        </div>
        <a href="#/dashboard/new-request" class="button-primary flex items-center gap-2">
          <i data-lucide="plus" class="w-4 h-4"></i>
          New Request
        </a>
      </div>

      <!-- Stats Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
        <div class="bg-white border border-gray-200 shadow-sm p-5 rounded-2xl">
          <div class="flex justify-between items-center">
            <h3 class="font-semibold text-sm text-gray-600">Total Requests</h3>
            <i data-lucide="file-text" class="w-5 h-5 text-blue-500"></i>
          </div>
          <div class="mt-4">
            <span class="font-extrabold text-3xl">147</span>
            <p class="text-xs text-gray-500 mt-1"><span class="text-green-600 font-semibold">+12%</span> compared to last month</p>
          </div>
        </div>

        <div class="bg-white border border-gray-200 shadow-sm p-5 rounded-2xl">
          <div class="flex justify-between items-center">
            <h3 class="font-semibold text-sm text-gray-600">Pending</h3>
            <i data-lucide="clock" class="w-5 h-5 text-yellow-500"></i>
          </div>
          <div class="mt-4">
            <span class="font-extrabold text-3xl">23</span>
            <p class="text-xs text-gray-500 mt-1"><span class="text-red-600 font-semibold">-8%</span> compared to last month</p>
          </div>
        </div>

        <div class="bg-white border border-gray-200 shadow-sm p-5 rounded-2xl">
          <div class="flex justify-between items-center">
            <h3 class="font-semibold text-sm text-gray-600">Approved</h3>
            <i data-lucide="circle-check-big" class="w-5 h-5 text-green-500"></i>
          </div>
          <div class="mt-4">
            <span class="font-extrabold text-3xl">89</span>
            <p class="text-xs text-gray-500 mt-1"><span class="text-green-600 font-semibold">+5%</span> compared to last month</p>
          </div>
        </div>

        <div class="bg-white border border-gray-200 shadow-sm p-5 rounded-2xl">
          <div class="flex justify-between items-center">
            <h3 class="font-semibold text-sm text-gray-600">Rejected</h3>
            <i data-lucide="circle-x" class="w-5 h-5 text-red-500"></i>
          </div>
          <div class="mt-4">
            <span class="font-extrabold text-3xl">12</span>
            <p class="text-xs text-gray-500 mt-1"><span class="text-red-600 font-semibold">+3%</span> compared to last month</p>
          </div>
        </div>
      </div>

      <!-- Bottom Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <!-- Chart Placeholder -->
        <div class="bg-white border border-gray-200 shadow-sm rounded-2xl p-5">
          <h3 class="font-semibold text-sm text-gray-600 mb-4">Requests per Month</h3>
          <div class="h-64 flex items-center justify-center text-gray-400 text-sm border border-dashed border-gray-300 rounded-lg">
            📊 Chart placeholder (integrate Chart.js / Recharts here)
          </div>
        </div>

        <!-- Latest Requests -->
        <div class="bg-white border border-gray-200 shadow-sm rounded-2xl p-5">
          <h3 class="font-semibold text-sm text-gray-600 mb-4">Latest Requests</h3>
          <table class="w-full text-sm">
            <thead>
              <tr class="border-b border-gray-200 text-left text-gray-500">
                <th class="py-2">ID</th>
                <th>Employee</th>
                <th>Type</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b">
                <td class="py-2">REQ-001</td>
                <td>John Doe</td>
                <td>Vacation</td>
                <td><span class="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs">Pending</span></td>
              </tr>
              <tr class="border-b">
                <td class="py-2">REQ-002</td>
                <td>Anna Smith</td>
                <td>Medical Leave</td>
                <td><span class="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">Approved</span></td>
              </tr>
              <tr>
                <td class="py-2">REQ-003</td>
                <td>Michael Brown</td>
                <td>Schedule Change</td>
                <td><span class="bg-red-100 text-red-700 px-2 py-1 rounded text-xs">Rejected</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
  createIcons({ icons });
}

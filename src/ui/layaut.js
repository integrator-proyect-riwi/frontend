// layout.js
// import { sidebar } from "./../components/menu";

export function renderLayout() {
    const app = document.getElementById("app");
    app.innerHTML = `
        <div class="flex w-full h-screen">
            ${'sidebar'}
            <main id="view" class="flex-1 p-6 bg-gray-50 overflow-y-auto"></main>
        </div>
    `;
}
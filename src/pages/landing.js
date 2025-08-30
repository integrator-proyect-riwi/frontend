import { createIcons, icons } from "lucide";

export async function landingPage() {

    document.getElementById("content").innerHTML = `
        <div id="app" class="w-full flex flex-col gap-5 p-5 max-w-[1200px]">
            <section
                class="border border-gray-300 rounded-xl p-8 flex flex-col gap-3 bg-gradient-to-br from-gray-300 via-white to-gray-200">
                <h3 class="text-xs p-1 py-0.5 bg-gray-200 w-fit rounded-lg">
                    Comprehensive Management Platform
                </h3>
                <h1 class="font-bold text-4xl lg:text-5xl max-w-[500px]">
                    Simplified Workforce Management
                </h1>
                <p class="text-gray-500 max-w-[500px] text-justify">
                    The complete solution for internal staff requests and
                    procedures. Automate processes, improve efficiency, and
                    deliver an exceptional experience to your team.
                </p>
                <div class="flex items-center gap-3 mt-3">
                    <a
                        href="#/login"
                        class="bg-black flex items-center gap-5 px-3 text-white h-10 rounded-lg text-sm hover:bg-slate-900 cursor-pointer duration-200"
                    >
                        Get Started Now
                        <i data-lucide="arrow-right" class="w-4"></i>
                    </a>
                </div>
            </section>
            <section
                class="grid grid-cols-2 sm:grid-cols-4 gap-3 rounded-xl p-3"
            >
                <div
                    class="border border-gray-300 p-3 rounded-xl flex flex-col items-center gap-1"
                >
                    <i data-lucide="users" class="w-8 h-8 my-1.5"></i>
                    <span class="font-black text-2xl">500+</span>
                    <p class="text-sm text-gray-500 text-center">
                        Active Employees
                    </p>
                </div>
                <div
                    class="border border-gray-300 p-3 rounded-xl flex flex-col items-center gap-1"
                >
                    <i data-lucide="star" class="w-8 h-8 my-1.5"></i>
                    <span class="font-black text-2xl">98%</span>
                    <p class="text-sm text-gray-500 text-center">
                        User Satisfaction
                    </p>
                </div>
                <div
                    class="border border-gray-300 p-3 rounded-xl flex flex-col items-center gap-1"
                >
                    <i data-lucide="clock" class="w-8 h-8 my-1.5"></i>
                    <span class="font-black text-2xl">24/7</span>
                    <p class="text-sm text-gray-500 text-center">
                        Availability
                    </p>
                </div>
                <div
                    class="border border-gray-300 p-3 rounded-xl flex flex-col items-center gap-1"
                >
                    <i data-lucide="trending-up" class="w-8 h-8 my-1.5"></i>
                    <span class="font-black text-2xl">85%</span>
                    <p class="text-sm text-gray-500 text-center">
                        Time Reduction
                    </p>
                </div>
            </section>
            <section class="p-3 flex flex-col gap-5">
                <div class="text-center">
                    <h2 class="text-3xl font-semibold mb-5">Key Features</h2>
                    <span class="text-gray-500"
                        >Everything you need to optimize team management in one
                        single platform</span
                    >
                </div>
                <!-- ---------------- -->
                <div
                    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
                >
                    <div
                        class="p-4 border border-gray-300 rounded-xl hover:shadow hover:-translate-y-2 transition-all duration-300 select-none group"
                    >
                        <div class="flex gap-5 items-center text-lg">
                            <div
                                class="p-2.5 bg-gray-200 rounded-xl group-hover:bg-gray-300"
                            >
                                <i data-lucide="calendar" class="w-4 h-4"></i>
                            </div>
                            <h3>Vacation Management</h3>
                        </div>
                        <p class="pt-5 text-gray-500">
                            Automatic calculation of available days and
                            simplified requests
                        </p>
                    </div>
                    <div
                        class="p-4 border border-gray-300 rounded-xl hover:shadow hover:-translate-y-2 transition-all duration-300 select-none group"
                    >
                        <div class="flex gap-5 items-center text-lg">
                            <div
                                class="p-2.5 bg-gray-200 rounded-xl group-hover:bg-gray-300"
                            >
                                <i data-lucide="file-text" class=""></i>
                            </div>
                            <h3>Permissions & Leaves</h3>
                        </div>
                        <p class="pt-5 text-gray-500">
                            Configurable approval flows and real-time tracking
                        </p>
                    </div>
                    <div
                        class="p-4 border border-gray-300 rounded-xl hover:shadow hover:-translate-y-2 transition-all duration-300 select-none group"
                    >
                        <div class="flex gap-5 items-center text-lg">
                            <div
                                class="p-2.5 bg-gray-200 rounded-xl group-hover:bg-gray-300"
                            >
                                <i data-lucide="shield" class="w-6 h-6"></i>
                            </div>
                            <h3>Work Certificates</h3>
                        </div>
                        <p class="pt-5 text-gray-500">
                            Automatic generation of certificates and official
                            documents
                        </p>
                    </div>
                    <div
                        class="p-4 border border-gray-300 rounded-xl hover:shadow hover:-translate-y-2 transition-all duration-300 select-none group"
                    >
                        <div class="flex gap-5 items-center text-lg">
                            <div
                                class="p-2.5 bg-gray-200 rounded-xl group-hover:bg-gray-300"
                            >
                                <i data-lucide="users" class="w-6 h-6"></i>
                            </div>
                            <h3>Staff Management</h3>
                        </div>
                        <p class="pt-5 text-gray-500">
                            Complete employee history and centralized
                            administration
                        </p>
                    </div>
                    <div
                        class="p-4 border border-gray-300 rounded-xl hover:shadow hover:-translate-y-2 transition-all duration-300 select-none group"
                    >
                        <div class="flex gap-5 items-center text-lg">
                            <div
                                class="p-2.5 bg-gray-200 rounded-xl group-hover:bg-gray-300"
                            >
                                <i
                                    data-lucide="chart-column-increasing"
                                    class="w-6 h-6"
                                ></i>
                            </div>

                            <h3>Advanced Reports</h3>
                        </div>
                        <p class="pt-5 text-gray-500">
                            Detailed analysis and downloadable reports for HR
                        </p>
                    </div>
                    <div
                        class="p-4 border border-gray-300 rounded-xl hover:shadow hover:-translate-y-2 transition-all duration-300 select-none group"
                    >
                        <div class="flex gap-5 items-center text-lg">
                            <div
                                class="p-2.5 bg-gray-200 rounded-xl group-hover:bg-gray-300"
                            >
                                <i data-lucide="clock" class="w-6 h-6"></i>
                            </div>
                            <h3>Time Control</h3>
                        </div>
                        <p class="pt-5 text-gray-500">
                            Tracking requests and optimized response times
                        </p>
                    </div>
                </div>
            </section>
            <section
                class="p-3 flex flex-col lg:flex-row lg:justify-between gap-5"
            >
                <div class="lg:max-w-[600px]">
                    <h2 class="text-2xl font-black text-center">
                        Why choose our platform?
                    </h2>
                    <p class="text-gray-500 text-justify mt-3">
                        Specifically designed for modern workforce management
                        needs, our platform combines simplicity and power to
                        deliver exceptional results.
                    </p>
                    <ul class="mt-5">
                        <li class="py-3 flex items-start gap-2">
                            <i
                                data-lucide="circle-check-big"
                                class="text-green-400 min-h-5 min-w-5"
                            ></i>
                            <span class="text-gray-500"
                                >Role-based access (Employee, Manager, HR)</span
                            >
                        </li>
                        <li class="py-3 flex items-center gap-2">
                            <i
                                data-lucide="circle-check-big"
                                class="text-green-400 h-5"
                            ></i>
                            <span class="text-gray-500"
                                >Fully responsive and modern interface</span
                            >
                        </li>
                        <li class="py-3 flex items-center gap-2">
                            <i
                                data-lucide="circle-check-big"
                                class="text-green-400 h-5"
                            ></i>
                            <span class="text-gray-500"
                                >Real-time notifications</span
                            >
                        </li>
                        <li class="py-3 flex items-center gap-2">
                            <i
                                data-lucide="circle-check-big"
                                class="text-green-400 h-5"
                            ></i>
                            <span class="text-gray-500"
                                >Automated workflows</span
                            >
                        </li>
                        <li class="py-3 flex items-center gap-2">
                            <i
                                data-lucide="circle-check-big"
                                class="text-green-400 h-5"
                            ></i>
                            <span class="text-gray-500"
                                >Complete history and traceability</span
                            >
                        </li>
                        <li class="py-3 flex items-center gap-2">
                            <i
                                data-lucide="circle-check-big"
                                class="text-green-400 h-5"
                            ></i>
                            <span class="text-gray-500"
                                >Integration with existing systems</span
                            >
                        </li>
                    </ul>
                </div>
                <div
                    class="border-gray-300 border p-5 rounded-2xl flex flex-col gap-3 bg-gradient-to-br from-gray-100 to-gray-50 lg:w-[600px] h-fit"
                >
                    <div class="w-full flex items-center gap-3 mb-3">
                        <i data-lucide="zap"></i>
                        <h3>Immediate Results</h3>
                    </div>
                    <div class="flex flex-col gap-3">
                        <div class="w-full flex justify-between text-gray-500">
                            Implementation Time
                            <p
                                class="py-1 px-2 bg-gray-200 text-black text-sm font-medium rounded-lg"
                            >
                                24 hours
                            </p>
                        </div>
                        <div class="w-full flex justify-between text-gray-500">
                            Reduction of manual procedures
                            <p
                                class="py-1 px-2 bg-gray-200 text-black text-sm font-medium rounded-lg"
                            >
                                85%
                            </p>
                        </div>
                        <div class="w-full flex justify-between text-gray-500">
                            Satisfaction improvement
                            <p
                                class="py-1 px-2 bg-gray-200 text-black text-sm font-medium rounded-lg"
                            >
                                +40%
                            </p>
                        </div>
                        <div class="w-full flex justify-between text-gray-500">
                            ROI in first year
                            <p
                                class="py-1 px-2 bg-gray-200 text-black text-sm font-medium rounded-lg"
                            >
                                300%
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section
                class="p-5 px-8 rounded-2xl flex items-center justify-center h-[300px] gap-3 bg-gradient-to-r from-[#060515] to-[#343341]"
            >
                <div
                    class="max-w-[500px] h-full flex flex-col items-center justify-around"
                >
                    <h2 class="text-white text-2xl text-center font-black">
                        Ready to transform your workforce management?
                    </h2>
                    <p class="text-white text-center py-2">
                        Join hundreds of companies already trusting our platform
                    </p>
                    <div class="mt-3">
                        <a
                            href="#/login"
                            class="bg-white w-fit flex px-3 py-1.5 rounded-lg gap-3 text-sm items-center font-medium cursor-pointer hover:bg-gray-200 duration-200 group"
                        >
                            Request Free Demo
                            <i
                                data-lucide="arrow-right"
                                class="w-4 group-hover:translate-x-1"
                            ></i>
                        </a>
                    </div>
                </div>
            </section>

            <footer class="text-center pb-3 font-medium text-gray-500">
                &copy; 2025 TramiGO. All rights reserved.
            </footer>
        </div>
    </div>
    `;

    createIcons({ icons });
}

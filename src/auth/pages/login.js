import { createIcons, icons } from "lucide";
import { auth } from "../auth";

export const loginPage = async () => {
    const content = document.getElementById("content");

    content.innerHTML = `
    <section
        id="login-page"
        class="flex-1 h-full gap-10 flex items-center justify-center bg-[#eaf2ff]"
      >
        <div id="welcome" class="">
          <div class="flex items-center gap-5 w-[400px]">
            <div class="p-4 bg-[#191919] w-fit rounded-full">
              <i data-lucide="building" class="w-8 h-8 text-white"></i>
            </div>
            <div>
              <h1 class="text-2xl font-medium">Staff Management</h1>
              <p>Requests and Processes System</p>
            </div>
          </div>
          <ul class="mt-5 p-2 flex flex-col gap-2">
            <li class="flex items-center gap-2">
              <i data-lucide="shield" class="text-blue-500"></i> 
              <span class="text-sm">Secure and Protected Access</span>
            </li>
            <li class="flex items-center gap-2">
              <i data-lucide="users" class="text-green-500"></i> 
              <span class="text-sm">Comprehensive Human Resources Management</span>
            </li>
            <li class="flex items-center gap-2">
              <i data-lucide="lock" class="text-purple-500"></i> 
              <span class="text-sm">Roles and Permissions Control</span>
            </li>
          </ul>
        </div>

        <!-- form -->
        <form
          id="form-login"
          class="bg-white p-6 rounded-md shadow-2xl w-[430px]"
        >
          <div>
            <h2 class="text-2xl font-medium">Login</h2>
            <span class="text-gray-500"
              >Please enter your credentials to log in</span
            >
          </div>

          <div id="form-login-inputs" class="flex flex-col gap-2.5 mt-5">
            <div>
              <label
                for="email"
                class="block text-sm font-medium text-gray-700 mb-1"
                >Email</label
              >
              <div class="relative flex items-center">
                <i
                  data-lucide="mail"
                  class="w-4 h-4 text-gray-500 absolute left-3 outline-gray-500"
                ></i>
                <input
                  id="email-input"
                  type="email"
                  name="email"
                  placeholder="Type your email"
                  required
                  class="bg-gray-200 pl-10 py-2 flex-1 rounded outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 text-sm placeholder:font-medium"
                />
              </div>
            </div>
            <div>
              <label
                for="password-input"
                class="block text-sm font-medium text-gray-700 mb-1"
                >Password</label
              >
              <div class="relative flex items-center">
                <i
                  data-lucide="lock"
                  class="w-4 h-4 text-gray-500 absolute left-3 outline-gray-500"
                ></i>
                <input
                  id="password-input"
                  type="password"
                  name="password"
                  placeholder="Type your password"
                  required
                  class="bg-gray-200 pl-10 py-2 flex-1 rounded outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 text-sm placeholder:font-medium"
                />
              </div>
            </div>
          </div>

          <!-- actions -->
          <div id="form-actions" class="flex-1 flex justify-end mt-5">
            <a href="#" class="text-sm font-medium hover:underline">Forgot password?</a>
          </div>

          <button type="submit" class="bg-[#191919] text-white w-full rounded py-1.5 cursor-pointer hover:bg-[#393939] duration-200 flex items-center justify-center gap-2 mt-4">
            <i data-lucide="log-in" class="w-4 h-4"></i>
            Log in
          </button>

          <hr class="my-5 border-t-gray-300" />

          <input type="hidden" name="role" id="role-input" />

          <!-- credentials -->
          <div class="flex flex-col gap-3">
            <button type="button" id="login-employee" class="border-gray-300 border w-full text-left p-2 rounded-md hover:bg-gray-200 cursor-pointer" data-role="employee">
              <span class="font-medium text-sm">
                Employee
              </span>
              <p class="text-sm text-gray-500 font-medium">
                employee@enterprise.com
              </p>
            </button>
            <button type="button" id="login-admin" class="border-gray-300 border w-full text-left p-2 rounded-md hover:bg-gray-200 cursor-pointer" data-role="admin">
              <span class="font-medium text-sm">
                Human Resources
              </span>
              <p class="text-sm text-gray-500 font-medium">
                admin@enterprise.com
              </p>
            </button>
          </div>
        </form>
      </section>
  `;
    const loginForm = document.getElementById("form-login");
    const buttons = document.querySelectorAll("[data-role]");
    const roleInput = document.getElementById("role-input");
    const emailInput = document.getElementById("email-input");
    const passwordInput = document.getElementById("password-input");

    const demoCredentials = {
        employee: { email: "employee@enterprise.com", password: "empleado123" },
        admin: { email: "admin@enterprise.com", password: "admin123" },
    };

    buttons.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const role = e.currentTarget.dataset.role;
            roleInput.value = role;

            emailInput.value = demoCredentials[role].email;
            passwordInput.value = demoCredentials[role].password;

            buttons.forEach((b) =>
                b.classList.remove("bg-blue-100", "border-blue-500")
            );
            e.currentTarget.classList.add("bg-blue-100", "border-blue-500");
        });
    });

    loginForm.onsubmit = async (e) => {
        e.preventDefault();

        const submitBtn = loginForm.querySelector("button[type='submit']");
        submitBtn.disabled = true; // 🔒 Bloquear botón
        submitBtn.classList.add("bg-gray-400", "cursor-not-allowed");
        submitBtn.classList.remove("bg-[#191919]", "hover:bg-[#393939]");
        submitBtn.innerHTML = `<i data-lucide="loader" class="w-4 h-4 animate-spin"></i> Logging in...`;

        try {
            if (
                e.target.email.value.trim() === "" ||
                e.target.password.value.trim() === ""
            ) {
                throw new Error("The fields cannot be left empty");
            }

            await auth.login(e.target.email.value, e.target.password.value);

            return (location.hash = "#/dashboard");
        } catch (err) {
            alert("Invalid credentials");
        } finally {
            submitBtn.disabled = false;
            submitBtn.classList.remove("bg-gray-400", "cursor-not-allowed");
            submitBtn.classList.add("bg-[#191919]", "hover:bg-[#393939]");
            submitBtn.innerHTML = `<i data-lucide="log-in" class="w-4 h-4"></i> Log in`;

            // recreate lucide icons because the HTML changed
            createIcons({ icons });
        }
    };

    createIcons({ icons });
};

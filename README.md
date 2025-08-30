# 📋 TramiGO

## **Personnel Management**

is a web application designed to streamline the administration of employees, contracts, departments, and certificate requests within an organization. With an intuitive interface and dynamic features, it helps optimize HR processes efficiently.

---

## Table of Contents

-   [Features](#features)
-   [Technologies](#technologies)
-   [Project Structure](#project-structure)
-   [Installation](#installation)
-   [Usage](#usage)
-   [Authentication and Roles](#authentication-and-roles)
-   [Contribution](#contribution)
-   [License](#license)
-   [Contact](#contact)
-   [Screenshots](#screenshots)

---

## 🛠 Features

-   Full **employee management**: add, edit, and delete.
-   Manage **departments** and **roles**.
-   Track and manage **contracts**.
-   Handle **certificate and leave requests**.
-   Admin dashboard with **statistics and reports**.
-   Authentication system with **roles and permissions**.
<!-- - **Responsive** and user-friendly interface. -->

## 🚀 Technologies

| Category         | Library                                                              | Version  |
| ---------------- | -------------------------------------------------------------------- | -------- |
| Frontend Build   | [@tailwindcss/vite](https://www.npmjs.com/package/@tailwindcss/vite) | ^4.1.12  |
| CSS Framework    | [TailwindCSS](https://tailwindcss.com/)                              | ^4.1.12  |
| Authentication   | [bcrypt](https://www.npmjs.com/package/bcrypt)                       | ^6.0.0   |
| Environment Vars | [dotenv](https://www.npmjs.com/package/dotenv)                       | ^17.2.1  |
| Notifications    | [iziToast](https://izitoast.marcelodolce.com/)                       | ^1.4.0   |
| Authentication   | [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)           | ^9.0.2   |
| Icons            | [Lucide](https://lucide.dev/)                                        | ^0.541.0 |

## 📂 Project Structure

```
frontend
├── README.md
├── index.html
├── package-lock.json
├── package.json
├── public
│   ├── icon.png
│   ├── logo-300.png
│   ├── logo-text-dark.png
│   ├── logo-text-light.png
│   └── vite.svg
├── src
│   ├── auth
│   │   ├── api
│   │   │   └── api.js
│   │   ├── auth.js
│   │   └── pages
│   │       ├── index.js
│   │       └── login.js
│   ├── components
│   │   └── menu.js
│   ├── main.js
│   ├── pages
│   │   ├── calendar.js
│   │   ├── configuration.js
│   │   ├── dashboard.js
│   │   ├── employees.js
│   │   ├── index.js
│   │   ├── landing.js
│   │   ├── my-profile.js
│   │   ├── new-request.js
│   │   ├── reports.js
│   │   └── requests.js
│   ├── router.js
│   └── style.css
└── vite.config.ts
```

---

## ⚙️ Installation

### 1. Clone the repository:

```bash
git clone https://github.com/integrator-proyect-riwi/frontend.git
cd frontend
```

### 2. Install dependencies:

```bash
npm install
```

### 3. Configure environment in .env:

```ini
VITE_API_URL_DEV=http://localhost:3000
```

### 4. start the aplication:

```bash
npm run dev
```

## 🧩 Usage

### **General**

1. Open your browser and go to:

```
Open your browser and go to: http://localhost:5173/
```

2. Log in with your username and password.

### **RH System**

- **Manage employees:**
  - Go to **Employees → New Employee** to add new employees.
  - Edit or delete existing employees from the list.

-   **Manage requests:**
-   Go to **Requests** → Approve or reject employee requests.
-   **Generate reports:** Go to **Reports**, select parameters, and download PDF/CSV. _(In progress)_
-   **Configure departments or roles:**
-   Go to **Configuration** → Add, edit, or delete departments or roles.

---

### **Employee**

-   **View personal profile:**
-   Go to **My Profile** to update personal information.
-   **Requests:**
-   Go to **Requests → New Request** to submit leave or certificate requests.
-   Check the status of your requests.
-   **View personal reports:**
-   Access **Reports → My Reports** (if available) to see your statistics or request history.

---

## 🔐 Authentication and Roles

| Role          | Permissions                                                                                 |
| ------------- | ------------------------------------------------------------------------------------------- |
| **RH System** | Full system management: manage employees, contracts, requests, reports, and configurations. |
| **Employee**  | Manage own profile, submit requests (leave, certificates), view personal reports.           |

**Notes:**

-   **RH System** = Human Resources / Administrator
-   **Employee** = regular system user

## 🤝 Collaborators

-   **Abraham Villa** – Fullstack Developer – [GitHub](https://github.com/ajvilla99) | [Linkedin](https://linkedin.com)
-   **Carlos Gutierrez** – Fullstack Developer – [GitHub](https://github.com/carlosGG9)
-   **Yoelmis Perdomo** – Fullstack Developer – [GitHub](https://github.com/YePerdom)
-   **Cesar Hernandez** – Fullstack Developer – [GitHub](https://github.com/cahg99)

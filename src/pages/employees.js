
import { createIcons, icons } from "lucide";


export async function employeesPage() {
  const content = document.getElementById("app");
  if (!content) return;

  createIcons({ icons });
}
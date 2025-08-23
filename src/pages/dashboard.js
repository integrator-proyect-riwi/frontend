import { createIcons, icons } from "lucide";


export async function dashboardPage() {
  const content = document.getElementById("app");
  if (!content) return;

  createIcons({ icons });
}
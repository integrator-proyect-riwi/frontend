import { createIcons, icons } from "lucide";


export async function calendarPage() {
  const content = document.getElementById("app");
  if (!content) return;

  createIcons({ icons });
}
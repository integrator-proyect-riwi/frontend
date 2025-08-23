
import { createIcons, icons } from "lucide";


export async function reportsPage() {
  const content = document.getElementById("app");
  if (!content) return;

  createIcons({ icons });
}
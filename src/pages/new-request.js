
import { createIcons, icons } from "lucide";


export async function newRequestPage() {
  const content = document.getElementById("app");
  if (!content) return;

  createIcons({ icons });
}
import { createIcons, icons } from "lucide";


export async function menu() {
  const content = document.getElementById("app");
  if (!content) return;

  createIcons({ icons });
}
import { createIcons, icons } from "lucide";


export async function requestPage() {
  const content = document.getElementById("app");
  if (!content) return;

  createIcons({ icons });
}
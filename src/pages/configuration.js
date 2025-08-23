import { createIcons, icons } from "lucide";


export async function configurationPage() {
  const content = document.getElementById("app");
  if (!content) return;

  createIcons({ icons });
}
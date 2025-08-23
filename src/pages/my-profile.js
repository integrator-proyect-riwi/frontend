
import { createIcons, icons } from "lucide";


export async function myProfilePage() {
  const content = document.getElementById("app");
  if (!content) return;

  createIcons({ icons });
}
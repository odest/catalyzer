import { redirect } from "next/navigation";
import { routing } from "@workspace/i18n/routing";

export default function RootPage() {
  redirect(`/${routing.defaultLocale}`);
}

import { redirect } from "@workspace/i18n/navigation";

export default async function Dashboard({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  redirect({ href: "/dashboard/overview", locale });
}

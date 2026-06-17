"use client";

import { useRouter } from "@workspace/i18n/navigation";
import { useEffect } from "react";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/dashboard/overview");
  }, [router]);

  return null;
}

"use client";

import { useEffect } from "react";
import { useRouter } from "@workspace/i18n/navigation";

export default function RootRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/home");
  }, [router]);

  return null;
}

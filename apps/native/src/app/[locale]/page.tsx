"use client";

import { useRouter } from "@workspace/i18n/navigation";
import { useEffect } from "react";

export default function RootRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/home");
  }, [router]);

  return null;
}

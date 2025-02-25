"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ComponentsPage() {
  const router = useRouter();
  useEffect(() => {
    router.push("/components/infinite-marquee");
  }, [router]);

  return null;
}

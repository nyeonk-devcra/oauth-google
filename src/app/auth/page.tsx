"use client";

import { useSearchParams } from "next/navigation";

export default function AuthPage() {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");

  return <div>Loading.. code: {code}</div>;
}

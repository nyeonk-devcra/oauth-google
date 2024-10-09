"use client";

import Link from "next/link";

export const GOOGLE_AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&scope=https://www.googleapis.com/auth/drive.metadata.readonly%20email&client_id=${process.env.NEXT_PUBLIC_GOOGLE_AUTH_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_GOOGLE_AUTH_REDIRECT_URI}`;

export default function Home() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Link
        href={GOOGLE_AUTH_URL}
        className="w-40 h-30 px-4 py-3 border border-black rounded"
      >
        Login
      </Link>
    </div>
  );
}

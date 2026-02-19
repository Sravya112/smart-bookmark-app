"use client";

import LoginButton from "../components/LoginButton";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6">
      <h1 className="text-4xl font-bold">Smart Bookmark Manager</h1>
      <LoginButton />
    </div>
  );
}

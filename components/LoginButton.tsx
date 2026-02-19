"use client";

import { supabase } from "../lib/supabaseClient";

export default function LoginButton() {
  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/dashboard`,
      },
    });
  };

  return (
    <button
      onClick={handleLogin}
      className="bg-black text-white px-6 py-3 rounded"
    >
      Continue with Google
    </button>
  );
}

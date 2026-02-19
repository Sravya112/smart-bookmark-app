"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import AddBookmark from "../../components/AddBookmark";
import BookmarkList from "../../components/BookmarkList";

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      if (!data.user) {
        window.location.href = "/";
      } else {
        setUser(data.user);
      }
    };

    getUser();
  }, []);

  const logout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/";
  };

  if (!user) return null;

return (
  <div className="min-h-screen bg-gray-900 flex justify-center items-start pt-16">
    <div className="w-full max-w-2xl">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-2xl font-bold">🔖 Smart Bookmark Manager</h1>
            <div className="mt-1 inline-block bg-gray-100 px-3 py-1 rounded-full">
              <p className="text-xs text-gray-700 font-medium">
                {user.user_metadata.full_name}
              </p>
            </div>
          </div>

          <button onClick={logout} className="text-red-500 font-medium">
            Logout
          </button>
        </div>

        <AddBookmark user={user} />
        <BookmarkList user={user} />
      </div>

      <p className="text-center text-gray-400 mt-6 text-sm">
        Built with Next.js + Supabase
      </p>
    </div>
  </div>
);

}

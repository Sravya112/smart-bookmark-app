"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function BookmarkList({ user }: any) {
  const [bookmarks, setBookmarks] = useState<any[]>([]);

  const fetchBookmarks = async () => {
    const { data } = await supabase
      .from("bookmarks")
      .select("*")
      .order("created_at", { ascending: false });

    setBookmarks(data || []);
  };

  useEffect(() => {
    fetchBookmarks();

    const channel = supabase
      .channel("realtime-bookmarks")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "bookmarks" },
        () => {
          fetchBookmarks();
        },
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const deleteBookmark = async (id: string) => {
    await supabase.from("bookmarks").delete().eq("id", id);
  };

return (
  <div className="space-y-3">
    {bookmarks.map((b) => (
      <div
        key={b.id}
        className="bg-gray-50 border rounded-lg p-4 flex justify-between items-center hover:shadow-md transition"
      >
        <div>
          <a
            href={b.url}
            target="_blank"
            className="font-semibold text-gray-800"
          >
            {b.title}
          </a>
          <p className="text-xs text-gray-500">{b.url}</p>
        </div>

        <button
          onClick={() => deleteBookmark(b.id)}
          className="text-red-500 text-sm font-medium"
        >
          Delete
        </button>
      </div>
    ))}
  </div>
);

}

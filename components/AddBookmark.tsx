"use client";

import { useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function AddBookmark({ user }: any) {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  const addBookmark = async () => {
    if (!title || !url) {
      alert("Enter title & url");
      return;
    }

    await supabase.from("bookmarks").insert([
      {
        title: title,
        url: url,
        user_id: user.id,
      },
    ]);

    setTitle("");
    setUrl("");
    alert("Bookmark added");
  };

 return (
   <div className="flex gap-3 mb-6 w-full">
     <input
       className="border p-3 rounded-lg w-1/3"
       placeholder="Title"
       value={title}
       onChange={(e) => setTitle(e.target.value)}
     />

     <input
       className="border p-3 rounded-lg flex-1"
       placeholder="https://example.com"
       value={url}
       onChange={(e) => setUrl(e.target.value)}
     />

     <button
       onClick={addBookmark}
       className="bg-blue-600 text-white px-6 rounded-lg"
     >
       Add
     </button>
   </div>
 );

}

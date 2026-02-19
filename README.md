# Smart Bookmark Manager

A real-time bookmark manager built using Next.js and Supabase.

## Features

- Google OAuth login (no email/password)
- Add bookmark (title + URL)
- Private bookmarks per user
- Real-time sync across tabs
- Delete bookmarks
- Deployed on Vercel

## Tech Stack

- Next.js (App Router)
- Supabase (Auth, Database, Realtime)
- Tailwind CSS
- Vercel

## Security

Row Level Security enabled so users can only see their own bookmarks.

## Problems I Faced & How I Solved Them

**1. Google OAuth redirect issue**  
Login wasn’t redirecting properly.  
Solved by adding Supabase callback URL in Google Cloud OAuth settings.

**2. Realtime not updating**  
Bookmarks were not updating automatically.  
Solved by enabling `supabase_realtime` publication for bookmarks table.

**3. Deployment environment variables**  
App failed after deployment.  
Solved by adding Supabase keys in Vercel environment variables.

## Live Demo
https://smart-bookmark-app-seven-bice.vercel.app

## Author
Sravya Ayyalasomayajula

src/
├── app/
│   ├── (auth)/
│   │   ├── sign-in/
│   │   └── sign-up/
│   ├── api/  (only if needed later)
│   ├── timeline/
│   ├── community/
│   ├── forum/
│   ├── marketplace/
│   ├── layout.tsx
│   ├── page.tsx  (landing)
│   └── globals.css
├── components/
│   ├── ui/  (shadcn)
│   ├── CreatePostModal.tsx
│   ├── PostCard.tsx
│   ├── OutingCard.tsx
│   └── NavBar.tsx
├── lib/
│   ├── supabase-browser.ts
│   └── supabase-server.ts
├── types/
│   └── post.ts
├── actions/
│   └── posts.ts  (server actions for create/read)
└── env.local


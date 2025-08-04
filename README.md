# Mini LinkedIn – A Full Stack Social App 👥

A LinkedIn-inspired full-stack social networking application where users can register, log in, create posts, view profiles, and manage their own content.

## 🚀 Features

- 🔐 **Authentication**
  - JWT-based login and registration
  - Secure cookie storage

- 🧑‍💼 **User Profiles**
  - View user details and bio
  - See posts made by users

- 📝 **Posts**
  - Create, view, and manage personal posts
  - Feed-style timeline with recent updates

- 🧭 **Navigation**
  - Sidebar navigation similar to LinkedIn
  - Clean, responsive UI

- 💻 **Tech Stack**
  - **Frontend:** Next.js 14 (App Router), Tailwind CSS
  - **Backend:** Node.js with API Routes (Next.js)
  - **Database:** MongoDB with Mongoose
  - **Auth:** JSON Web Tokens (JWT), HTTP-only Cookies

---


## 📁 Folder Structure

```
mini-linkedin/
├── lib/
│   └── mongoose.ts
│   └── getUserFromCookie.ts
├── models/
│   └── User.ts
│   └── Post.ts
├── components/
│   └── Sidebar.tsx
│   └── PostCard.tsx
│   └── PostForm.tsx
├── app/
│   ├── login/
│   ├── register/
│   ├── myposts/
│   ├── profile/[id]/
│   ├── api/
│   │   ├── login/
│   │   ├── logout/
│   │   ├── register/
│   │   ├── posts/
│   │   └── profile/[id]/
```

---

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Mahendra07112003/Mini-LinkedIn-A-Full-Stack-Social-App.git
   cd Mini-LinkedIn-A-Full-Stack-Social-App
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up `.env`**
   ```env
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. **Run the app**
   ```bash
   npm run dev
   ```

---

## 🌐 Deployment

Can be deployed on:
- Vercel (Recommended for Next.js)
- Render / Railway (for MongoDB Atlas backend APIs)

Make sure to add environment variables in the deployment dashboard.

---

## 🙌 Acknowledgments

Inspired by LinkedIn's minimal design and built for educational purposes.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

# NestJS Blog API

A **NestJS-based Blog API** that provides CRUD operations for blog posts. This API allows users to fetch all posts, generate a new post, delete a post, and perform a search.

## 🚀 Installation & Setup


###  Install Dependencies
```sh
npm install
```

###  Run the Development Server
```sh
npm run start:dev
```

---

## 🔗 API Endpoints

| Method | Route                             | Description                      |
|--------|----------------------------------|-----------------------------------|
| `GET`  | `/api/posts`                     | Get all blog posts                |
| `POST` | `/api/posts/generate`            | Generate a new blog post          |
| `DELETE` | `/api/posts/:id`               | Delete a blog post by ID          |
| `GET`  | `/api/posts/health-check`        | Check server health               |

---

## 🛠 Project Structure
```
src/
│-- blog/
│   ├── blog.controller.ts    # Handles API requests
│   ├── blog.service.ts       # Business logic
│   ├── dto/                  # Data transfer objects (DTOs)
│   ├── interfaces/           # Interface for BlogPost
│-- main.ts                   # App entry point
│-- app.module.ts             # Root module
```

---

## 🌍 CORS Configuration (Allow Specific Origins)
To allow requests only from a specific origin, modify `main.ts`:
For multiple domains:
```ts
origin: ['https://gen-ai-blogs.netlify.app/', 'https://localhost:5143']
```

---

## 🏗 Build for Production
```sh
npm run build
```

## 🎯 Start Production Server
```sh
npm run start
```

---

## ✅ Health Check
To ensure the server is running, visit:

```
GET /api/posts/health-check
```
Expected response:
```json
{ "status": "ok", "timestamp": "2024-03-03T12:00:00.000Z" }
```



# EmptyCup Full Stack Assignment (MERN)

## Project Structure
- `client/` — React frontend (Create React App)
- `server/` — Express backend API

## Local Development (No Docker)

### 1. Install dependencies

```
cd server && npm install
cd ../client && npm install
```

### 2. Start backend

```
cd ../server
node index.js
```

### 3. Start frontend

```
cd ../client
npm start
```

- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend API: [http://localhost:5000/api/designers](http://localhost:5000/api/designers)

## Features
- Mobile-friendly designer listing page
- Shortlist toggle per designer
- Shortlisted filter in top bar
- Data fetched from Express backend

## Next Steps
- Replace static designer data with MongoDB (see `server/index.js`)
- Add Docker and docker-compose for local orchestration
- Deploy frontend (Netlify) and backend (Render, Railway, or your VM)

## Notes
- Place designer images in `client/public/` and update image paths in backend data.
- For Figma icons/fonts, download and add to `client/public/` or use CDN links in `public/index.html`.

---

For any issues, contact the assignment provider.

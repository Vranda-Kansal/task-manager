
# Task Manager Application

A full-stack task management application built with React, Node.js, and MongoDB. Users can create, manage, and organize their tasks with real-time synchronization and theme switching.

## 🎯 Features

- ✅ **Create Tasks** - Add new tasks with a simple form
- ✅ **View Tasks** - Display all user tasks in a clean list
- ✅ **Mark Complete** - Check off completed tasks with visual feedback
- ✅ **Delete Tasks** - Remove tasks with loading states
- ✅ **Filter Tasks** - Filter by All, Active, or Completed status
- ✅ **User Isolation** - Each user gets a unique ID (stored in localStorage)
- ✅ **Light/Dark Theme** - Toggle between light and dark modes
- ✅ **Error Handling** - Clear error messages for failed operations
- ✅ **Loading States** - Visual feedback during API operations
- ✅ **Responsive Design** - Works on desktop and mobile devices
- ✅ **Real-time Updates** - Instant UI updates after operations
- ✅ Persistent Data – Data remains after refresh  

## 🛠️ Tech Stack

### Frontend
- **React** - UI library
- **Tailwind CSS** - Styling framework
- **Axios** - HTTP client
- **Vite** - Build tool and dev server

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **CORS** - Cross-origin resource sharing

## 📋 Prerequisites

Before you begin, ensure you have installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [MongoDB](https://www.mongodb.com/try/download/community) (MongoDB Atlas account)
- [Git](https://git-scm.com/)

## 🚀 Installation & Setup

### Step 1: Clone the Repository

```bash
git clone https://github.com/yourusername/task-manager.git
cd task-manager
```

### Step 2: Backend Setup

```bash
# Navigate to backend folder
cd backend

# Install dependencies
npm install

# Create .env file
touch .env
```

Copy and paste `backend/.env.example` to `backend/.env` file you created:
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/taskmanager
```

**Replace `MONGO_URI` in this format and fill your credentials replace whole along with <>:**
```
# Example:
MONGO_URI=mongodb+srv://<username>:<password>@<cluster-name>.mongodb.net/<database-name>?retryWrites=true&w=majority
```

**Run this to start server**
```bash
npm run dev
```

You should see:
```
Server running on port 8000
MongoDB connected ✅
```


If you dont see that:
```
check your MONGO_URI
```

### Step 3: Frontend Setup

Open a new terminal and navigate to the frontend:

```bash
# Navigate to frontend folder
cd frontend

# Install dependencies
npm install

# Create .env.local file
touch .env
```

Copy and paste `frontend/.env.example` to `frontend/.env` file you created:
```
VITE_SERVER_URL=yours_server_running_url like http://localhost:8000
```

**Start the frontend development server:**
```bash
npm run build
```
```bash
npm run dev
```


You should see:
```

  VITE v8.0.8  ready in 307 ms

  ➜  Local:   http://localhost:5883/
```

### Step 4: Access the Application

Open your browser and go to url which frontend showing:
```
http://localhost:5883/
```

- Make sure in one terminal your backend is running and in another frontend
- and frontend .env have the url on which port your server is running

## 📖 How to Use

1. **Create a Task**
   - Enter task title in the input field
   - Click "Add" button
   - Task appears in the list instantly

2. **Mark Task Complete**
   - Click the checkbox next to the task
   - Task shows as completed with strikethrough

3. **Delete a Task**
   - Click the "Delete" button on the task
   - Task is removed from the list

4. **Filter Tasks**
   - Click "All" to see all tasks
   - Click "Active" to see incomplete tasks
   - Click "Completed" to see finished tasks

5. **Toggle Theme**
   - Click the moon/sun icon in the top right
   - Theme switches between light and dark mode


## 🔐 Key Implementation Details

### User Identification
- Each user gets a unique UUID generated on first visit
- UUID stored in browser's localStorage
- All tasks linked to user's UUID

### Error Handling
- Try-catch blocks on all API calls
- User-friendly error messages displayed
- Input validation on frontend and backend


### Change Backend Port

Edit `backend/.env`:
```
PORT=3000
```

Then update frontend `.env`:
```
VITE_API_URL=http://localhost:3000
```

## 🐛 Troubleshooting

### Frontend can't connect to backend
```
Error: Failed to fetch tasks
```
**Solution:**
- Check backend is running on `http://localhost:5000`
- Verify `VITE_API_URL` in `.env`
- Check browser console for exact error

### MongoDB connection error
```
Error: connect ECONNREFUSED 127.0.0.1:27017
```
**Solution:**
- Ensure MongoDB is running
- Check `MONGO_URI` in backend `.env`
- For MongoDB Atlas, verify connection string and IP whitelist


## 👨‍💻 Author

[Vranda Kansal]


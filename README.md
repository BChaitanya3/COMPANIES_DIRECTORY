# Companies Directory

> A modern, full-stack web application for browsing and managing company information with an intuitive dark-themed interface.

[![React](https://img.shields.io/badge/React-19.2.0-blue.svg)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-v14+-green.svg)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.18.2-lightgrey.svg)](https://expressjs.com/)
[![License](https://img.shields.io/badge/License-Private-red.svg)]()

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Architecture](#project-architecture)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [Credits](#credits)

---

## 🎯 Overview

Companies Directory is a full-stack JavaScript application that provides an elegant solution for browsing, searching, and filtering company information. Built with React 19 and Express.js, it offers a seamless user experience with real-time filtering, pagination, and multiple view options.

The application demonstrates modern web development practices with a clean separation between frontend and backend, responsive design principles, and production-ready deployment configurations.

### Key Highlights

- **Modern UI/UX**: Dark-themed interface with smooth interactions
- **Real-time Filtering**: Instant search and filter results without page reloads
- **Flexible Display**: Toggle between table and card layouts
- **RESTful API**: Well-structured backend with Express.js
- **Production Ready**: Configured for deployment on multiple platforms
- **Responsive Design**: Works seamlessly across all device sizes

---

## ✨ Features

### User Features

| Feature | Description |
|---------|-------------|
| 🔍 **Dynamic Search** | Filter companies by name or industry with real-time results |
| 🏭 **Industry Filter** | Quick filtering by specific industry categories |
| 📍 **Location Filter** | Browse companies by geographic location |
| 📊 **View Modes** | Switch between table and card grid layouts |
| 📄 **Pagination** | Navigate through results with 5 items per page |
| ⚡ **Fast Performance** | Optimized React components with useMemo hooks |
| 🎨 **Dark Theme** | Modern, eye-friendly dark interface design |
| 📱 **Responsive** | Fully responsive across desktop, tablet, and mobile |

### Technical Features

- Client-side routing with React
- RESTful API architecture
- JSON-based data storage
- CORS-enabled API endpoints
- Production build optimization
- Environment-based configuration
- Error handling and loading states

---

## 🛠 Technology Stack

### Frontend

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 19.2.0 | UI library for building interactive interfaces |
| **React DOM** | 19.2.0 | React rendering for web browsers |
| **CSS3** | - | Custom styling with modern CSS features |

### Backend

| Technology | Version | Purpose |
|------------|---------|---------|
| **Node.js** | v14+ | JavaScript runtime environment |
| **Express.js** | 4.18.2 | Web application framework |
| **CORS** | 2.8.5 | Cross-origin resource sharing middleware |

### Development Tools

| Tool | Version | Purpose |
|------|---------|---------|
| **React Scripts** | 5.0.1 | Build and development tooling |
| **Concurrently** | 8.2.2 | Run multiple commands simultaneously |

---

## 🏗 Project Architecture

### System Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    CLIENT BROWSER                        │
│  ┌───────────────────────────────────────────────────┐  │
│  │           React Application (SPA)                 │  │
│  │  ┌─────────────┐  ┌──────────────┐  ┌──────────┐ │  │
│  │  │  Search UI  │  │  Filter UI   │  │ View UI  │ │  │
│  │  └─────────────┘  └──────────────┘  └──────────┘ │  │
│  └───────────────────────────────────────────────────┘  │
└───────────────────┬─────────────────────────────────────┘
                    │ HTTP/JSON
                    │ (fetch API)
┌───────────────────▼─────────────────────────────────────┐
│              EXPRESS.JS SERVER                           │
│  ┌───────────────────────────────────────────────────┐  │
│  │              API Routes                           │  │
│  │  GET /api/companies                               │  │
│  │  GET /api/companies/:id                           │  │
│  └───────────────────┬───────────────────────────────┘  │
│                      │                                   │
│  ┌───────────────────▼───────────────────────────────┐  │
│  │          Data Layer (db.json)                     │  │
│  │  { companies: [...] }                             │  │
│  └───────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

### Development vs Production Architecture

#### Development Mode (Two Servers)
```
┌──────────────────┐         ┌──────────────────┐
│  React Dev       │  HTTP   │  Express API     │
│  localhost:3000  │ ◄─────► │  localhost:5000  │
│  - Hot Reload    │         │  - API Routes    │
│  - Dev Tools     │         │  - CORS Enabled  │
└──────────────────┘         └──────────────────┘
```

#### Production Mode (Single Server)
```
┌────────────────────────────────────────┐
│      Express Server (Port 5000)        │
│  ┌──────────────────────────────────┐  │
│  │  Static Files (React Build)      │  │
│  │  Route: /*                       │  │
│  └──────────────────────────────────┘  │
│  ┌──────────────────────────────────┐  │
│  │  API Endpoints                   │  │
│  │  Route: /api/*                   │  │
│  └──────────────────────────────────┘  │
└────────────────────────────────────────┘
```

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 14.0.0 or higher)
- **npm** (version 6.0.0 or higher) or **yarn**
- **Git** (for version control)

#### Check Your Installation

```bash
node --version   # Should output v14.0.0 or higher
npm --version    # Should output 6.0.0 or higher
```

#### Installing Node.js

If Node.js is not installed:

1. Visit [nodejs.org](https://nodejs.org/)
2. Download the LTS (Long Term Support) version
3. Run the installer
4. Verify installation with the commands above

---

### Installation

Follow these steps to set up the project locally:

#### 1. Clone the Repository

```bash
git clone <repository-url>
cd COMPANIES_DIRECTORY
```

#### 2. Install Dependencies

```bash
npm install
```

This will install all required dependencies listed in `package.json`:
- React and React DOM
- Express.js and CORS
- React Scripts (build tools)
- Concurrently (development tool)

**Expected Output:**
```
added XXX packages in XXs
```

---

### Running the Application

#### Option 1: Development Mode (Recommended)

Run both frontend and backend servers simultaneously:

```bash
npm run dev
```

**What This Does:**
- Starts React development server on port 3000
- Starts Express API server on port 5000
- Enables hot module reloading for React
- Enables CORS for cross-origin requests

**Access Points:**
- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend API: [http://localhost:5000/api/companies](http://localhost:5000/api/companies)

#### Option 2: Frontend Only

```bash
npm start
```

Opens React app at [http://localhost:3000](http://localhost:3000)

> **Note:** API server must be running separately for full functionality

#### Option 3: Backend Only

```bash
npm run server
```

Starts Express server at [http://localhost:5000](http://localhost:5000)

#### Option 4: Production Mode

Build and run the production version:

```bash
npm run prod
```

**What This Does:**
1. Builds optimized React production bundle
2. Starts Express server in production mode
3. Serves both frontend and API from single server

**Access Point:**
- Application: [http://localhost:5000](http://localhost:5000)

---

## 📡 API Documentation

### Base URL

- **Development:** `http://localhost:5000/api`
- **Production:** `https://yourdomain.com/api`

### Endpoints

#### 1. Get All Companies

```http
GET /api/companies
```

**Description:** Retrieves a list of all companies in the database.

**Request:**
```bash
curl http://localhost:5000/api/companies
```

**Response:** `200 OK`
```json
[
  {
    "id": 1,
    "name": "Aster Labs",
    "industry": "Healthcare",
    "location": "Bengaluru, India",
    "size": "51-200",
    "rating": 4.2
  },
  {
    "id": 2,
    "name": "BluePeak Solutions",
    "industry": "Software",
    "location": "Hyderabad, India",
    "size": "201-500",
    "rating": 4.5
  }
]
```

#### 2. Get Company by ID

```http
GET /api/companies/:id
```

**Description:** Retrieves a single company by its unique identifier.

**Parameters:**
- `id` (number, required) - Company ID

**Request:**
```bash
curl http://localhost:5000/api/companies/1
```

**Response:** `200 OK`
```json
{
  "id": 1,
  "name": "Aster Labs",
  "industry": "Healthcare",
  "location": "Bengaluru, India",
  "size": "51-200",
  "rating": 4.2
}
```

**Error Response:** `404 Not Found`
```json
{
  "error": "Company not found"
}
```

### Data Schema

#### Company Object

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| `id` | number | Unique identifier | `1` |
| `name` | string | Company name | `"Aster Labs"` |
| `industry` | string | Industry category | `"Healthcare"` |
| `location` | string | Company location | `"Bengaluru, India"` |
| `size` | string | Employee count range | `"51-200"` |
| `rating` | number | Company rating (0-5) | `4.2` |

---

## 🌐 Deployment

### Deployment Options

This application can be deployed to any platform supporting Node.js. Below are detailed instructions for popular platforms.

---

#### 1. Heroku

**Step-by-Step Guide:**

```bash
# Install Heroku CLI
npm install -g heroku

# Login to Heroku
heroku login

# Create new Heroku app
heroku create companies-directory-app

# Deploy application
git add .
git commit -m "Initial deployment"
git push heroku master

# Open deployed app
heroku open
```

**Configuration:**
- Build command: Automatic (uses `npm install`)
- Start command: Automatic (uses `npm run prod` from Procfile)
- Port: Assigned automatically via `process.env.PORT`

**Environment Variables:**
```bash
heroku config:set NODE_ENV=production
```

---

#### 2. Render.com

**Step-by-Step Guide:**

1. **Connect Repository**
   - Go to [render.com](https://render.com)
   - Click "New +" → "Web Service"
   - Connect your GitHub repository

2. **Configure Service**
   - **Name:** `companies-directory`
   - **Environment:** `Node`
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `node server.js`

3. **Environment Variables**
   ```
   NODE_ENV=production
   ```

4. **Deploy**
   - Click "Create Web Service"
   - Render will automatically deploy on every push

**URL Format:** `https://companies-directory.onrender.com`

---

#### 3. Railway.app

**Step-by-Step Guide:**

1. **Connect Repository**
   - Go to [railway.app](https://railway.app)
   - Click "New Project" → "Deploy from GitHub"
   - Select your repository

2. **Configuration** (Auto-detected)
   - Railway automatically detects Node.js
   - Uses `npm run prod` as start command

3. **Generate Domain**
   - Click "Settings" → "Generate Domain"

**URL Format:** `https://companies-directory.up.railway.app`

---

#### 4. DigitalOcean App Platform

**Step-by-Step Guide:**

1. **Create App**
   - Go to DigitalOcean App Platform
   - Click "Create App" → Connect GitHub

2. **Configure Build**
   - **Build Command:** `npm run build`
   - **Run Command:** `node server.js`
   - **HTTP Port:** 5000 (or leave default)

3. **Environment Variables**
   ```
   NODE_ENV=production
   ```

---

#### 5. AWS EC2 / VPS

**Step-by-Step Guide:**

```bash
# SSH into your server
ssh user@your-server-ip

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Clone repository
git clone <your-repo-url>
cd COMPANIES_DIRECTORY

# Install dependencies
npm install

# Build production
npm run build

# Install PM2 for process management
sudo npm install -g pm2

# Start application
pm2 start server.js --name companies-directory

# Configure PM2 to start on system boot
pm2 startup
pm2 save
```

**Setup Nginx Reverse Proxy (Optional):**

```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## 📁 Project Structure

```
COMPANIES_DIRECTORY/
│
├── public/                      # Static files
│   └── index.html              # HTML template
│
├── src/                        # React source code
│   ├── App.jsx                 # Main React component
│   ├── index.jsx               # React entry point
│   └── index.css               # Global styles
│
├── server.js                   # Express server
├── db.json                     # Company data (JSON database)
├── package.json                # Dependencies and scripts
├── package-lock.json           # Dependency lock file
├── Procfile                    # Heroku deployment config
└── README.md                   # Documentation (this file)
```

### Key Files Description

#### `server.js`
Express server that:
- Serves API endpoints (`/api/companies`)
- Serves React production build in production mode
- Handles CORS for development
- Reads data from `db.json`

#### `src/App.jsx`
Main React component featuring:
- State management with React hooks
- Search and filter logic
- Pagination implementation
- Table and card view rendering

#### `db.json`
JSON database containing company information:
```json
{
  "companies": [
    {
      "id": 1,
      "name": "Company Name",
      "industry": "Industry",
      "location": "Location",
      "size": "Size Range",
      "rating": 4.5
    }
  ]
}
```

---

## ⚙️ Configuration

### Environment Variables

Create a `.env` file in the root directory (optional):

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# API Configuration (for React)
REACT_APP_API_BASE=http://localhost:5000/api
```

### Available Scripts

| Command | Description | Use Case |
|---------|-------------|----------|
| `npm start` | Start React dev server | Frontend development |
| `npm run server` | Start Express server | Backend development |
| `npm run dev` | Start both servers | Full-stack development |
| `npm run build` | Build production bundle | Before deployment |
| `npm run prod` | Build and run production | Local production testing |

### API Base URL Configuration

The API base URL is automatically configured:

**Development:**
```javascript
http://localhost:5000/api
```

**Production:**
```javascript
/api  // Relative path (same server)
```

Override with environment variable:
```bash
REACT_APP_API_BASE=https://api.yourdomain.com/api npm start
```

---

## 🔧 Troubleshooting

### Common Issues and Solutions

#### Issue 1: Port Already in Use

**Error:**
```
Error: listen EADDRINUSE: address already in use :::5000
```

**Solution (Windows):**
```bash
netstat -ano | findstr :5000
taskkill /PID <PID> /F
```

**Solution (Mac/Linux):**
```bash
lsof -ti:5000 | xargs kill -9
```

**Alternative:** Change the port
```bash
PORT=8080 npm run server
```

---

#### Issue 2: API Connection Failed

**Error:**
```
Failed to fetch companies
```

**Solutions:**
1. Verify backend server is running:
   ```bash
   curl http://localhost:5000/api/companies
   ```

2. Check CORS configuration in `server.js`

3. Verify `proxy` setting in `package.json`:
   ```json
   "proxy": "http://localhost:5000"
   ```

---

#### Issue 3: Build Fails

**Error:**
```
npm run build fails
```

**Solutions:**
1. Clear cache and reinstall:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. Check Node.js version:
   ```bash
   node --version  # Should be v14+
   ```

---

#### Issue 4: Blank Page After Deployment

**Possible Causes:**
1. Missing production build
2. Incorrect API base URL
3. Server not serving static files

**Solutions:**
1. Ensure build folder exists:
   ```bash
   npm run build
   ```

2. Check server.js production mode:
   ```javascript
   if (process.env.NODE_ENV === 'production') {
     app.use(express.static(path.join(__dirname, 'build')));
   }
   ```

3. Verify environment variable:
   ```bash
   NODE_ENV=production
   ```

---

## 📊 Data Management

### Adding New Companies

1. Open `db.json`
2. Add new company object:
   ```json
   {
     "id": 11,
     "name": "New Company",
     "industry": "Technology",
     "location": "Mumbai, India",
     "size": "101-500",
     "rating": 4.3
   }
   ```
3. Restart the server

### Modifying Existing Companies

1. Locate company by ID in `db.json`
2. Update desired fields
3. Save file
4. Restart server to see changes

### Data Validation Rules

- **ID:** Must be unique integer
- **Name:** Required, string
- **Industry:** Required, string
- **Location:** Required, string
- **Size:** Must match format: "X-Y" or "1-10", "11-50", etc.
- **Rating:** Number between 0-5, supports decimals

---

## 🤝 Contributing

Currently, this is a private project. For any suggestions or issues, please contact the project maintainer.

---

## 👨‍💻 Credits

**Project Developer:** Satya Chaitanya

**Technologies Used:**
- React.js - Meta Platforms, Inc.
- Express.js - Node.js Foundation
- Node.js - OpenJS Foundation

---

## 📄 License

This project is private and not licensed for public distribution or use.

**Copyright © 2024 Satya Chaitanya. All rights reserved.**

---

## 📞 Support

For questions, issues, or feature requests, please contact the project maintainer.

---

**Last Updated:** November 2024  
**Version:** 0.1.0  
**Status:** ✅ Production Ready

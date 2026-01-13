# Professional Portfolio Website

This project was created to transform a static PDF resume into a dynamic, interactive, and professional web presence. The goal was to build a modern portfolio that not only lists skills and experience but demonstrates them through a polished, high-performance user interface.

**Key Objectives:**
- **Showcase:** Present professional experience, projects, and skills in a visually engaging way.
- **Interactivity:** Use animations and glassmorphism effects to create a premium user experience.
- **Contact:** Provide an integrated way for recruiters and potential collaborators to get in touch directly.

## Tech Stack
The application is built as a generic monolith with a React frontend and a lightweight Node.js backend for handling form submissions.

### Frontend
- **Framework:** [React 19](https://react.dev/) with [Vite](https://vitejs.dev/) for fast development and build performance.
- **Styling:** Custom CSS3 with CSS Variables for theming (Slate color palette) and Glassmorphism utilities. No heavy CSS frameworks were used to keep the bundle size small and demonstrate core CSS skills.
- **Animations:** [Framer Motion](https://www.framer.com/motion/) for smooth page transitions and interactive elements.
- **Icons:** `react-icons` for a diverse set of SVG icons.

### Backend
- **Server:** [Node.js](https://nodejs.org/) & [Express](https://expressjs.com/) to serve the API.
- **Email Service:** [Nodemailer](https://nodemailer.com/) securely handles contact form submissions and sends emails via Gmail (or configured SMTP transport).
- **Security:** `cors` for cross-origin resource sharing policies and `dotenv` for environment variable management.

##  Usage Guide

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation
1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Environment Setup:**
   Create a `.env` file in the root directory closely following the example variables mostly for the email configuration:
   ```env
   PORT=3000
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-specific-password
   ```

### Running the Project

**Development Mode (Run Everything):**
To start both the React dev server and the backend API concurrently (RECOMMENDED):
```bash
npm run dev:all
```
*Access at `http://localhost:5173`*

**Stand-alone commands:**
- Frontend only: `npm run dev`
- Backend only: `npm run server`

**Backend Server:**
To start the express server for handling emails:
```bash
npm run server
```
*Runs on `http://localhost:3000`*

**Production Build:**
To create an optimized production build:
```bash
npm run build
```

### Project Structure
- **/src**: React source code (Components, Pages, Styles).
- **/server**: Express server logic.
- **/public**: Static assets (Resume PDF, images).


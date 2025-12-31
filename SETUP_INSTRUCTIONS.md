# Real Estate Landing Page - Setup Instructions

## Prerequisites
- Node.js (v18 or higher)
- PostgreSQL (v12 or higher)
- npm or yarn

## Quick Start

### 1. Extract the ZIP file
```bash
unzip real-estate-app.zip
cd real-estate-app
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up PostgreSQL Database

#### Option A: Using Local PostgreSQL
```bash
# Create a new database
createdb real_estate_db

# Set environment variables in .env.local (create this file)
DATABASE_URL=postgresql://username:password@localhost:5432/real_estate_db
```

#### Option B: Using Docker (if you have Docker installed)
```bash
docker run --name real-estate-db -e POSTGRES_PASSWORD=password -e POSTGRES_DB=real_estate_db -p 5432:5432 -d postgres
```

Then create `.env.local`:
```
DATABASE_URL=postgresql://postgres:password@localhost:5432/real_estate_db
```

### 4. Initialize Database Schema
```bash
npm run db:push
```

### 5. Start the Application
```bash
npm run dev
```

The application will start at `http://localhost:5000`

## Project Structure
```
.
├── client/                 # Frontend React app
│   ├── src/
│   │   ├── pages/         # Page components (Home, Properties, About, Contact, etc.)
│   │   ├── components/    # Reusable components
│   │   ├── lib/           # Utilities (property fetching, API calls)
│   │   ├── App.tsx        # Main app router
│   │   └── index.css      # Global styles
│   └── index.html
├── server/                # Backend Express server
│   ├── db.ts              # Database connection
│   ├── storage.ts         # Storage/database operations
│   ├── routes.ts          # API endpoints
│   └── index.ts           # Server entry point
├── shared/                # Shared types & schemas
│   ├── schema.ts          # Database schema & Zod types
│   └── routes.ts          # API contract definitions
└── package.json           # Dependencies
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run db:push` - Push database schema changes
- `npm run db:studio` - Open Drizzle Studio (database UI)

## Configuration

### Google Sheets Integration (Optional)
To fetch properties from a Google Sheet:

1. Create a public Google Sheet with property data
2. Get the Sheet ID from the URL
3. In `client/src/lib/properties.ts` (or similar), update the fetch URL:
```javascript
const GOOGLE_SHEET_URL = 'https://opensheet.elk.sh/YOUR_SHEET_ID/Sheet1';
```

If the fetch fails, the app falls back to the dummy properties data.

## Features

- ✅ Responsive 5-page landing site (Home, Properties, About, Contact, Privacy Policy)
- ✅ Dynamic property listings with image gallery
- ✅ Contact form that saves inquiries to database
- ✅ Mobile-first design with Tailwind CSS
- ✅ Google Sheets integration with fallback data
- ✅ WhatsApp contact integration
- ✅ Modern animations with Framer Motion

## Troubleshooting

### Database Connection Error
- Verify PostgreSQL is running
- Check DATABASE_URL in `.env.local`
- Ensure database exists: `psql -l`

### Port 5000 Already in Use
- Kill the process: `lsof -ti:5000 | xargs kill -9`
- Or change the port in `server/index.ts`

### Properties Not Loading
- Check browser console for errors
- Verify Google Sheet URL is correct and public
- App will use fallback dummy data if fetch fails

## Need Help?
- Check the console logs: `npm run dev` and look at the terminal output
- Verify all environment variables are set correctly
- Ensure PostgreSQL is running and accessible

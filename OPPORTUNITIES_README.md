# Global Opportunities Hub

A comprehensive opportunities discovery platform integrated into the Mosun Owo-Odusi website.

## Features

- 🌍 **Multi-source data aggregation** from Opportunity Global, ReliefWeb, and Adzuna APIs
- 🔍 **Advanced search and filtering** by type, category, region, and keywords
- 📱 **Responsive design** optimized for all devices
- ⚡ **Real-time updates** with automated daily data refresh
- 🎨 **Seamless integration** with existing design system
- 📊 **Pagination and performance optimization**

## Opportunity Types

- Jobs (Project Management, Consulting, Leadership)
- Scholarships and Fellowships
- Grants and Funding
- Training Programs
- Conferences and Events

## Setup Instructions

### 1. Environment Variables

Create `.env.local` based on `.env.local.example`:

```bash
# MongoDB Connection
MONGODB_URI=mongodb://localhost:27017/opportunities-hub

# External API Keys
OPPORTUNITY_GLOBAL_API_KEY=your_api_key_here
ADZUNA_API_KEY=your_api_key_here
ADZUNA_APP_ID=your_app_id_here
```

### 2. Database Setup

```bash
# Install MongoDB locally or use MongoDB Atlas
# The app will auto-create collections on first run
```

### 3. Seed Demo Data

```bash
# Call the seed API endpoint
curl -X POST http://localhost:3000/api/opportunities/seed
```

### 4. Manual Data Refresh

```bash
# Fetch latest opportunities from external APIs
curl -X POST http://localhost:3000/api/opportunities/fetch
```

## API Endpoints

- `GET /api/opportunities` - Get paginated opportunities with filters
- `POST /api/opportunities/fetch` - Refresh data from external sources
- `POST /api/opportunities/seed` - Seed demo data (development only)

## Components

- `OpportunityCard` - Individual opportunity display
- `SearchBar` - Debounced search input
- `Filters` - Multi-category filtering system
- `OpportunitiesList` - Grid layout with loading states

## Automated Refresh

The system automatically refreshes data daily at 6 AM UTC using Vercel cron jobs (configured in `vercel.json`).

## Error Handling

- Graceful API failure handling
- Loading and error states for all components
- Retry mechanisms for failed requests
- Duplicate prevention in data storage

## Performance

- Client-side debounced search
- Server-side pagination
- Efficient MongoDB queries
- Optimized component rendering
- Lazy loading for images
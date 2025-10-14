# Hometown Liquor Client

A modern, full-stack e-commerce application for Hometown Liquor, built with React, TypeScript, and a PostgreSQL backend. This client provides a seamless shopping experience for liquor products with advanced features like search, reviews, favorites, and order management.

## 🚀 Features

### Core Functionality
- **Product Catalog**: Browse, search, and filter liquor products by category, department, brand, and price
- **User Authentication**: Secure signup/login with JWT tokens
- **Shopping Cart**: Add/remove items, manage quantities
- **Order Management**: Place orders, track status, view order history
- **Product Reviews**: Rate and review products, view aggregated ratings
- **Favorites**: Save favorite products for quick access
- **Notifications**: Real-time alerts for stock changes, orders, and promotions

### Advanced Features
- **Full-Text Search**: Powered by PostgreSQL's tsvector for fast, relevant results
- **Inventory Management**: Real-time stock tracking with low-stock alerts
- **Coupons & Discounts**: Apply discount codes with flexible rules
- **Analytics Dashboard**: Revenue trends, top products, order summaries (admin)
- **Dark Mode**: Modern UI with light/dark theme support
- **Responsive Design**: Optimized for desktop, tablet, and mobile

### Technical Highlights
- **TypeScript**: Full type safety across the application
- **Modern UI**: Glassmorphism design with smooth animations
- **API Integration**: RESTful backend with axios and JWT auth
- **Performance**: Optimized with Vite, lazy loading, and efficient state management

## 🛠 Tech Stack

### Frontend
- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **React Router** - Client-side routing
- **Axios** - HTTP client for API calls
- **Lucide React** - Icon library
- **Framer Motion** - Animations

### Backend (External)
- **Node.js/Express** - API server
- **PostgreSQL** - Database
- **JWT** - Authentication
- **Railway** - Hosting platform

## 📋 Prerequisites

- Node.js 18+
- npm or yarn
- Backend API running (see API docs)

## 🚀 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/rpat9/Hometown-Liquor-Client.git
   cd Hometown-Liquor-Client
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   - Copy `.env.example` to `.env`
   - Set your backend URL:
     ```
     VITE_API_BASE_URL=https://hometownliquors-website-production.up.railway.app/api
     ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   npm run preview
   ```

## 📖 Usage

### Development
- Run `npm run dev` to start the Vite dev server
- Open `http://localhost:5173` in your browser
- The app will hot-reload on file changes

### API Integration
The app connects to the backend API at the configured `VITE_API_BASE_URL`. All API calls include JWT authentication where required.

### Key Routes
- `/` - Home page
- `/products` - Product catalog
- `/cart` - Shopping cart
- `/login` - User login
- `/signup` - User registration
- `/dashboard` - User dashboard (authenticated)

## 🏗 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.tsx      # Main navigation
│   └── Buttons/        # Button components
├── styles/             # CSS files
│   ├── index.css       # Global styles & variables
│   ├── components.css  # Component styles
│   └── utilities.css   # Utility classes
├── types/              # TypeScript definitions
│   ├── database.types.ts  # Database models
│   └── api.types.ts       # API request/response types
├── api/                # API client & services
├── contexts/           # React contexts (auth, etc.)
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── utils/              # Helper functions
└── main.tsx           # App entry point
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 API Documentation

The backend provides comprehensive REST endpoints:

### Authentication
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user profile

### Products
- `GET /api/products/` - List products with filtering
- `GET /api/products/search` - Full-text search
- `GET /api/products/{id}` - Get product details

### Orders
- `POST /api/orders/` - Create order
- `GET /api/orders/user/{userId}` - Get user orders

### Reviews & Favorites
- `POST /api/reviews/` - Create product review
- `POST /api/favorites/{productId}` - Add to favorites

### Admin Features
- `POST /api/products/` - Create product
- `GET /api/analytics/dashboard/stats` - Dashboard analytics

See the full API documentation for complete endpoint details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary to Hometown Liquor.

## 📞 Support

For questions or issues, contact the development team.

---

Built with ❤️ for Hometown Liquor customers
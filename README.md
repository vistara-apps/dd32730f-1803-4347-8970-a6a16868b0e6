# Web3 Game Hub

A comprehensive Next.js Base Mini App for discovering, rating, and mastering Web3 games. Built with OnchainKit, Tailwind CSS, and TypeScript.

## Features

- 🎮 **Game Discovery**: Browse and filter Web3 games by genre, blockchain, difficulty, and rating
- ⭐ **Rating System**: Rate and review games with detailed feedback
- 📊 **Progress Tracking**: Track your onboarding progress across different games
- 📚 **Setup Guides**: Comprehensive guides for wallet setup and game onboarding
- 🔍 **Advanced Filtering**: Sort by rating, popularity, newest, or alphabetical order
- 💾 **Save Games**: Bookmark your favorite games for later
- 📱 **Mobile Optimized**: Responsive design optimized for mobile devices
- 🌐 **Multi-Chain Support**: Support for Ethereum, Polygon, Base, Arbitrum, Optimism, Solana, and BNB Chain

## Tech Stack

- **Framework**: Next.js 15.5.2 with App Router
- **Styling**: Tailwind CSS with custom design system
- **Blockchain**: OnchainKit for Base integration
- **TypeScript**: Full type safety
- **Icons**: Lucide React
- **State Management**: React hooks and context

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd web3-game-hub
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` and add your OnchainKit API key:
```
NEXT_PUBLIC_ONCHAINKIT_API_KEY=your_api_key_here
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Main homepage
│   ├── providers.tsx      # OnchainKit providers
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── GameCard.tsx       # Game display card
│   ├── GameDetail.tsx     # Game detail modal
│   ├── GameFilters.tsx    # Filtering interface
│   ├── GuideCard.tsx      # Setup guide card
│   ├── RatingStars.tsx    # Star rating component
│   ├── StepListItem.tsx   # Onboarding step item
│   └── UserProgress.tsx   # Progress tracking
├── lib/                   # Utilities and data
│   ├── data.ts           # Mock data for games, ratings, etc.
│   └── types.ts          # TypeScript type definitions
├── tailwind.config.js     # Tailwind CSS configuration
└── next.config.mjs       # Next.js configuration
```

## Key Components

### GameCard
Displays game information with ratings, difficulty, blockchain, and progress tracking.

### GameFilters
Advanced filtering system with genre, blockchain, difficulty, rating, and sorting options.

### UserProgress
Tracks and displays user progress across different games with completion percentages.

### GameDetail
Modal view showing detailed game information, ratings, and onboarding steps.

## Data Structure

The app uses TypeScript interfaces for type safety:

- `Game`: Core game information
- `Rating`: User reviews and ratings
- `OnboardingStep`: Step-by-step game setup
- `UserProgress`: Progress tracking data
- `Guide`: Setup and tutorial guides

## Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  primary: 'hsl(210, 95%, 50%)',    // Blue
  accent: 'hsl(140, 70%, 50%)',     // Green
  bg: 'hsl(210, 18%, 5%)',          // Dark background
  surface: 'hsl(210, 18%, 12%)',    // Card background
  text: 'hsl(210, 18%, 90%)',       // Text color
}
```

### Adding New Games
Edit `lib/data.ts` to add new games to the `mockGames` array.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and build
5. Submit a pull request

## License

This project is licensed under the MIT License.

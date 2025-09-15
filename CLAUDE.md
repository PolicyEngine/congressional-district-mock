# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
```bash
npm install    # Install dependencies
npm start      # Start development server on http://localhost:3000
npm test       # Run tests in watch mode
npm run build  # Create production build
```

### Testing
```bash
npm test -- --coverage              # Run tests with coverage
npm test ComponentName             # Run tests for specific component
npm test -- --watchAll=false       # Run tests once without watch mode
```

## Architecture Overview

This is a React TypeScript application that demonstrates PolicyEngine's Congressional district impact analysis capabilities. It's designed for booth demonstrations and uses entirely mock data.

### Key Components

1. **Page Flow**: The app has three distinct pages managed by state in `App.tsx`:
   - `setup`: Congressional district selection page
   - `bills`: List of active federal legislation
   - `impact`: Detailed impact analysis for a selected bill

2. **Demo Mode**: Two types of "demo" functionality:
   - **Mock Data Indicators**: Always-visible warnings that data is simulated (banner + watermark)
   - **Auto Demo Mode**: Autonomous navigation with simulated cursor for unattended booth displays

3. **District Variations**: The `src/utils/districtVariations.ts` module creates realistic differences between national and district-level impacts based on:
   - Urban/suburban/rural classification
   - Wealth index
   - Senior population density
   - Family composition

### Data Flow

1. **State Selection** → Loads state-specific Congressional district counts and senators from `src/data/congressionalDistricts.ts`
2. **District Selection** → Generates district-specific demographic multipliers
3. **Bill Selection** → Shows impact analysis with district-specific variations applied to national data
4. **National/District Toggle** → Switches between nationwide and district-specific impact calculations

### Design System

Uses PolicyEngine's colors and fonts defined in `src/styles/colors.ts`:
- Primary: Blue (#2C6496) - emphasized for federal/Congressional theme
- Secondary: Teal (#39C6C0)
- Typography: Roboto (all weights)

### Mock Data Structure

Federal bills are generated consistently per district using a hash-based algorithm in `federalBills.ts`. Impact data is adjusted based on district characteristics to show realistic variations while maintaining believable relationships between metrics.

## Congressional Data

- **435 House Districts**: All states have accurate district counts based on the 2020 census
- **100 Senators**: Each state's current senators are included with party affiliations
- **Federal Bills**: Realistic examples of Congressional legislation (tax reform, healthcare, infrastructure, etc.)

## Special Considerations

1. **TypeScript Strictness**: The project uses strict TypeScript settings. When adding new code, ensure proper typing.

2. **Responsive Charts**: All Recharts components must be wrapped in `ResponsiveContainer` for proper sizing.

3. **Demo Mode Dropdowns**: When in auto demo mode, dropdowns show visual expansions using the `DemoDropdown` component before selections are made.

4. **At-Large Districts**: States with single Congressional districts (AK, DE, MT, ND, SD, VT, WY) display as "At-Large" districts.

## PolicyEngine Integration Notes

This is a standalone mock application designed to demonstrate potential PolicyEngine features for Congressional analysis. It uses PolicyEngine's design system but doesn't connect to actual PolicyEngine APIs. The realistic federal bills (Tax Cuts Enhancement Act, Medicare Expansion Act, etc.) are examples of federal legislation that PolicyEngine could analyze.
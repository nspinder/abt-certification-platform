# ABT Certification Learning Platform

A Duolingo-style web platform for preparing for ABT1 and ABT2 certifications in the Brazilian financial system.

## Features

- 📚 **Interactive Lessons**: Learn about the Brazilian Financial System, Foreign Exchange Operations, and Anti-Money Laundering Regulations
- 🎯 **Practice Quizzes**: Answer certification-style questions with immediate feedback
- 📊 **Progress Tracking**: Monitor your learning progress across modules
- 🔄 **Spaced Repetition**: Review difficult concepts regularly for better retention
- 🎮 **Gamification**: Earn points, build streaks, and track achievements

## Course Modules

1. Sistema Financeiro Nacional (Brazilian Financial System)
2. Sigilo Bancário (Bank Secrecy)
3. Crimes contra o SFN (Crimes Against Financial System)
4. Operações de Câmbio (Foreign Exchange Operations)
5. Legislação Cambial (Exchange Legislation)
6. Normas Cambiais (Exchange Norms)
7. Correspondentes Cambiais (Exchange Correspondents)
8. Prevenção à Lavagem de Dinheiro (Money Laundering Prevention)

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, TypeScript
- **Database**: SQLite3 with better-sqlite3
- **Styling**: Tailwind CSS

## Installation

### Prerequisites

- Node.js 18+ or higher
- npm or yarn

### Setup

1. **Clone and install dependencies**:
```bash
cd abt-certification-platform
npm install
```

2. **Initialize the database**:
```bash
npm run db:init
```

This creates the SQLite database and populates it with course modules.

## Running the Application

### Development Mode

```bash
npm run dev
```

The application will start at `http://localhost:3000`

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
abt-certification-platform/
├── src/
│   ├── app/
│   │   ├── api/              # API routes
│   │   │   └── auth/         # Authentication endpoints
│   │   ├── learn/            # Learning interface
│   │   ├── page.tsx          # Home page
│   │   ├── layout.tsx        # Root layout
│   │   └── globals.css       # Global styles
│   └── lib/
│       ├── db.ts             # Database utilities
│       └── lessonContent.ts  # Course content and quiz questions
├── db/                        # SQLite database (created on init)
├── scripts/
│   └── initDb.js             # Database initialization script
└── public/                    # Static assets
```

## Database Schema

### Users Table
- `id`: Unique identifier
- `email`: User email (unique)
- `name`: User name
- `createdAt`: Account creation date

### Modules Table
- `id`: Unique identifier
- `title`: Module title
- `description`: Module description
- `order_index`: Display order

### Lessons Table
- `id`: Unique identifier
- `moduleId`: Foreign key to modules
- `title`: Lesson title
- `content`: Lesson content (markdown format)
- `difficulty`: Lesson difficulty level
- `order_index`: Display order

### Questions Table
- `id`: Unique identifier
- `lessonId`: Foreign key to lessons
- `question`: Question text
- `options`: JSON array of options
- `correctAnswer`: Index of correct answer
- `explanation`: Explanation for the answer
- `difficulty`: Question difficulty

### User Progress Table
- `userId`: Foreign key to users
- `lessonId`: Foreign key to lessons
- `completed`: Boolean completion status
- `lastReviewDate`: Last review date
- `reviewCount`: Number of reviews
- `nextReviewDate`: Spaced repetition next date

### Quiz Attempts Table
- `userId`: Foreign key to users
- `questionId`: Foreign key to questions
- `answered`: Index of user's answer
- `isCorrect`: Boolean correctness
- `createdAt`: Attempt date

## Features Explained

### 1. Interactive Lessons
- Each module contains multiple lessons
- Lessons include structured content with headings, lists, and explanations
- Difficulty levels: beginner, intermediate, advanced
- Content is based on official ABT certification materials

### 2. Practice Quizzes
- Multiple-choice format matching certification exam style
- Immediate feedback with explanations
- Track correct and incorrect answers
- Questions organized by module

### 3. Progress Tracking
- Visual progress bars for each module
- Completion tracking per lesson
- Quiz scores and statistics
- Streak tracking for daily practice

### 4. Spaced Repetition
- Automatically scheduled review dates
- Increases review interval with correct answers
- Decreases interval for missed questions
- Optimized learning retention

## User Authentication

The platform uses a simple email-based authentication system:
- Sign up with email and name
- Sign in with email
- Data stored locally in SQLite database
- User sessions managed with localStorage in browser

## Content Updates

To add new lessons or questions:

1. **Edit lesson content** in `src/lib/lessonContent.ts`:
   - Add lesson objects to the appropriate module
   - Follow the existing structure with title, content, and difficulty

2. **Add quiz questions** in `src/lib/lessonContent.ts`:
   - Add objects to `quizQuestions` array
   - Include question, options, correctAnswer index, and explanation

3. **Restart the development server** for changes to take effect

## Roadmap

- [ ] User statistics and analytics dashboard
- [ ] Improved spaced repetition algorithm
- [ ] Certification progress indicator
- [ ] Flashcard mode for quick reviews
- [ ] Mobile app version
- [ ] Keyboard shortcuts for quiz mode
- [ ] Export progress report
- [ ] Study groups and collaboration features
- [ ] Performance predictions

## Contributing

To contribute to this project:

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request with a clear description

## License

This project is for educational purposes related to ABT certification preparation.

## Support

For issues or questions:
1. Check existing issues on GitHub
2. Create a new issue with detailed description
3. Include steps to reproduce for bugs

## Acknowledgments

This platform is built using the official ABT certification study materials and regulations from:
- Banco Central do Brasil (Central Bank of Brazil)
- ABRACAM (Associação Brasileira de Agências de Câmbio)
- Brazilian Financial System Regulations (Lei 14.286/2021, etc.)

---

**Version**: 0.1.0  
**Last Updated**: 2026-09-08

# Quick Start Guide

Get the ABT Certification Platform running in 5 minutes.

## Installation (1 min)

```bash
# Navigate to the project directory
cd abt-certification-platform

# Install dependencies
npm install
```

## Initialize Database (30 seconds)

```bash
# Create and populate SQLite database
npm run db:init
```

You'll see: `Database initialized successfully!`

## Start Development Server (1 min)

```bash
npm run dev
```

The application will start at **http://localhost:3000**

## Access the Platform (1 min)

1. Open your browser to `http://localhost:3000`
2. Click **Create Account** or **Sign In**
3. Enter email and name (for new account)
4. Click **Start Learning** on the home page
5. Select any module to begin

## First Learning Session

1. **Select a Module**: Click any course module from the home page
2. **Read Lesson**: Review the structured content
3. **Navigate**: Use Previous/Next buttons or sidebar
4. **Take Quiz**: After completing all lessons in a module, take the quiz
5. **View Results**: See your score and explanation for each answer

## Features to Explore

### 📚 Learning
- **8 Complete Modules**: Each with 4-15 lessons
- **Difficulty Levels**: Beginner, Intermediate, Advanced
- **Real Content**: Based on official ABT certification materials

### 🎯 Practice
- **Module Quizzes**: Test knowledge after each module
- **Certification-Style Questions**: Format matches real exam
- **Instant Feedback**: See correct answers with explanations

### 📊 Progress
- **Progress Bars**: Visual learning progression
- **Score Tracking**: See quiz performance
- **Lesson Completion**: Know what you've learned

## File Structure at a Glance

```
abt-certification-platform/
├── src/
│   ├── app/
│   │   ├── api/auth/          ← Login/signup API
│   │   ├── learn/page.tsx     ← Learning interface
│   │   └── page.tsx           ← Home page
│   └── lib/
│       └── lessonContent.ts   ← All course content
├── db/abt.db                  ← SQLite database (created by db:init)
└── package.json               ← Dependencies
```

## Commands Reference

| Command | Purpose |
|---------|---------|
| `npm install` | Install dependencies |
| `npm run db:init` | Initialize database |
| `npm run dev` | Start dev server (localhost:3000) |
| `npm run build` | Build for production |
| `npm start` | Start production server |

## Troubleshooting

### Port 3000 already in use?
```bash
# Use different port
npm run dev -- -p 3001
```

### Database not working?
```bash
# Reinitialize database
rm -rf db/abt.db*
npm run db:init
```

### Changes not showing?
1. Stop dev server (Ctrl+C)
2. Run `npm run dev` again
3. Refresh browser (Ctrl+Shift+R)

## Next Steps

1. **Explore all 8 modules** - Each covers a different topic
2. **Complete practice quizzes** - Get your scores
3. **Review explanations** - Understand why answers are correct
4. **Track progress** - See learning advancement

## Module Overview

| # | Module | Focus |
|---|--------|-------|
| 1 | Sistema Financeiro Nacional | Brazilian financial system structure |
| 2 | Sigilo Bancário | Bank secrecy laws and exceptions |
| 3 | Crimes contra o SFN | Financial crimes and penalties |
| 4 | Operações de Câmbio | Foreign exchange fundamentals |
| 5 | Legislação Cambial | Exchange laws and regulations |
| 6 | Normas Cambiais | Technical exchange norms |
| 7 | Correspondentes Cambiais | Correspondent operations |
| 8 | PLD/FTP | Money laundering prevention |

## Estimated Study Time

- **Per Module**: 30-45 minutes
- **Total Course**: 4-6 hours
- **With Review**: 8-10 hours

## Tips for Success

✅ **Do's**
- Study one module at a time
- Read lesson content carefully
- Take quizzes after each module
- Review explanation of wrong answers
- Practice regularly with spaced repetition

❌ **Don'ts**
- Rush through lessons
- Skip reading content before quizzes
- Ignore explanations for incorrect answers
- Study everything at once

## Questions?

1. Check README.md for detailed documentation
2. Review lesson explanations in quizzes
3. Re-read lesson content before retaking quizzes

---

**Happy Learning!** 🎓

You're ready to prepare for your ABT certification. Start with Module 1: Sistema Financeiro Nacional.

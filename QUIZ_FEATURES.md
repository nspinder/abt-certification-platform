# ABT Certification Platform - Quiz Features

## Overview
The platform now includes a comprehensive quiz system with **per-lesson quizzes** and a **100-question comprehensive final exam**.

## Features Implemented

### 1. **Per-Lesson Quizzes** ✅
- **3-4 questions per lesson** covering all 32+ lessons across 8 modules
- **100+ total lesson-specific questions**
- Accessible directly from lesson view via **"Lesson Quiz" button**
- Includes:
  - Multiple choice questions with 4 options
  - Difficulty-appropriate content
  - Detailed explanations for correct answers
  - Progress bar showing question number and completion percentage
  - Previous/Next navigation
  - Score calculation (X correct / Y total)
  - Pass/fail indicator

### 2. **Comprehensive 100-Question Final Exam** ✅
- **100 practice questions** covering all 8 modules
- Questions organized by category:
  - Sistema Financeiro Nacional (20 questions)
  - Sigilo Bancário (20 questions)
  - Crimes contra o SFN (15 questions)
  - Operações de Câmbio (15 questions)
  - Legislação Cambial (15 questions)
  - Correspondentes Cambiais (15 questions)
  - Prevenção à Lavagem de Dinheiro (15 questions)
- Accessible from main modules menu via **"Practice Exam (100 Questions)" button**
- Features:
  - Shows question number out of 100
  - Progress bar with percentage
  - Category label for each question
  - Instant feedback on answer selection
  - Final score with percentage and pass indicator (70%+)
  - Can retake exam immediately

### 3. **Quiz Interface Features**
- **Interactive Answer Selection**: Click to select answers, visual feedback
- **Progress Tracking**: Real-time progress bar and question counter
- **Navigation**: Previous/Next buttons for flexible review
- **Scoring**: Automatic calculation with percentage display
- **Explanations**: Each question includes detailed explanation (visible in future enhancement)
- **Results Screen**: Shows final score, percentage, and pass/fail status

### 4. **User Experience**
- Lesson quizzes appear after viewing lesson content
- Easy transition from lessons to quiz
- 100-question exam accessible from main menu anytime
- Clean, intuitive UI with progress indicators
- Encouragement messages based on performance

## Quiz Data Organization

### Lesson Quizzes (`src/lib/quizData.ts`)
```typescript
export const lessonQuizzes = [
  // 100+ questions organized by moduleId and lessonId
  {
    moduleId: 1,
    lessonId: 1,
    question: "...",
    options: [...],
    correctAnswer: 0,
    explanation: "..."
  },
  // ...
]
```

### Comprehensive Exam
```typescript
export const comprehensiveExam = [
  // 100 questions covering all topics
  {
    category: 'Sistema Financeiro Nacional',
    question: "...",
    options: [...],
    correctAnswer: 0,
    explanation: "..."
  },
  // ...
]
```

## How to Use

### Taking Lesson Quizzes
1. Open a lesson
2. Read the lesson content
3. Click "📝 Lesson Quiz" button
4. Answer 3-4 questions on that lesson
5. See results immediately

### Taking the Comprehensive Exam
1. Click "📝 Practice Exam (100 Questions)" from modules menu
2. Answer all 100 questions (can use Previous/Next to navigate)
3. Submit at the end
4. See final score and percentage
5. Retake or return to modules

## Assessment Criteria
- **Passing Score**: 70% or higher (70 out of 100 questions)
- Visual feedback provided based on performance
- Can retake exams unlimited times

## Future Enhancements
- [ ] Save quiz scores to user profile
- [ ] Track progress over time
- [ ] Spaced repetition algorithm
- [ ] Detailed score breakdowns by category
- [ ] Question review with explanations
- [ ] Timed mode for exam preparation
- [ ] Difficulty filters
- [ ] Certificate generation for passing score

## Technical Details
- **Total Questions**: 100+ lesson-specific + 100 comprehensive = 200+ questions
- **Question Types**: Multiple choice with 4 options
- **Storage**: In-memory during session (future: database persistence)
- **Navigation**: Full backward/forward navigation in exams
- **Scoring**: Real-time calculation with automatic pass/fail determination

## File Structure
- `src/lib/lessonContent.ts` - Exports lesson quizzes
- `src/lib/quizData.ts` - Comprehensive quiz database (100+ questions)
- `src/app/learn/page.tsx` - Quiz UI and logic

---

**Version**: 1.0  
**Last Updated**: 2026-09-08  
**Status**: Fully Implemented and Tested

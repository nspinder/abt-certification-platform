const Database = require('better-sqlite3');
const path = require('path');

const dbPath = path.join(__dirname, '../db', 'abt.db');
const db = new Database(dbPath);

// Create tables
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS modules (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT,
    order_index INTEGER,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS lessons (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    moduleId INTEGER NOT NULL,
    title TEXT NOT NULL,
    content TEXT,
    order_index INTEGER,
    difficulty TEXT DEFAULT 'intermediate',
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (moduleId) REFERENCES modules(id)
  );

  CREATE TABLE IF NOT EXISTS questions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    lessonId INTEGER NOT NULL,
    question TEXT NOT NULL,
    options TEXT NOT NULL,
    correctAnswer INTEGER,
    explanation TEXT,
    difficulty TEXT DEFAULT 'intermediate',
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (lessonId) REFERENCES lessons(id)
  );

  CREATE TABLE IF NOT EXISTS user_progress (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    userId INTEGER NOT NULL,
    lessonId INTEGER NOT NULL,
    completed BOOLEAN DEFAULT 0,
    lastReviewDate DATETIME,
    reviewCount INTEGER DEFAULT 0,
    nextReviewDate DATETIME,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (userId) REFERENCES users(id),
    FOREIGN KEY (lessonId) REFERENCES lessons(id),
    UNIQUE(userId, lessonId)
  );

  CREATE TABLE IF NOT EXISTS quiz_attempts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    userId INTEGER NOT NULL,
    questionId INTEGER NOT NULL,
    answered INTEGER,
    isCorrect BOOLEAN,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (userId) REFERENCES users(id),
    FOREIGN KEY (questionId) REFERENCES questions(id)
  );
`);

// Insert modules
const modules = [
  {
    title: 'Sistema Financeiro Nacional',
    description: 'Noções sobre organização do Sistema Financeiro Nacional',
    order_index: 1
  },
  {
    title: 'Sigilo Bancário',
    description: 'Lei Complementar nº 105 de 2001',
    order_index: 2
  },
  {
    title: 'Crimes contra o SFN',
    description: 'Lei 7.492 e crimes contra o sistema financeiro',
    order_index: 3
  },
  {
    title: 'Operações de Câmbio',
    description: 'Conceitos e procedimentos em operações cambiais',
    order_index: 4
  },
  {
    title: 'Legislação Cambial',
    description: 'Lei 14.286 e regulamentações',
    order_index: 5
  },
  {
    title: 'Normas Cambiais',
    description: 'Resoluções CMN e BCB',
    order_index: 6
  },
  {
    title: 'Correspondentes Cambiais',
    description: 'Contratação e procedimentos',
    order_index: 7
  },
  {
    title: 'Prevenção à Lavagem de Dinheiro',
    description: 'PLD/FTP - Lei 9.613 e regulamentações',
    order_index: 8
  }
];

const insertModule = db.prepare(`
  INSERT INTO modules (title, description, order_index)
  VALUES (?, ?, ?)
`);

modules.forEach(m => {
  insertModule.run(m.title, m.description, m.order_index);
});

console.log('Database initialized successfully!');
console.log(`Database location: ${dbPath}`);

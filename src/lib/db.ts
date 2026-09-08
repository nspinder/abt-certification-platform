import fs from 'fs'
import path from 'path'

const dataDir = path.join(process.cwd(), 'data')

interface User {
  id: string
  email: string
  name: string
  createdAt: string
}

interface Module {
  id: number
  title: string
  description: string
  order_index: number
}

let usersData: User[] = []

function ensureDataDir() {
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true })
  }
}

function loadUsers(): User[] {
  ensureDataDir()
  const filePath = path.join(dataDir, 'users.json')
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf-8')
    return JSON.parse(content)
  }
  return []
}

function saveUsers(users: User[]) {
  ensureDataDir()
  const filePath = path.join(dataDir, 'users.json')
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2))
}

export function initializeDatabase() {
  usersData = loadUsers()
  console.log('Database initialized successfully!')
  console.log(`Loaded ${usersData.length} users`)
}

export function createUser(email: string, name: string): User {
  const user: User = {
    id: Date.now().toString(),
    email,
    name,
    createdAt: new Date().toISOString()
  }

  // Check if email already exists
  if (usersData.find(u => u.email === email)) {
    throw new Error('Email already exists')
  }

  usersData.push(user)
  saveUsers(usersData)
  return user
}

export function getUserByEmail(email: string): User | undefined {
  return usersData.find(u => u.email === email)
}

export function getModules(): Module[] {
  return [
    { id: 1, title: 'Sistema Financeiro Nacional', description: 'Noções sobre organização do Sistema Financeiro Nacional', order_index: 1 },
    { id: 2, title: 'Sigilo Bancário', description: 'Lei Complementar nº 105 de 2001', order_index: 2 },
    { id: 3, title: 'Crimes contra o SFN', description: 'Lei 7.492 e crimes contra o sistema financeiro', order_index: 3 },
    { id: 4, title: 'Operações de Câmbio', description: 'Conceitos e procedimentos em operações cambiais', order_index: 4 },
    { id: 5, title: 'Legislação Cambial', description: 'Lei 14.286 e regulamentações', order_index: 5 },
    { id: 6, title: 'Normas Cambiais', description: 'Resoluções CMN e BCB', order_index: 6 },
    { id: 7, title: 'Correspondentes Cambiais', description: 'Contratação e procedimentos', order_index: 7 },
    { id: 8, title: 'Prevenção à Lavagem de Dinheiro', description: 'PLD/FTP - Lei 9.613 e regulamentações', order_index: 8 }
  ]
}

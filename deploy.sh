#!/bin/bash

# ABT Certification Platform - Cloudflare Deployment Script
# This script automates the deployment process

set -e

echo "🚀 ABT Certification Platform - Cloudflare Deployment"
echo "=================================================="
echo ""

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Step 1: Check prerequisites
echo -e "${BLUE}Step 1: Checking prerequisites...${NC}"

if ! command -v node &> /dev/null; then
    echo "❌ Node.js not installed. Please install Node.js 16+"
    exit 1
fi

if ! command -v npm &> /dev/null; then
    echo "❌ npm not installed. Please install npm"
    exit 1
fi

if ! command -v git &> /dev/null; then
    echo "❌ Git not installed. Please install Git"
    exit 1
fi

echo -e "${GREEN}✓ Prerequisites met${NC}"
echo ""

# Step 2: Check if we're in the right directory
echo -e "${BLUE}Step 2: Verifying project structure...${NC}"

if [ ! -f "package.json" ]; then
    echo "❌ package.json not found. Are you in the project directory?"
    exit 1
fi

echo -e "${GREEN}✓ Project structure verified${NC}"
echo ""

# Step 3: Create/update .gitignore
echo -e "${BLUE}Step 3: Creating .gitignore...${NC}"

cat > .gitignore << 'EOF'
node_modules/
.next/
.env.local
.env
dist/
build/
.vercel
data/
*.log
.DS_Store
EOF

echo -e "${GREEN}✓ .gitignore created${NC}"
echo ""

# Step 4: Install dependencies
echo -e "${BLUE}Step 4: Installing dependencies...${NC}"
npm install
echo -e "${GREEN}✓ Dependencies installed${NC}"
echo ""

# Step 5: Build project
echo -e "${BLUE}Step 5: Building project...${NC}"
npm run build
echo -e "${GREEN}✓ Project built successfully${NC}"
echo ""

# Step 6: Initialize Git if needed
echo -e "${BLUE}Step 6: Setting up Git...${NC}"

if [ ! -d ".git" ]; then
    echo "Initializing Git repository..."
    git init
    git add .
    git commit -m "Initial ABT platform commit"
    echo -e "${GREEN}✓ Git repository initialized${NC}"
else
    echo "Git repository already exists"
    echo -e "${GREEN}✓ Git repository verified${NC}"
fi
echo ""

# Step 7: Create wrangler.toml
echo -e "${BLUE}Step 7: Creating wrangler.toml...${NC}"

cat > wrangler.toml << 'EOF'
name = "abt-certification-platform"
type = "javascript"
compatibility_date = "2024-01-01"

[build]
command = "npm run build"
cwd = "./"

[build.upload]
format = "modules"
EOF

echo -e "${GREEN}✓ wrangler.toml created${NC}"
echo ""

# Step 8: Display next steps
echo -e "${YELLOW}=================================================="
echo "✅ Local Setup Complete!"
echo "=================================================="
echo ""
echo "📋 Next Steps (Manual in Cloudflare Dashboard):"
echo ""
echo "1️⃣  Push your code to GitHub:"
echo "   git remote add origin https://github.com/YOUR_USERNAME/abt-certification-platform.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "2️⃣  Go to Cloudflare Pages:"
echo "   Visit: https://dash.cloudflare.com"
echo ""
echo "3️⃣  Create new Pages project:"
echo "   - Click 'Pages' in sidebar"
echo "   - Click 'Create a project'"
echo "   - Select 'Connect to Git'"
echo "   - Authorize GitHub"
echo "   - Select 'abt-certification-platform' repository"
echo ""
echo "4️⃣  Configure build settings:"
echo "   - Framework: Next.js"
echo "   - Build command: npm run build"
echo "   - Build output directory: .next"
echo "   - Click 'Save and Deploy'"
echo ""
echo "5️⃣  Wait for deployment (usually 2-5 minutes)"
echo ""
echo "6️⃣  Your site will be live at:"
echo "   https://abt-certification-platform.pages.dev"
echo ""
echo -e "${GREEN}Happy deploying! 🎉${NC}"
echo ""

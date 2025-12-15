#!/bin/sh
# TERMUX_UPLOAD.sh
# Run on your Android Termux environment to push this project to GitHub and deploy to Vercel.
# Usage: chmod +x TERMUX_UPLOAD.sh && ./TERMUX_UPLOAD.sh <github-repo-name>

REPO_NAME="$1"
if [ -z "$REPO_NAME" ]; then
  echo "Usage: $0 <github-repo-name>"
  exit 1
fi

# Install required packages
pkg update -y && pkg install -y git nodejs unzip curl

# Install GitHub CLI (if available) and Vercel CLI via npm
if ! command -v gh >/dev/null 2>&1; then
  echo "gh (GitHub CLI) not found. You can install it from Termux using 'pkg install gh' if available, or use the web to create a repo and then run this script with the remote already set."
fi

if ! command -v vercel >/dev/null 2>&1; then
  echo "Installing Vercel CLI..."
  npm install -g vercel
fi

# Configure git if user hasn't
git config --global user.name "Your Name"
git config --global user.email "you@example.com"

# Initialize/prepare repo
# If you already cloned the project, just run from the project root.
if [ ! -d ".git" ]; then
  git init
fi

git add -A
git commit -m "Prepare for upload" || true

# Create GitHub repository with gh (if available)
if command -v gh >/dev/null 2>&1; then
  gh repo create "$REPO_NAME" --public --source=. --remote=origin --push
else
  echo "Please create a GitHub repository named $REPO_NAME and add it as remote 'origin'."
  echo "For example: git remote add origin git@github.com:YOUR_USERNAME/$REPO_NAME.git && git push -u origin main"
fi

# Login to vercel (interactive)
vercel login || true

# Deploy to vercel
vercel --prod

echo "Done. If any step failed, check the output and re-run the commands manually."

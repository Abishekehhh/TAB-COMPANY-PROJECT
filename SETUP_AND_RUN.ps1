#!/usr/bin/env pwsh
# TAB Technical Services - Project Setup and Run Script
# This script will install dependencies and start the development server

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "TAB Technical Services - Setup & Run" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if Node.js is installed
Try {
    $nodeVersion = node --version 2>$null
    Write-Host "[OK] Node.js detected: $nodeVersion" -ForegroundColor Green
} Catch {
    Write-Host "[ERROR] Node.js is not installed!" -ForegroundColor Red
    Write-Host ""
    Write-Host "Please download and install Node.js from: https://nodejs.org/" -ForegroundColor Yellow
    Write-Host "(Recommended: LTS version - includes npm)" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "After installation, run this script again." -ForegroundColor Yellow
    Read-Host "Press Enter to exit"
    exit 1
}

# Check npm
Try {
    $npmVersion = npm --version 2>$null
    Write-Host "[OK] npm detected: $npmVersion" -ForegroundColor Green
} Catch {
    Write-Host "[ERROR] npm not found" -ForegroundColor Red
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host ""
Write-Host "[*] Removing conflicting package manager files..." -ForegroundColor Yellow

if (Test-Path "bun.lockb") {
    Remove-Item "bun.lockb" -Force -ErrorAction SilentlyContinue
    Write-Host "[OK] Removed bun.lockb" -ForegroundColor Green
}

Write-Host ""
Write-Host "[*] Installing dependencies (this may take a few minutes)..." -ForegroundColor Yellow

npm install

if ($LASTEXITCODE -ne 0) {
    Write-Host "[ERROR] Failed to install dependencies" -ForegroundColor Red
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host ""
Write-Host "[OK] Dependencies installed successfully" -ForegroundColor Green
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Setup Complete! Starting dev server..." -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "The application will be available at:" -ForegroundColor Yellow
Write-Host "  http://localhost:8080" -ForegroundColor Cyan
Write-Host ""
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Yellow
Write-Host ""

npm run dev

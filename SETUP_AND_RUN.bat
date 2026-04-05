@echo off
REM TAB Technical Services - Project Setup and Run Script
REM This script will install dependencies and start the development server

cls
echo.
echo ========================================
echo TAB Technical Services - Setup Script
echo ========================================
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo.
    echo ERROR: Node.js is not installed!
    echo.
    echo Please download and install Node.js from: https://nodejs.org/
    echo (Recommended: LTS version)
    echo.
    echo After installation, restart this script.
    echo.
    pause
    exit /b 1
)

echo [OK] Node.js detected
node --version

echo.
echo [*] Checking npm installation...
npm --version >nul 2>&1
if errorlevel 1 (
    echo [ERROR] npm not found
    pause
    exit /b 1
)

echo [OK] npm detected
npm --version

echo.
echo [*] Removing conflicting package manager files...
if exist "bun.lockb" (
    del /Q "bun.lockb" >nul 2>&1
    echo [OK] Removed bun.lockb
)

echo.
echo [*] Installing dependencies (this may take a few minutes)...
call npm install

if errorlevel 1 (
    echo.
    echo [ERROR] Failed to install dependencies
    pause
    exit /b 1
)

echo.
echo [OK] Dependencies installed successfully
echo.
echo ========================================
echo Setup Complete!
echo ========================================
echo.
echo Starting development server...
echo Access the application at: http://localhost:8080
echo Press Ctrl+C to stop the server
echo.

call npm run dev

pause

@echo off
echo ========================================================
echo   Launching Suja Karthick Portfolio (Creative Edition)
echo ========================================================
echo.
cd /d "%~dp0"
start http://localhost:3000
npm run dev

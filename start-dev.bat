@echo off
cd /d "%~dp0"
echo === Aktualisiere Abhaengigkeiten ===
call npm install
echo.
echo === Starte lokalen Dev-Server (http://localhost:4321) ===
echo Zum Beenden: Fenster schliessen oder Strg+C
call npm run dev
pause

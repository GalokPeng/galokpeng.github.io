@echo off
cd /d "%~dp0"
node tools\cinema.mjs --open
if errorlevel 1 pause

@echo off
rem ------------------------------------------------------------
rem Deploy FounderKit to Loveable (Windows batch script)
rem ------------------------------------------------------------

rem Allow PowerShell scripts for this session (required for npm on Windows)
powershell -Command "Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass -Force"

rem ---------- Install dependencies (frontend) ----------
cd client
npm install

rem ---------- Build the Vite front‑end ----------
npm run build

rem ---------- Deploy to Loveable ----------
rem Make sure the Loveable CLI is installed and on your PATH.
rem You can install it (if you have a package) with:
rem   npm i -g @lovable/cli   (or follow Loveable documentation)
loveable deploy

rem ---------- Optional: Deploy backend to Cloud Run ----------
rem If you want the backend on Cloud Run, uncomment the lines below:
rem cd ..\server
rem gcloud run deploy founderkit-api --source . --region us-central1 --allow-unauthenticated --set-env-vars PORT=3001,GEMINI_API_KEY=%GEMINI_API_KEY%

rem ------------------------------------------------------------
rem End of script

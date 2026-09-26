import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import posthog from 'posthog-js'
import App from './App'
import './App.css'

posthog.init(import.meta.env.VITE_POSTHOG_PROJECT_TOKEN, {
  api_host: import.meta.env.VITE_POSTHOG_HOST,
  autocapture: false,
  capture_pageview: false,
  capture_pageleave: false,
  disable_session_recording: true,
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {import.meta.env.DEV && (
      <div className="development-build-bar">🧪 EnSound UP · Paid-MVP Consonant-1A</div>
    )}
    <App />
  </StrictMode>,
)

import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.tsx'
import { AuthProvider } from './hooks/useAuth.tsx'
import { Toaster } from 'sonner'

createRoot(document.getElementById('root')!).render(
  <AuthProvider>
    <App />
    <Toaster position="top-right" richColors />
  </AuthProvider>,
)
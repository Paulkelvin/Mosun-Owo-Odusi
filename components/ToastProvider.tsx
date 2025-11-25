'use client'

import { Toaster } from 'sonner'

export default function ToastProvider() {
  return (
    <Toaster 
      position="top-right"
      toastOptions={{
        style: {
          background: 'white',
          color: '#0f172a',
          border: '1px solid #e2e8f0',
        },
        className: 'toast-custom',
        duration: 4000,
      }}
      richColors
    />
  )
}

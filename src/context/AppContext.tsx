import React, { createContext, useContext, useState, useEffect } from 'react'

interface AppContextType {
  emergencyMode: boolean
  setEmergencyMode: (val: boolean) => void
  toggleEmergencyMode: () => void
  largeText: boolean
  setLargeText: (val: boolean) => void
  readAloud: boolean
  setReadAloud: (val: boolean) => void
  emergencyNumbersOpen: boolean
  setEmergencyNumbersOpen: (val: boolean) => void
  identificationOpen: boolean
  setIdentificationOpen: (val: boolean) => void
  pwaInstallPrompt: any
  installPwa: () => void
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [emergencyMode, setEmergencyMode] = useState<boolean>(() => {
    return localStorage.getItem('sos_emergency_mode') === 'true'
  })

  const [largeText, setLargeText] = useState<boolean>(() => {
    return localStorage.getItem('sos_large_text') === 'true'
  })

  const [readAloud, setReadAloud] = useState<boolean>(() => {
    return localStorage.getItem('sos_read_aloud') !== 'false'
  })

  const [emergencyNumbersOpen, setEmergencyNumbersOpen] = useState<boolean>(false)
  const [identificationOpen, setIdentificationOpen] = useState<boolean>(false)
  const [pwaInstallPrompt, setPwaInstallPrompt] = useState<any>(null)

  useEffect(() => {
    localStorage.setItem('sos_emergency_mode', String(emergencyMode))
    if (emergencyMode) {
      document.documentElement.classList.add('emergency-mode')
      setReadAloud(true)
      if ('vibrate' in navigator) {
        navigator.vibrate([100, 50, 100])
      }
    } else {
      document.documentElement.classList.remove('emergency-mode')
    }
  }, [emergencyMode])

  useEffect(() => {
    localStorage.setItem('sos_large_text', String(largeText))
    if (largeText) {
      document.documentElement.classList.add('large-text')
    } else {
      document.documentElement.classList.remove('large-text')
    }
  }, [largeText])

  useEffect(() => {
    localStorage.setItem('sos_read_aloud', String(readAloud))
  }, [readAloud])

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault()
      setPwaInstallPrompt(e)
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
    return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
  }, [])

  const toggleEmergencyMode = () => setEmergencyMode((prev) => !prev)

  const installPwa = () => {
    if (pwaInstallPrompt) {
      pwaInstallPrompt.prompt()
      pwaInstallPrompt.userChoice.then(() => setPwaInstallPrompt(null))
    }
  }

  return (
    <AppContext.Provider
      value={{
        emergencyMode,
        setEmergencyMode,
        toggleEmergencyMode,
        largeText,
        setLargeText,
        readAloud,
        setReadAloud,
        emergencyNumbersOpen,
        setEmergencyNumbersOpen,
        identificationOpen,
        setIdentificationOpen,
        pwaInstallPrompt,
        installPwa,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useApp must be used within an AppProvider')
  }
  return context
}

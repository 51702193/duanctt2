import React from 'react'
import { useGoogleLogin } from 'react-use-googlelogin'

const GoogleAuthContext = React.createContext()

export const GoogleAuthProvider = ({ children }) => {
  const googleAuth = useGoogleLogin({
    // clientId: process.env.GOOGLE_CLIENT_ID, // Your clientID from Google.
    clientId: "469902400049-4ia2a8s5pbs85bahoti24d3ntmbecqb8.apps.googleusercontent.com", // Your clientID from Google.
  })

  return (
    <GoogleAuthContext.Provider value={googleAuth}>
      {children}
    </GoogleAuthContext.Provider>
  )
}

export const useGoogleAuth = () => React.useContext(GoogleAuthContext)
"use client"

import { useEffect } from "react"
import { useUser } from "@clerk/nextjs"
import { useStore } from "@/store/store"

interface ProtectedRouteGuardProps {
  children: React.ReactNode
  mode?: "signin" | "signup"
}


export default function ProtectedRouteGuard({
  children,
  mode = "signin",
}: ProtectedRouteGuardProps) {
  const { isSignedIn, isLoaded } = useUser()

  const openAuthPopup = useStore(
    (s) => s.openAuthPopup
  )

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      openAuthPopup(mode)
    }
  }, [isLoaded, isSignedIn, mode, openAuthPopup])

  if (!isLoaded) return null

  if (!isSignedIn) return null

  return <>{children}</>
}
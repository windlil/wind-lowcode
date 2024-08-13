import { useLocation, useNavigate } from "react-router-dom"

export const useRedirect = (path: string, target: string) => {
  const navigate = useNavigate()
  const location = useLocation()
  const pathname = location.pathname

  const redirect = () => {
    if (pathname === path) {
      navigate(target)
    }
  }

  return {
    redirect,
    navigate,
    location,
    pathname
  }
}
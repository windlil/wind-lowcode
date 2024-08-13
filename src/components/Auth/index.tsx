import { FC, ReactNode, useCallback, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Auth: FC<{
  children: ReactNode
}> = ({
  children
}) => {
  const navigate = useNavigate()
  const location = useLocation()
  const isAuth = false

  const handleAuth = useCallback(() => {
    if (!isAuth) {
      navigate('/landing')
    }
  },[isAuth, navigate])

  useEffect(() => {
    handleAuth()
  }, [location.pathname, handleAuth])

  return children
}

export default Auth
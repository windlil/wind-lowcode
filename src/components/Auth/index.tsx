import useUserInfoStore from '@/stores/userinfo'
import { FC, ReactNode, useCallback, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const WHITE_LIST = ['/landing']

const Auth: FC<{
  children: ReactNode
}> = ({
  children
}) => {
  const navigate = useNavigate()
  const location = useLocation()
  const { auth } = useUserInfoStore()

  const handleAuth = useCallback(() => {
    if (!WHITE_LIST.includes(location.pathname) && !auth) {
      navigate('/landing')
    }
  },[auth, navigate, location])

  useEffect(() => {
    handleAuth()
  }, [location.pathname, handleAuth])

  return children
}

export default Auth
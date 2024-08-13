import { RouteObject } from 'react-router-dom'
import { createLazyElement } from './utils'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: createLazyElement(() => import('@/views/Landing/layout')),
    children: [
      {
        path: '/landing',
        element: createLazyElement(() => import('@/views/Landing/index'))
      },
      {
        path: '/how',
        element: createLazyElement(() => import('@/views/Landing/how'))
      },
      {
        path: '/about',
        element: createLazyElement(() => import('@/views/Landing/about'))
      },
    ]
  },
  {
    path: '/home',
    element: createLazyElement(() => import('@/views/Home/index'))
  },
  {
    path: '/editor',
    element: createLazyElement(() => import('@/views/Editor/index'))
  },
  {
    path: '/*',
    element: createLazyElement(() => import('@/views/404'))
  }
]

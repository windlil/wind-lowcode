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
    element: createLazyElement(() => import('@/views/Home/index')),
    children: [
      {
        path: '/home/app-list',
        element: createLazyElement(() => import('@/views/Home/AppList'))
      },
      {
        path: '/home/page-list',
        element: createLazyElement(() => import('@/views/Home/PageList'))
      },
      {
        path: '/home/component-list',
        element: createLazyElement(() => import('@/views/Home/ComponentList'))
      },
      {
        path: '/home/user',
        element: createLazyElement(() => import('@/views/Home/User'))
      },
    ]
  },
  {
    path: '/editor',
    element: createLazyElement(() => import('@/views/Editor/index'))
  },
  {
    path: 'preview',
    element: createLazyElement(() => import('@/views/Preview/index'))
  },
  {
    path: '/*',
    element: createLazyElement(() => import('@/views/404'))
  }
]

import { createElement, FunctionComponent, lazy, Suspense } from 'react'

export const createLazyElement = (load: () => Promise<{
  default: React.ComponentType<FunctionComponent>;
}>) => {
  return <Suspense fallback=''>
    {createElement(lazy(load))}
  </Suspense>
}
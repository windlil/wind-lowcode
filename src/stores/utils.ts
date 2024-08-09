import { StateCreator, create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { devtools } from 'zustand/middleware'



export const defineStore = <T>(state: StateCreator<T>) => {
  return (create<T>()(immer(devtools(state))))
}


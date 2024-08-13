import { createJSONStorage, persist } from 'zustand/middleware'
import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

interface State {
  auth: boolean
}

interface Action {
  setAuth: (status: boolean) => void
}

const useUserInfoStore = create<State & Action>()(immer(persist((set) => ({
  auth: false,
  setAuth(status){
    set((state) => {
      state.auth = status
      return state
    })
  }
}), {
  name: 'WINDLOWCODE_AUTH',
  storage: createJSONStorage(() => localStorage),
  partialize: (state) => ({ auth: state.auth })
})))

export default useUserInfoStore

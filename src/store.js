import { create } from "zustand";
import { persist } from 'zustand/middleware';

export const useStore = create()(
    persist(
        (set)=>({
            users: [],
            setUsers: (data)=>{
                set({users: data})
            }
        }),
        {name: 'user-storage'}
    )
)


export const useAuth = create()(
    persist(
        (set)=>({
            isLogged: false,
            setIsLogged: (newStatus)=>{
                set({isLogged: newStatus})
            }
        }),
        {name: 'logged-status'}
    )
) 

export const usePacients = create()(
    persist(
        (set)=>({
            pacients: [],
            setPacients: (data)=>{
                set({pacients: data})
            }
        }),
        {name: 'pacients-storage'}
    )
) 
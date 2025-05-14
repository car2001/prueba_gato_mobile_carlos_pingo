import { create } from 'zustand';
import { createJSONStorage, persist } from "zustand/middleware";

import { User } from '@/models/user';
import { getItem, removeItem, setItem } from '@/utils/storage';

interface UserStore {
    users: User[];
    setUsers: (users: User[]) => void;
}

const useUserStore = create<UserStore>()(
    persist(
        (set) => ({
            users: [],
            setUsers: (users: User[]) => set({ users }),
        }),
        {
            name: "user-storage",
            storage: createJSONStorage(() => ({
                getItem: getItem,
                setItem: setItem,
                removeItem: removeItem
            }))
        }
    )
);

export default useUserStore;
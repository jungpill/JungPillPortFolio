import { create } from "zustand";

export interface GuestBookProps {
    readonly content: string;
    readonly date: string;
    readonly id: number;
    readonly userId: string;
    readonly password: string;
}

interface GuestBookStore {
    guestBookData: GuestBookProps[];
    setGuestBookData: (newData: GuestBookProps[]) => void;
  }

export const useGuestBookStore = create<GuestBookStore>((set) => ({
    guestBookData: [],
    setGuestBookData: (newData) => set({ guestBookData: newData })
}))



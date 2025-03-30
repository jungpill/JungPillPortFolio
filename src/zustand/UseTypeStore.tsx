import { create } from "zustand";

interface TabsProps {
    readonly type: 'Home' | 'Profile';
    readonly setType: (newType: "Home" | "Profile") => void;
}

const useTabStore = create<TabsProps>((set) => ({
    type : 'Home',
    setType : (newType) => set({type: newType})
  }));

export default useTabStore

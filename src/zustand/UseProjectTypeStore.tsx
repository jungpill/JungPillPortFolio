import { create } from "zustand";

interface ProjectProps {
    readonly type: 'Jaychis' | 'PortFolio' | '싹둑싹둑' | '중독' | null;
    readonly setType: (newType: 'Jaychis' | 'PortFolio' | '싹둑싹둑' | '중독' | null) => void;
}

const useProjectTypeStore = create<ProjectProps>((set) => ({
    type : null,
    setType : (newType) => set({type: newType})
  }));

export default useProjectTypeStore
import create from 'zustand';
import { DateTime } from 'luxon';

const useUIStore = create((set) => ({
    date: DateTime.local().toISODate(), // today by default
    setDate: (date) => set({ date: date }),
}));

export default useUIStore;

import create from 'zustand';
import { DateTime } from 'luxon';

const useUIStore = create((set) => ({
    date: DateTime.local().toISODate(), // today by default
    dayView: 'overview',
    setDate: (date) => set({ date: date }),
    setDayView: (dayView) => set({ dayView: dayView }),
}));

export default useUIStore;

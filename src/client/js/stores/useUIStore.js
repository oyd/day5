import create from 'zustand';
import { DateTime } from 'luxon';
import { isValidDate } from '../other/utils';

const useUIStore = create((set) => ({
    date: DateTime.local().toISODate(), // today by default
    setDate: (date) => set((state) => ({ date: isValidDate(date) ? date : state.date })),
}));

export default useUIStore;

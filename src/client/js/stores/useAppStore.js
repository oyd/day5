import create from 'zustand';
import { isValidDate } from '../other/utils';

const useAppStore = create((set) => ({
    date: new Date().toISOString().slice(0, 10),
    setDate: (date) => set(state => ({ date: isValidDate(date) ? date : state.date }))
}));

export default useAppStore;

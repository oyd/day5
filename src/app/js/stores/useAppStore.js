import create from 'zustand';
import { DateTime } from 'luxon';

const useAppStore = create(set => ({
    day: DateTime.now().startOf('day'),
    setDay: (day) => set(state => ({day: day}))
}));

export default useAppStore;
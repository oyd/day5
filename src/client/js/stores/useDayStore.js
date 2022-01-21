import create from 'zustand';
import axios from 'axios';

const holidays = [
    'VAC', // Vacation
    'NYD', // New Years Day
    'MLK', // Martin Luther King Day
    'PRS', // Presidents Day
    'MEM', // Memorial Day
    'IND', // Independence Day
    'LAB', // Labor Day
    'COL', // Columbus Day
    'VET', // Veterans Day
    'THK', // Thanksgiving Day
    'CHR', // Christmas Day
];

const defaultDay = {
    pomodoros: 0,
};

const useDayStore = create((set, get) => ({
    loading: false,
    day: '',
    pomodoros: 0,
    load: (day) => {
        set({ loading: true });
        axios
            .get('/api/day/' + day)
            .then((response) => {
                console.log(response.data);
                if (response.data) {
                    set({ loading: false, ...response.data });
                } else {
                    set({ loading: false, day: day, ...defaultDay });
                }
            })
            .catch((error) => console.log(error));
    },
    save: (partial) => {
        axios
            .put('/api/day', partial)
            .then((response) => {})
            .catch((error) => {
                console.log(error);
            });
    },
    saveAll: () => {
        const state = get();
        const all = {
            day: state.day,
            pomodoros: state.pomodoros,
        };
        state.save(all);
    },
    addPomodoro: () =>
        set((state) => {
            const newPomodoros = state.pomodoros + 1;
            state.save({ day: state.day, pomodoros: newPomodoros });
            return { pomodoros: newPomodoros };
        }),
    removePomodoro: () =>
        set((state) => {
            if (state.pomodoros > 0) {
                const newPomodoros = state.pomodoros - 1;
                state.save({ day: state.day, pomodoros: newPomodoros });
                return { pomodoros: newPomodoros };
            }
            return {};
        }),
}));

export default useDayStore;

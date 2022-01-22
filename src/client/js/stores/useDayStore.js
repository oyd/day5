import create from 'zustand';
import axios from 'axios';
import { DateTime } from 'luxon';

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
    off: [],
};

const useDayStore = create((set, get) => ({
    loading: false,
    day: '',
    pomodoros: 0,
    off: [],

    load: (day) => {
        set({ loading: true });
        axios
            .get('/api/day/' + day)
            .then((response) => {
                if (response.data) {
                    let newDay = { loading: false, ...response.data };
                    newDay.off = newDay.off ? JSON.parse(newDay.off) : defaultDay.off;
                    set(newDay);
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
            off: JSON.stringify(state.off),
        };
        state.save(all);
    },

    _setPomodoro: (day, change) =>
        set((state) => {
            const newPomodoros = state.pomodoros + change;
            if (newPomodoros >= 0) {
                state.save({ day: day, pomodoros: newPomodoros });
                if (day === state.day) {
                    return { pomodoros: newPomodoros };
                }
            }
            return {};
        }),

    addPomodoro: () => {
        const state = get();
        state._setPomodoro(state.day, 1);
    },

    addPomodoroToday: () => {
        const state = get();
        state._setPomodoro(DateTime.local().toISODate(), 1);
    },

    removePomodoro: () => {
        const state = get();
        state._setPomodoro(state.day, -1);
    },
}));

export default useDayStore;

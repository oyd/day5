import create from 'zustand';

const pad = (n, z = 2) => ('00' + n).slice(-z);

let timer = 0;

const countdowns = {
    work: 60 * 25,
    short: 5,
    long: 60 * 30,
};

const usePomodoroStore = create((set, get) => ({
    mode: 'work',
    countdown: countdowns['work'],
    started: false,
    paused: true,
    cycles: 0,

    modes: () => Object.keys(countdowns),

    getTime: () => {
        const { countdown } = get();
        const seconds = countdown % 60;
        const minutes = (countdown - seconds) / 60;
        return `${pad(minutes)}:${pad(seconds)}`;
    },

    selectMode: (newMode) => set({ mode: newMode, countdown: countdowns[newMode] }),

    start: () =>
        set((state) => {
            timer = setInterval(state.tick, 1000);
            return { started: true, paused: false };
        }),

    pause: () => {
        clearInterval(timer);
        set({ paused: true });
    },

    reset: () =>
        set((state) => {
            clearInterval(timer);
            return { started: false, paused: true, countdown: countdowns[state.mode] };
        }),

    tick: () =>
        set((state) => {
            if (state.countdown > 0) {
                return { countdown: state.countdown - 1 };
            }
            clearInterval(timer);
            return { started: false, paused: true, countdown: countdowns[state.mode] };
        }),
}));

export default usePomodoroStore;

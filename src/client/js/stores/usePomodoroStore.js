import create from 'zustand';
import useDayStore from './useDayStore';
import '../../assets/bell.aac';

let timer = 0;

const countdowns = {
    work: 60 * 25,
    short: 60 * 5,
    long: 60 * 30,
};

const usePomodoroStore = create((set, get) => ({
    mode: 'work',
    countdown: countdowns['work'],
    started: false,
    paused: true,
    count: 0,

    modes: () => Object.keys(countdowns),

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
            let newCount = state.count;
            let newMode = 'work';
            if (state.mode === 'work') {
                newCount += 1;
                newMode = newCount % 4 == 0 ? 'long' : 'short';
                useDayStore.getState().addPomodoroToday();
            }
            const audio = new Audio('/assets/bell.aac');
            audio.play();
            clearInterval(timer);
            return { started: false, paused: true, mode: newMode, countdown: countdowns[newMode], count: newCount };
        }),
}));

export default usePomodoroStore;

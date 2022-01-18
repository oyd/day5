import create from 'zustand';
import axios from 'axios';

const defaultDay = {
    pomodoros: 0
};

const useDayStore = create((set, get) => ({
    loading: false,
    day: '',
    pomodoros: 0,
    loadDay: (day) => {
        set({loading : true});
        axios
            .get('/api/day/'+day)
            .then((response) => {
                console.log(response.data);
                if (response.data) {
                    set({ loading : false, day : response.data.day, pomodoros : response.data.pomodoros });
                }
                else {
                    set({ loading : false, day : day, ...defaultDay });
                }
            })
            .catch((error) => console.log(error));
    },
    saveDay: () => {
        const state = get();
        const request = {
            day: state.day,
            pomodoros: state.pomodoros
        };
        axios
            .put('/api/day', request)
            .then((response) => {})
            .catch((error) => {
                console.log(error);
            });
    }
}));

export default useDayStore;
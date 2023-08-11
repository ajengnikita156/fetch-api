import axios from "axios";

export default {
    namespaced: true,
    state: {
        surahs: [],
        surah: []
    },
    getters: {
        getSurahs: state => state.surahs,
        getSingleSurah: state => state.surah
    },
    actions: {
        async fetchSurahs({ commit }) {
            try {
                const dataSurahs = await axios.get("https://al-quran-jade.vercel.app/surahs")
                commit('SET_SURAHS', dataSurahs.data)
            } catch (error) {
                alert("Ada error");
                console.log(error);
            }
        },
        async fetchSingleSurah({ commit }, number) {
            try {
                const dataSurahs = await axios.get("https://al-quran-jade.vercel.app/surahs/"+number)
                commit('SET_SINGLESURAHS', dataSurahs.data)
            } catch (error) {
                alert("Ada error");
                console.log(error);
            }
        },
    },
    mutations: {
        SET_SURAHS(state, surahs) {
            state.surahs = surahs.data
        },
        SET_SINGLESURAHS(state, surah) {
            state.surah = surah.data
        },
    }
}
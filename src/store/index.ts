import { createStore } from 'vuex';

const key = 'markdown-text';

const store = createStore({
    state () {
        return {
            markdown: localStorage.getItem(key) || '',
        }
    },
    mutations: {
        saveMarkdown (state, text) {
            localStorage.setItem(key, text);
        }
    },
    getters: {
        getMarkdown (state) {
            return state.markdown;
        }
    },
})


export default store;

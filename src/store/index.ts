import { createStore } from 'vuex';

const key = 'markdown-text';

const store = createStore({
    state () {
        return {
            markdown: localStorage.getItem(key) || '',
        }
    },
    mutations: {
        saveMarkdown (state, text: string) {
            state.markdown = text;
            localStorage.setItem(key, text);
        }
    },
    /* only required if needed some compute before deliver the state value
    getters: {
        getMarkdown (state) {
            return state.markdown;
        }
    },*/
    actions: {
        downloadMarkdown (state, text) {

        }
    },
})


export default store;

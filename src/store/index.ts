import { createStore } from 'vuex';

const key = 'markdown-text';

interface IState {
    markdown: string;
}

const store = createStore({
    state () :IState {
        return {
            markdown: localStorage.getItem(key) || '',
        }
    },
    mutations: {
        saveMarkdown (state: IState, text: string) {
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
        downloadMarkdown ({ state}) {
            const data = new Blob([state.markdown], {type: 'text/plain'});
            const link = document.createElement('a');
            link.href = URL.createObjectURL(data);
            link.download = key + '.md';
            link.click();
            URL.revokeObjectURL(link.href);
        }
    },
})


export default store;

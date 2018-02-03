const mutations = {
    updateTopics(state, { data, concat }) {
        concat ? state.topics = [...state.topics, ...data] : state.topics = data;
    },
    updateTopic(state, { data }) {
        state.topic = data;
    },
    updateSavePosition(state, { name, data }) {
        state.savePosition[name] = data;
    },
    updateCurrentPage(state, { data }) {
        state.currPage += data;
    }
}

export default mutations;
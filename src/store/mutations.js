const mutations = {
    updateTopics(state, { data }) {
        state.topics = data;
    },
    updateTopic(state, { data }) {
        state.topic = data;
    },
    updateSavePosition(state, { name, data }) {
        state.savePosition[name] = data;
    }
}

export default mutations;
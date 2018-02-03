import { topics } from '@/api/topics';
import { topicDetail } from '@/api/topic-detail';
const actions = {
    fetchTopics({ commit }, { concat = false }) {
        return topics({ page: this.state.currPage, limit: this.state.currPageSize }).then((json) => {
            commit('updateTopics', { data: json.data, concat });
            return json.data;
        })
    },
    fetchTopicDetail({ commit }, { id }) {
        return topicDetail(id).then(json => {
            commit('updateTopic', { data: json.data });
            return json.data;
        })
    }
}

export default actions;
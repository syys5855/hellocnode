import { topics } from '@/api/topics';
const actions = {
    fetchTopics({ commit }) {
        return topics().then((json) => {
            commit('updateTopics', { data: json.data });
            return json.data;
        })
    }
}
export default actions;
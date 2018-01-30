import { apiPrefix, fetchResolve } from './variable';
const topicUrl = `${apiPrefix}/topics`;
export const fetchTopicDetail = () => {
    return fetch(topicUrl).then(fetchResolve());
}
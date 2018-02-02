import { apiPrefix, fetchResolve } from './variable';
const topicUrl = `${apiPrefix}/topic/{.id}`;
export const topicDetail = (id) => {
    return fetch(topicUrl.replace('{.id}', id)).then(fetchResolve());
}
import { apiPrefix, fetchResolve } from './variable';
const topicsUrl = `${apiPrefix}/topics`;

export const topics = () => {
    return fetch(topicsUrl).then(fetchResolve());
}
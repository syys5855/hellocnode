import { apiPrefix, fetchResolve } from './variable';
const topicsUrl = `${apiPrefix}/topics`;

export const topics = (params) => {
    return fetch(`${topicsUrl}?${Object.entries(params).map(param=>param.join('=')).join('&')}`).then(fetchResolve());
}
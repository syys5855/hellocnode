export const apiPrefix = `https://cnodejs.org/api/v1`;
export const fetchResolve = (mode = 'json') => {
    return (response) => {
        return new Promise((res, rej) => {
            return response.ok ? response[mode]().then(result => {
                return result.success ? res(result) : rej('failure,success is false');
            }) : rej('failure')
        })
    }
}
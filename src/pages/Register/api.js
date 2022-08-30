import request from '../../request'

// export const registerApi = (params)=> {
//     return request.post('./register', params)
// }

export const registerApi = (params) => request.post('/register', params)

import request from '../../request'

export const loginApi = (params)=> request.post('/login', params)
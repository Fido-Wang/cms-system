import request from '../../request'

export const getArticleList = (params)=> request.get('/article', {params})
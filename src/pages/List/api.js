import request from '../../request'

export const getArticleList = (params)=> request.get('/article', {params})

export const updateArticleById = (params)=> request.put('/article/update', {params})

export const removeArticle = (params)=> request.post('/article/remove', {params})
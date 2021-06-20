const blogRouter = require('express').Router()
const Blog = require('../models/blog')


blogRouter.get('/', async (request, response) => {
    const blogs = await Blog.find({})     
    response.json(blogs)
      
  })
  
blogRouter.post('/', async (request, response) => {
  const {title, author, url, likes} = request.body;

    const blog = new Blog(request.body)
    if(!likes){
      blog.likes = 0
      
    } 
    
    if(!title || !url){
       return response.status(400).send({msg: "please include all requested information"})
        .end()
        
    }
    
  
  const newBlog = await blog.save()
    
   
  return response.status(201).json(newBlog)
     
  })

  blogRouter.delete('/:id', async (request, response) => {
    const {id} = request.params
    await Blog.findByIdAndDelete(id)
    response.status(204).end()
  })

  module.exports = blogRouter
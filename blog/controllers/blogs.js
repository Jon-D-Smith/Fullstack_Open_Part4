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
      const newBlog = await blog.save()
    } 
    
    if(!title || !url){
        await response.send({msg: "please include all requested information"})
        return response.status(400).end()
    }
    
  
  const newBlog = await blog.save()
    
   
  return response.status(201).json(newBlog)
     
  })

  module.exports = blogRouter
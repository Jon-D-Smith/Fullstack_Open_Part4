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
  
   const newBlog = await blog.save()
      
  return response.status(201).json(newBlog)
     
  })

  module.exports = blogRouter
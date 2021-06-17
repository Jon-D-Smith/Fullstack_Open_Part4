const _ = require('lodash')

const dummy = (blogs) => {
    return 1
  }

  const totalLikes = (blogs) => {
    let total
    if(!blogs.length){
        total = 0
    } else {
        total = blogs.reduce((sum, blog) => sum + blog.likes, 0)
    }
     
    return total
    }


    const favoriteBlog = (blogs) => {
      let mostLiked
      let currentTop = 0
      blogs.map(blog => {
        if(currentTop < blog.likes){
          currentTop = blog.likes
          mostLiked = blog
        }
        return mostLiked
      })
      return mostLiked
    }


    const mostBlogs = (blogs) => {
      let bloggerArray = []

      blogs.map(blog => {
        bloggerArray.push(blog.author)
      })
      

     return bloggerArray.sort((a,b) =>{
       bloggerArray.filter(author => author===a).length
       - bloggerArray.filter(author => author===b).length
     }).pop()
    }


  
  module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostBlogs
  }
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
  
  module.exports = {
    dummy,
    totalLikes,
    favoriteBlog
  }
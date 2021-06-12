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
  
  module.exports = {
    dummy,
    totalLikes
  }
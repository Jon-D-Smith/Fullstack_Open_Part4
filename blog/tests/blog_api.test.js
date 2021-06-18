const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const helper = require('../utils/list_helper')

const Blog = require('../models/blog')

beforeEach(async () => {
    await Blog.deleteMany({})

    const blogObjects = helper.initialBlogs
        .map(blog => new Blog(blog))
        const promiseArray = blogObjects.map(blog => blog.save())
        await Promise.all(promiseArray)
})

test('blogs are returned as JSON and correct number of blogs returned', async () => {
    await api
        .get('/api/blogs')
        .expect(200)
        .expect('Content-Type', /application\/json/)
        
    const blogs = await helper.blogsInDb()
    
    expect(blogs).toHaveLength(helper.initialBlogs.length)
    
})

test('blog successfully added by post route', async () =>{
    
    const newBlog = {
        title: "supper de dupper",
        author: "Roger Manly",
        url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
        likes: 7,
        __v: 0
      }  

    await api
        .post('/api/blogs')
        .send(newBlog)
        .expect(201)

        const blogsAtEnd = await helper.blogsInDb()
        expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length + 1)
})

test('if likes is missing, it is set to 0', async () => {
    const newBlog = {
        title: "supper de dupper",
        author: "Roger Manlier than though",
        url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html"
      } 

      await api
        .post('/api/blogs')
        .send(newBlog)
        
    const blogsInDB = await helper.blogsInDb()
    const blogInDB = blogsInDB.length -1
    expect(blogsInDB[blogInDB].likes).toBe(0)
})

afterAll(() => {
    mongoose.connection.close()
})
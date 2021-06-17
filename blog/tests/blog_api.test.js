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

afterAll(() => {
    mongoose.connection.close()
})
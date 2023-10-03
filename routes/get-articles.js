const express = require('express')
const router = express.Router()
// Library uuid to generate IDs
const { v4: uuidv4 } = require('uuid');

// Database with simulated data
const db = {
    articles: [
        {
            id: '6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b',
            title: 'My article',
            content: 'Content of the article.',
            date: '04/10/2022',
            author: 'Liz Gringer'
        },
        // ... other articles
    ],
    comments: [
        {
            id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
            timestamp: 1664835049,
            content: 'Content of the comment.',
            articleId: '6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b',
            author: 'Bob McLaren'
        },
        // ... other comments
    ]
}

// GET all articles or a specific article
router
    .get('/', function (req, res) {
        res.status(200).json(db.articles) // Send db.articles as JSON response
    })
    .get('/:articleId', function (req, res) {
        const foundArticle = db.articles.find(article => article.id === req.params.articleId)

        if (foundArticle) {
            // If the article is found, you can print it or send it as a JSON response
            res.send(foundArticle)
        } else {
            // If the article is not found, you can send an error response
            res.send("Article not found")
        }
        res.status(404).json({ error: 'Article not found' })
    })

// POST post a new article
router.post('/', (req, res) => {
    // Create a new article object
    const newArticle = {
        id: uuidv4(), // Generate a random ID
        title: req.body.title,
        content: req.body.content,
        date: new Date().toLocaleDateString(), // You can customize the date format
        author: req.body.author,
    }

    // Add the new article to the db.articles array
    db.articles.push(newArticle)

    // Send a response indicating success
    res.status(201).json(newArticle)
})

// GET get comments from a certain article
router.get('/:articleId/comments', function (req, res) {
    // Get the articleId from the request parameters
    const articleId = req.params.articleId

    // Filter comments based on the articleId
    const commentsForArticle = db.comments.filter(comment => comment.articleId === articleId)

    // Check if there are any comments for the given articleId
    if (commentsForArticle.length > 0) {
        // If comments are found, send them as a JSON response
        res.status(200).json(commentsForArticle)
    } else {
        // If no comments are found, send a 404 error response
        res.status(404).json({ error: 'No comments found for the article' })
    }
})

// POST add new comment to specified article
router.post('/:articleId/comments', (req, res) => {
    const foundArticle = db.articles.find(article => article.id === req.params.articleId)
    if (foundArticle) {
        const comment = req.body
        const newComment = {
            id: uuidv4(),
            timestamp: new Date().toLocaleDateString(),
            content: req.body.content,
            articleId: req.params.articleId,
            author: req.body.author
        }
        db.comments.push(newComment)
        res.status(201).json(newComment)
    } else {
        res.status(404).json({ error: 'Article not found' })
    }
})

// GET find specific comment with commentId
router.get('/:articleId/comments/:commentId', function (req, res) {
    const foundComment = db.comments.find(comment => comment.id === req.params.commentId)
    if (foundComment) {
        res.status(201).json(foundComment)
    } else {
        res.status(404).json({ error: 'Comment not found' })
    }
})

module.exports = router

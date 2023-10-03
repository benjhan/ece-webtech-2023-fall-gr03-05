const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

//Databases
const db = {
    articles: [
      {
        id: '6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b',
        title: 'My article',
        content: 'Content of the article.',
        date: '04/10/2022',
        author: 'Liz Gringer'
      },
      // ...
    ],
    comments: [
      {
        id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
        timestamp: 1664835049,
        content: 'Content of the comment.',
        articleId: '6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b',
        author: 'Bob McLaren'
      },
      // ...
    ]
  }

  //GET All articles
  router.get('/articles', (req, res)=>{
    res.json(db.articles);
  });

  //POST New article
  router.post('/', (req, res) => {
    const id = uuidv4();
    const date = Date.now;

    const newArticle = {
        id,
        date,
        title: req.body.title,
        content: req.body.content,
        author: req.body.author,
    };
    db.articles.push(newArticle);
    res.status(201).json(newArticle);
  })

  //Get article by ArticleId
  router.get('/articles/:articleId',(req,res)=>{
    const article = db.articles.find(article => article.id === req.params.articleId);
    if(article){
        res.send(article)
    }else{
        res.send("Article not found");
    }
    res.status(404).json({error : 'Article not fount'});
  })
  
  router.get('/:articleId/comments',(req,res)=>{
    const articleId = req.params/articleId;

    if(commentsForArticle.length >0){
      res.status(200).json(commentsForArticle);
    }else{
      res.status(404).json({error: 'No comments found for this articleId'});
    }
  })

  router.post('/:article/comments',(req, res)=>{
    const foundArticle = db.articles.find(article => article.id === req.params.articleId);
    if (foundArticle) {
        const comment = req.body
        const id = uuidv4();
        const date = Date.now;
        const newComment = {
            id,
            date,
            content: req.body.content,
            articleId: req.params.articleId,
            author: req.body.author
        }

        db.comments.push(newComment)
        res.status(201).json(newComment);
    } else {
        res.status(404).json({ error: 'Article not found' });
    }
  })

  router.get('/:articleId/comments/:commentId', function (req, res) {
    const foundComment = db.comments.find(comment => comment.id === req.params.commentId);
    if (foundComment) {
        res.status(201).json(foundComment);
    } else {
        res.status(404).json({ error: 'Comment not found' });
    }
})

  module.exports = router
const express = require('express');
const { User, Content } = require('../models');

const router = express.Router();

router.use((req, res, next) => {  //user.nick
    res.locals.user = req.user;
    next();
});

router.get('/',async(req, res, next)=>{
    try{
        res.render('join');
    } catch(error){
        console.log(error);
        return next(error);
    }
});

router.get('/login',async(req, res, next)=>{
    try{
        res.render('layout');
    } catch(error){
        console.log(error);
        return next(error);
    }
});

router.get('/main',async(req, res, next)=>{
    try{
        const contents = await Content.findAll({
            include: {
            model: User,
            attributes: ['id', 'nick'],
            },
            order: [['createdAt', 'DESC']],
        });
        res.render('main',{
            twits: contents,
          });
    } catch(error){
        console.log(error);
        return next(error);
    }
});

router.get('/write',async(req, res, next)=>{
    try{
        res.render('write');
    } catch(error){
        console.log(error);
        return next(error);
    }
});

module.exports = router;
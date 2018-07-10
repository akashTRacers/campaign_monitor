const  path='../views/index.pug';
const articles= require('../models/article.js');
class openHomeController{
  static getHome(req,res)
  {
    console.log("inside getHome.js controllers")
      res.send("inside get home");
  }
}
module.exports =openHomeController;
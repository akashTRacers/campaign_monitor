const initList = require("./list");
const initSegment = require("./segment");
const openHome= require("./openHome.js");
const initRoutes = (app) => {
  console.log("inside index.js");
  app.use('/', openHome());
  app.use('/clients',initList());
  app.use('/lists', initSegment()); 
}
module.exports = initRoutes;
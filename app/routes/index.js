const initList = require("./list");
const initSegment = require("./segment");
const openHome= require("./openHome.js");
const initRoutes = (app) => {
  app.use('/', openHome());
  app.use('/clients',initList());
  app.use('/lists', initSegment()); 
}
module.exports = initRoutes;
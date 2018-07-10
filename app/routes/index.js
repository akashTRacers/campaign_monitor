const initCampaign = require("./campaign");
const openHome= require("./openHome.js");
const initRoutes = (app) => {
    console.log("inside index.js");
    app.use('/', openHome());
    app.use('/campaign', initCampaign()); 
}
module.exports = initRoutes;


const initCampaign = require("./campaign");
const initSegment = require("./segment");
const openHome= require("./openHome.js");
const initRoutes = (app) => {
    console.log("inside index.js");
    app.use('/', openHome());
    app.use('/clients',initCampaign());
    app.use('/campaigns', initSegment()); 
}
module.exports = initRoutes;


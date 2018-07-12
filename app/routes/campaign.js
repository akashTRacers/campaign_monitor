const express = require("express");
const campaignController = require("../controllers/campaign");
const initCampaign = () => {
    const campaignRouter = express.Router();    
    campaignRouter.get('/:clientId/campaigns', campaignController.getCampaigns);// true
    //campaignRouter.get('/emaillist/:clientid', campaignController.getEmailState);
    campaignRouter.post('/:clientId/campaigns', campaignController.createCampaign);//true
    return campaignRouter;
}
module.exports = initCampaign;
              
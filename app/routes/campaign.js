const express = require("express");
const campaignController = require("../controllers/campaign");
const initCampaign = () => {
    const campaignRouter = express.Router();    
    campaignRouter.get('/', campaignController.getCampaigns);
     campaignRouter.get('/emaillist', campaignController.getEmailState);
     campaignRouter.post('/', campaignController.createCampaign);
     campaignRouter.delete('/', campaignController.deleteSegment);// for sending info about updatable data
    // campaignRouter.put('/:id', initCampaign.updateArticles);
    return campaignRouter;
}
module.exports = initCampaign;
              
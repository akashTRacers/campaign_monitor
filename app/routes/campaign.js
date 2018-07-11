const express = require("express");
const campaignController = require("../controllers/campaign");
const initCampaign = () => {
    const campaignRouter = express.Router();    
    campaignRouter.get('/', campaignController.getCampaigns);
     campaignRouter.get('/emaillist', campaignController.getEmailState);
     campaignRouter.post('/', campaignController.createCampaign);

     //Segment Operation
     campaignRouter.get('/segments', campaignController.getAllSegment);
     campaignRouter.post('/segments', campaignController.createSegment);
     campaignRouter.put('/segments', campaignController.updateSegment);
     campaignRouter.delete('/segments', campaignController.deleteSegment);
     campaignRouter.get('/getyoursegment', campaignController.getSpecificSegment);
     
     
    return campaignRouter;
}
module.exports = initCampaign;
              
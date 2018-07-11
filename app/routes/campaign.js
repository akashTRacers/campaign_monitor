const express = require("express");
const campaignController = require("../controllers/campaign");
const initCampaign = () => {
    const campaignRouter = express.Router();    
    campaignRouter.get('/:clientid', campaignController.getCampaigns);//
    campaignRouter.get('/emaillist/:clientid', campaignController.getEmailState);//
    campaignRouter.post('/:clientid', campaignController.createCampaign);//

    //Segment Operation
    campaignRouter.get('/segments/:listid', campaignController.getAllSegment);//
    campaignRouter.post('/segments/:listid', campaignController.createSegment);//
    campaignRouter.put('/segments/:segmentid', campaignController.updateSegment); //
    campaignRouter.delete('/segments/:segmentid', campaignController.deleteSegment);//
    campaignRouter.get('/getyoursegment/:segmentid', campaignController.getSpecificSegment);//
    return campaignRouter;
}
module.exports = initCampaign;
              
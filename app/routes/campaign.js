const express = require("express");
const campaignController = require("../controllers/campaign");
const initCampaign = () => {
  const campaignRouter = express.Router();
  campaignRouter.get('/:clientId/campaigns', campaignController.getCampaigns);// true
  campaignRouter.post('/:clientId/campaigns', campaignController.createCampaign);//true
  campaignRouter.get('/:clientid/emailSent', campaignController.getEmailState);
  return campaignRouter;
}
module.exports = initCampaign;

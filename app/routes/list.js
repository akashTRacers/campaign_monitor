const express = require("express");
const listController = require("../controllers/list");
const espMiddleWare = require("../../lib/decideEsp");
//const campaignController = require("../controllers/campaign");
const initList = () => {
  const listRouter = express.Router();
  listRouter.get('/lists', espMiddleWare.getEsp, listController.getLists);//true
  listRouter.post('/lists', espMiddleWare.getEsp, listController.createList);//true
  //listRouter.get('/:clientId/campaigns', campaignController.getCampaigns);
  //listRouter.post('/:clientId/campaigns', campaignController.createCampaign);
  listRouter.get('/:clientid/emailSent', espMiddleWare.getEsp, listController.getEmailState);//true
  return listRouter;
}
module.exports = initList;

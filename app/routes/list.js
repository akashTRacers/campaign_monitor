const express = require("express");
const listController = require("../controllers/list");
//const campaignController = require("../controllers/campaign");
const initList = () => {
  const listRouter = express.Router();
  listRouter.get('/lists', listController.getLists);
  listRouter.post('/lists', listController.createList);
 //listRouter.get('/:clientId/campaigns', campaignController.getCampaigns);
 // listRouter.post('/:clientId/campaigns', campaignController.createCampaign);
  listRouter.get('/:clientid/emailSent', listController.getEmailState);
  return listRouter;
}
module.exports = initList;

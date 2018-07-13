const express = require("express");
const segmentController = require("../controllers/segment");
const initSegment = () => {
  const segmentRouter = express.Router();
  segmentRouter.get('/:campaignID/segments', segmentController.getAllSegment);
  segmentRouter.get('/segments/:segmentid', segmentController.getSpecificSegment);
  segmentRouter.post('/:campaignID/segments', segmentController.createSegment);
  segmentRouter.put('/segments/:segmentid', segmentController.updateSegment); 
  segmentRouter.delete('/segments/:segmentid', segmentController.deleteSegment);
  return segmentRouter;
}
module.exports = initSegment;

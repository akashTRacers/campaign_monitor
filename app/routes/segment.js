const express = require("express");
const segmentController = require("../controllers/segment");
const espMiddleWare = require("../../lib/decideEsp");
const initSegment = () => {
  const segmentRouter = express.Router();
  segmentRouter.get('/:listId/segments', espMiddleWare.getEsp, segmentController.getAllSegment);
  segmentRouter.get('/:listId/segments/:segmentId', espMiddleWare.getEsp, segmentController.getSpecificSegment);
  segmentRouter.post('/:listId/segments', espMiddleWare.getEsp, segmentController.createSegment);
  segmentRouter.put('/:listId/segments/:segmentId', espMiddleWare.getEsp, segmentController.updateSegment);
  segmentRouter.delete('/:listId/segments/:segmentId', espMiddleWare.getEsp, segmentController.deleteSegment);
  return segmentRouter;
}
module.exports = initSegment;

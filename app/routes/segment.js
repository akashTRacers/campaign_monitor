const express = require("express");
const segmentController = require("../controllers/segment");
const initSegment = () => {
  const segmentRouter = express.Router();
  segmentRouter.get('/:listId/segments', segmentController.getAllSegment);
  segmentRouter.get('/:listId/segments/:segmentid', segmentController.getSpecificSegment);
  segmentRouter.post('/:listId/segments', segmentController.createSegment);
  segmentRouter.put('/:listId/segments/:segmentid', segmentController.updateSegment); 
  segmentRouter.delete('/:listId/segments/:segmentid', segmentController.deleteSegment);
  return segmentRouter;
}
module.exports = initSegment;

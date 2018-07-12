const express = require("express");
const segmentController = require("../controllers/segment");
const initSegment = () => {
    const segmentRouter = express.Router();    
    segmentRouter.get('/:campaignID/segments', segmentController.getAllSegment);//true
    segmentRouter.get('/segments/:segmentid', segmentController.getSpecificSegment);//true
    segmentRouter.post('/:campaignID/segments', segmentController.createSegment);//true
    segmentRouter.put('/segments/:segmentid', segmentController.updateSegment); //true
    segmentRouter.delete('/segments/:segmentid', segmentController.deleteSegment);//true
    return segmentRouter;
}
module.exports = initSegment;
              
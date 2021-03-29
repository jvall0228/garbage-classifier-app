var express = require('express');
var router = express.Router();
var multer = require('multer');
var {PredictionServiceClient} = require('@google-cloud/automl').v1;

//gcloud settings
const projectId = 'hoohacks2021';
const location = 'us-central1';
const modelId = 'ICN2600329606527451136';

//multer setup
const storage = multer.memoryStorage();
const upload = multer({storage: storage});

const client = new PredictionServiceClient()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Garbage Classification App' });
});

router.post('/',upload.single('image'), async function(req,res){
  const content = req.file.buffer.toString('base64')
  const payload = {}

  payload.image = {imageBytes: content}

  const [response] = await client.predict({
    name: client.modelPath(projectId, location, modelId),
    payload: payload
  })
  if(response.payload === undefined || response.payload.length == 0)
    res.send("labelling failed")
  else
    res.send(response.payload[0].displayName)
})
module.exports = router;
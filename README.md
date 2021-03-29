# Garbage Classifier App
This repository contains the dataset used to build the automl model as well as the code used to build the node.js server.
# dataset folder
Contains the dataset published by cchangcs linked [here](https://www.kaggle.com/asdasdasasdas/garbage-classification) as well as the jupyter notebook used to create the csv file for the automl.
# node-server folder
Contains the code for the node.js server. Currently handles requests for prediction to the deployed automl model and allows users to upload files to run prediction on.
# node-server setup
* Run ``` npm install ``` in the node-server directory.
* Declare an environmental variable ```GOOGLE_APPLICATION_CREDENTIALS``` and assign it the path to the json containing a google cloud service account key
# automl setup
* Create a bucket in Google Cloud
* Run the jupyter notebook in dataset directory, remember to replace the basic_gcs_path with your own path
* Upload the dataset and the csv to the bucket 
* Navigate to the vision tab and define the new dataset 
* Train the dataset and deploy it
* Replace the projectId and modelId variables in the node-server/routes/index.js file with your own

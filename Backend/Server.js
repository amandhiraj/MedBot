
var express = require("express");
var path = require("path");
var app = express();
var morgan = require('morgan')
var cors = require('cors')

// const compute =  require('./tess')
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');


app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var listener = app.listen(8351, function () {
  console.log("Listening on port " + listener.address().port);
});


const { text } = require('express');
const { createWorker } = require('tesseract.js');

const url = 'mongodb://localhost:27017';
const dbName = 'medical';

function createAlert(msg) {
return `
<script>
alert("${msg}")
</script>
`}

morgan('dev')


//*************** */
app.post('/api/v1/post/contact', async (req, res) => {
  var name = req.body.name
  var address = req.body.address
  var description = req.body.description
  var symptoms = req.body.symptoms
  var bloodtype = req.body.bloodtype

  var data = ({
    name: name,
    address: address,
    description: description,
    symptoms: symptoms,
    bloodtype: bloodtype
  });

  // Use connect method to connect to the server
  MongoClient.connect(url, function (err, client) {

    assert.equal(null, err);
    const db = client.db(dbName);


    const collection = db.collection('user');
    collection.insertOne(data, function (err, res) {
      if (err) throw err;
      console.log('data submitted successfully')
    });

    client.close();
  });

  return res.status(200).send(createAlert("Info submitted successfully"));
});

///********* */
app.post('/api/v1/post/medicine', async (req, res) => {

  var rxcode = req.body.rxcode
  var dosage = req.body.dosage

  var data = ({
    rxcode: rxcode,
    dosage: dosage,
  });

  // Use connect method to connect to the server
  MongoClient.connect(url, function (err, client) {

    assert.equal(null, err);
    const db = client.db(dbName);


    const collection = db.collection('medicine');
    collection.insertOne(data, function (err, res) {
      if (err) throw err;
      console.log('Medicine submitted successfully')
    });

    client.close();
  });

  return res.status(201).send(createAlert("Prescription request submitted successfully"))
})

app.post('/api/v1/post/appointment', async (req, res) => {

  try {
    var name = req.body.name
    var date = req.body.date

    var data = ({
      name: name,
      date: date,
    })

    // Use connect method to connect to the server
    MongoClient.connect(url, function (err, client) {

      const db = client.db(dbName);


      const collection = db.collection('appointments');
      collection.insertOne(data, function (err, res) {
        if (err) throw err;
        console.log('Appointment submitted successfully')
      });
      client.close();
      return res.status(200).json("Success");
    });
  } catch (error) {
    return res.status(500).json("error");
  }
})


app.post('/api/v1/post/imageUpload', async (req, res) => {
  console.log(req.body.uuid)
  setTimeout(async function () {
    const worker = await createWorker();
    await worker.load();
    await worker.loadLanguage('eng');
    await worker.initialize('eng');
    const { data: { text } } = await worker.recognize(`https://ucarecdn.com/${req.body.uuid}/default.png`)
    console.log(text);
    await worker.terminate();
    return res.status(201).json(text == null ? "no data" : text)
  }, 100);
})
import express from 'express';
import 'dotenv/config';
import mongoose from 'mongoose';
import AddDocument, { insertMillionRecords } from './infoModel.js';
import FindUsersByEmail from './findUsersByEmail.js';


const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Test And the server is working hehhehe')
})


// mongodb+srv://rand_sohail:12345678900@cluster0.srtji.mongodb.net/
const connectToDataBase = () => {

  mongoose.connect("mongodb://localhost:27017/user")
    .then(() => {
      console.log("Connected To DB Successfully....")
    })
    .catch((err) => {
      console.log({ err })
    })
}
connectToDataBase();


// findUsersByEmail
// FindUsersByEmail();

// Check the database name is connected to
// mongoose.connection.on('connected', () => {
//   console.log('Mongoose default connection open to ', mongoose.connection.db.databaseName);
// });



// add one record to the database
// AddDocument();

// mongoose.
// sudo systemctl start mongod

// insertMillionRecords();


app.listen(PORT, () => {
  console.log(`App listen at port http://localhost:${PORT}`);
})

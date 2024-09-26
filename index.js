import express from 'express';
import 'dotenv/config';
import mongoose from 'mongoose';
import AddDocument, { Info, insertMillionRecords } from './infoModel.js';
import AgeQuery from './ageQuery.js';
import AgeIndexes from './ageIndex.js';

// start the mongodb
// sudo systemctl start mongod

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Test And the server is working hehhehe')
})


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

// Manual Indexes 
// AgeIndexes();

console.log('List for the indexes', await Info.listIndexes());

// Age Query for the users who is age equal 26
// AgeQuery();


// Check the database name is connected to
// mongoose.connection.on('connected', () => {
//   console.log('Mongoose default connection open to ', mongoose.connection.db.databaseName);
// });




// insertMillionRecords();


app.listen(PORT, () => {
  console.log(`App listen at port http://localhost:${PORT}`);
})

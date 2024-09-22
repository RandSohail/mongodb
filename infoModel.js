import mongoose from 'mongoose';

const infoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true }
});

export const Info = mongoose.model('information', infoSchema);

export default async () => {
  const newItem = new Info({
    name: 'Memories',
    age: 30,
    email: 'john.doe@example.com'
  });

  try {
    const savedItem = await newItem.save();
    console.log('Document saved:', savedItem);
  } catch (error) {
    console.error('Error saving document:', error);
  }
};



const generateRandomData = () => {
  const randomName = `User_${Math.random().toString(36).substring(7)}`;
  const randomAge = Math.floor(Math.random() * 50);  // Random age between 0 and 100
  const randomEmail = `${randomName}@example.com`;

  return {
    name: randomName,
    age: randomAge,
    email: randomEmail,
  };
};

// Function to insert a million records
export const insertMillionRecords = async () => {
  const batchSize = 10000;  // Number of records per batch to avoid memory issues
  const totalRecords = 1000000;
  const batches = Math.ceil(totalRecords / batchSize);

  console.log(`Inserting ${totalRecords} records in ${batches} batches...`);

  for (let i = 0; i < batches; i++) {
    const records = [];
    for (let j = 0; j < batchSize; j++) {
      records.push(generateRandomData());
    }

    try {
      await Info.insertMany(records);  // Bulk insert the records
      console.log(`Batch ${i + 1} inserted successfully.`);
    } catch (error) {
      console.error(`Error inserting batch ${i + 1}:`, error);
    }
  }

  console.log('Finished inserting all records.');
  // mongoose.connection.close();  // Close the connection after insertion
};
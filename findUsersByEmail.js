import { Info } from './infoModel.js';


export default async () => {
  const startTime = Date.now();  // Start timing
  console.log('Find Users by email start');
  try {
    const users = await Info.find({ email: /example/i });  // Case-insensitive search for 'example' in email
    const endTime = Date.now();  // End timing

    console.log(`Query completed in ${endTime - startTime} ms`);
    console.log('Number of records found:', users.length);
  } catch (error) {
    console.error('Error during query:', error);
  }
};

// Query completed in 22974 ms
// Number of records found: 1000000
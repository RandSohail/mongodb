import { Info } from './infoModel.js';

export default async () => {
  console.log('Create indexes for the age field');
  try {

    // 1 and -1 the value of the field refers to the order of the index table ascending and descending
    await Info.createIndexes({ age: 1 });

  } catch (error) {
    console.error('Error during query:', error);
  }
};
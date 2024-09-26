import { Info } from './infoModel.js';

export default async () => {
  console.log('Find Users age = 26');
  try {
    const users = await Info.find({ age: { $eq: 25 } }).explain('executionStats');
    console.log(users)
  } catch (error) {
    console.error('Error during query:', error);
  }
};


// This is the returned object for the above executed query  
// {
//   explainVersion: '1',
//   queryPlanner: {
//     namespace: 'user.information',
//     indexFilterSet: false,
//     parsedQuery: { age: [Object] },
//     queryHash: '97A4421A',
//     planCacheKey: '97A4421A',
//     maxIndexedOrSolutionsReached: false,
//     maxIndexedAndSolutionsReached: false,
//     maxScansToExplodeReached: false,
//     winningPlan: { stage: 'COLLSCAN', filter: [Object], direction: 'forward' },
//     rejectedPlans: []
//   },
//   executionStats: {
//     executionSuccess: true,
//     nReturned: 19977,
//     executionTimeMillis: 1629,
//     totalKeysExamined: 0,
//     totalDocsExamined: 1000000,
//     executionStages: {
//       stage: 'COLLSCAN',
//       filter: [Object],
//       nReturned: 19977,
//       executionTimeMillisEstimate: 284,
//       works: 1000001,
//       advanced: 19977,
//       needTime: 980023,
//       needYield: 0,
//       saveState: 1000,
//       restoreState: 1000,
//       isEOF: 1,
//       direction: 'forward',
//       docsExamined: 1000000
//     },
//     allPlansExecution: []
//   },
//   command: { find: 'information', filter: { age: 26 }, '$db': 'user' },
//   serverInfo: {
//     host: 'rand',
//     port: 27017,
//     version: '7.0.14',
//     gitVersion: 'ce59cfc6a3c5e5c067dca0d30697edd68d4f5188'
//   },
//   serverParameters: {
//     internalQueryFacetBufferSizeBytes: 104857600,
//     internalQueryFacetMaxOutputDocSizeBytes: 104857600,
//     internalLookupStageIntermediateDocumentMaxSizeBytes: 104857600,
//     internalDocumentSourceGroupMaxMemoryBytes: 104857600,
//     internalQueryMaxBlockingSortMemoryUsageBytes: 104857600,
//     internalQueryProhibitBlockingMergeOnMongoS: 0,
//     internalQueryMaxAddToSetBytes: 104857600,
//     internalDocumentSourceSetWindowFieldsMaxMemoryBytes: 104857600,
//     internalQueryFrameworkControl: 'trySbeRestricted'
//   },
//   ok: 1
// }



// This is the returned object after the indexes for the age field 
// You can see the totalDocsExamined and the time it takes to process 
// {
//   explainVersion: '1',
//   queryPlanner: {
//     namespace: 'user.information',
//     indexFilterSet: false,
//     parsedQuery: { age: [Object] },
//     queryHash: '97A4421A',
//     planCacheKey: '5786CCC4',
//     maxIndexedOrSolutionsReached: false,
//     maxIndexedAndSolutionsReached: false,
//     maxScansToExplodeReached: false,
//     winningPlan: { stage: 'FETCH', inputStage: [Object] },
//     rejectedPlans: []
//   },
//   executionStats: {
//     executionSuccess: true,
//     nReturned: 19945,
//     executionTimeMillis: 72,
//     totalKeysExamined: 19945,
//     totalDocsExamined: 19945,
//     executionStages: {
//       stage: 'FETCH',
//       nReturned: 19945,
//       executionTimeMillisEstimate: 20,
//       works: 19946,
//       advanced: 19945,
//       needTime: 0,
//       needYield: 0,
//       saveState: 19,
//       restoreState: 19,
//       isEOF: 1,
//       docsExamined: 19945,
//       alreadyHasObj: 0,
//       inputStage: [Object]
//     },
//     allPlansExecution: []
//   },
//   command: { find: 'information', filter: { age: [Object] }, '$db': 'user' },
//   serverInfo: {
//     host: 'rand',
//     port: 27017,
//     version: '7.0.14',
//     gitVersion: 'ce59cfc6a3c5e5c067dca0d30697edd68d4f5188'
//   },
//   serverParameters: {
//     internalQueryFacetBufferSizeBytes: 104857600,
//     internalQueryFacetMaxOutputDocSizeBytes: 104857600,
//     internalLookupStageIntermediateDocumentMaxSizeBytes: 104857600,
//     internalDocumentSourceGroupMaxMemoryBytes: 104857600,
//     internalQueryMaxBlockingSortMemoryUsageBytes: 104857600,
//     internalQueryProhibitBlockingMergeOnMongoS: 0,
//     internalQueryMaxAddToSetBytes: 104857600,
//     internalDocumentSourceSetWindowFieldsMaxMemoryBytes: 104857600,
//     internalQueryFrameworkControl: 'trySbeRestricted'
//   },
//   ok: 1
// }
// This is useful if you don't want to clone the entire specs repo to your local machine

const generateSample = require('./generateSample');

const someSpecURLs = [
  'https://raw.githubusercontent.com/Azure/azure-rest-api-specs/main/specification/advisor/resource-manager/Microsoft.Advisor/stable/2020-01-01/advisor.json',
  'https://raw.githubusercontent.com/Azure/azure-rest-api-specs/main/specification/analysisservices/resource-manager/Microsoft.AnalysisServices/stable/2017-08-01/analysisservices.json',
  'https://raw.githubusercontent.com/Azure/azure-rest-api-specs/main/specification/resources/resource-manager/Microsoft.Resources/stable/2021-01-01/resources.json',
  'https://raw.githubusercontent.com/Azure/azure-rest-api-specs/main/specification/resources/resource-manager/Microsoft.Resources/stable/2021-04-01/resources.json',
  'https://raw.githubusercontent.com/Azure/azure-rest-api-specs/main/specification/storage/resource-manager/Microsoft.Storage/stable/2021-04-01/storage.json',
];

(async () => {
  for (const url of someSpecURLs) {
    await generateSample(url);
  }
})();

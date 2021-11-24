// Packages
import fs from 'fs';
import Papa from 'papaparse';

const readCSV = async (filePath) => {
  const csvFile = fs.readFileSync(filePath);
  const csvData = csvFile.toString();
  return new Promise((resolve) => {
    Papa.parse(csvData, {
      header: true,
      complete: (results) => {
        resolve(results.data);
      },
    });
  });
};

export default (container) => {
  container.factory('readCSV', () => readCSV);
};

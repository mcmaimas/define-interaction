
const fs = require('fs');
const TEST_DATA = { message: "Define Interactions here..." }
function createInteractionFile(data) {
  const fileName = 'interaction.json';
  const jsonData = JSON.stringify(data ? data : TEST_DATA, null, 2);

  fs.writeFile(fileName, jsonData, (err) => {
    if (err) {
      console.error('Error creating file:', err);
    } else {
      console.log(`${fileName} has been created successfully.`);
    }
  });
}

module.exports = createInteractionFile;
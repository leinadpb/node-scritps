/**
 * BACKUP current MongoDB database into a selected Directory.
 * @author Daniel Peña
 */


const { spawn, exec } = require('child_process');

const DIRECTORY = '~/desktop'; // Bin directory where MongoDB lives in actual server.
const NEW_FOLDER_NAME = 'my-simple-test'; // just testing.
const BACKUP_PATH = '';  // This could be pointing to another server.
const DB_PATH = ''; // Current DB path.
const PORT_NUMBER = ''; // MongoDB instance port.
const HOST_NAME = ''; // MongoDB instance host.

(async() => {
    // DO PROCESS ASYNC
    try {
        // Move to directory
        await exec(`cd ${DIRECTORY}`);

        // Execute MongoDB backup command;
        // const {  } = await exec(`mongodump --host HOST_NAME --port PORT_NUMBER --dbpath DB_PATH --out BACKUP_PATH`);
        
        console.log(`Mongo DB is backed up at: ${BACKUP_PATH}.`);
    } catch(e) {
        console.log('Some error ocurred: ');
        console.error(e);
    }
})();
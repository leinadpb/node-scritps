/**
 * Apply a current BACKUP directory to the current Mongo database.
 * @author Daniel Peña
 */

const { spawn, exec } = require('child_process');

const DIRECTORY = '~/desktop'; // Bin directory where MongoDB lives in actual server.
const DUMP_PATH_DIRECTORY = '';  // Path and directory where the backup exists.

(async() => {
    // DO PROCESS ASYNC
    try {
        // Move to directory
        await exec(`cd ${DIRECTORY}`);

        // Execute MongoDB backup command;
        // const {  } = await exec(`mongorestore ${DUMP_PATH_DIRECTORY}`);

        console.log(`Mongo DB was restore from: ${DUMP_PATH_DIRECTORY}.`);
    } catch(e) {
        console.log('Some error ocurred: ');
        console.error(e);
    }
})();
const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUy26jSBT9lVZt7W7eNliK1Bhs/CIGGz9HvSigwJinqwpsHOUvss0sRhppNvNv+YQReShZTPdkdqVLce6pc+65dyDLI4KmqAa9O1DgqIIUNUdaFwj0QL8MAoRBG/iQQtADyxmbR9ahtsiVDfo2w13lVIL14UKvB4PYLKZ6rE12k1gwb8B9GxSlm0TeLwBPujmSLk5sqkXKWb5/UotQ6eOiP9nwKD55CV3prqxOgrABbBBhhKMsHBQHlCIMkymqLRjhz9EPx2dizolbZO7Ekfbn4eaqL2eJGZKtIFGd520VweOtInHy5+h3SMsZhCu1mmG9Wzjn6yLKlifipv5eprUFuaU2oZf6lNq7F/okCjPkj32U0YjWn9Y9HvHMSbdCNYhnY0fNSHdvMunR2J44bW0Gygbuu6g4yml2/hxxPTgNOrrN5X0ptnmrGErDATsSpwlX6dJwse0YVYVqiHxW/Ujcwm+zEv8f3W1NWQSpdRYWLmSK83JI1woj5ay5UFUBqsRYX4srG4tD1v4c/ckZK+uSd7mNQ6vdanRsLd1Q4zfbjZBUyHCqkXnJYaHFqfhOH9IS/4plUMPFrvJtP1e5ndQvbXE4zafM2Jx1rK2yPm1S7YRPDHZSZXWrTs/+zDFEj8Wemvnm2JRZnlvs5FvfWo1cOY7jg3vdhPbN84tiVI990OPu2wCjMCIUQxrlWVMTxTaAfrVEHkb0WV2QiFFUqhcUpJNyozLjbEtalbnN1onjlGfFqLvhmKmsazGJb0AbFDj3ECHIH0WE5rg2ESEwRAT0fvvRBhm60Bffmm4C1wZBhAldZWWR5NB/M/XtI/S8vMzoss48rTkgDHrsexlRGmUhaWQsM4i9Q1Qh7QApAb0AJgTdt4GPqshDDR4YHaKjcnB1p5hm/XA3D7n5oQgbyoc8e7kiyh7sBLL31et6/ldREeFXl29OUEKu6HteR+qCNoheI9P881MHc0bPrawwNGbbdZj0tLdv0WbExlSLn114kR5h5IMexSVqAxd6cVk4eYyyX+D27Uurnm/3nXleoWOs5aesixNrNq1XH3BfLAW9u/c1peV+g6ds9gqnTKegDdLnCYyal/OS2O0ovKIIktjj5O/k27kREhbFtwxR0AYZbG6Dp8eHv54eH/54enz4++nx4c+nx4ffv3z/8lZuCLy600D7iMIoIaAHtFnnljHt4cDqrvLu2TBUO1S1UAXvbr6l4mXsVO1CV7eJZ/vseCz3u+5kBNNuHQl7+apeRXObji/8VLUEwb75FxDQA4flqjUZjpZIXOiDnJkXy52H3TVcyozXmSWryVEogxbWD3tlq7jCLuZ5OJcPCyM77WlqyhkWLgvo9HeCXXAqO9nPiKeqN023l6n62MwIl0bFree3+40vcOcW7HBj6UJnZoryjcJ6bpHhzZLHDI+wbpiLo0TKk4Qm0DB3cn8odY7zi4R2+VQcGN48nySqykWveX3eF8nrno6eo3T3OoNBhJ7X3qs7/+niexzY+/YHjNdF+tORU4m71vfbwcjXNEtFfL3gi1LOKR+YZ7OlD6XI9KNQVxQW3N//aIMigTTIcQp6gKQuBG2QQELV9zg7UYoIhWkBelxX6LJ8h5OV+38AjgjYkQMIAAA=',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.CHATBOT || 'no',
    CHATBOT1 : process.env.AUDIO_CHATBOT || 'yes',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'no',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});






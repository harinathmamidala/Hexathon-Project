var admin = require("firebase-admin");

// Fetch the service account key JSON file contents
var serviceAccount = require("path to your service account json file");

// Initialize the app with a service account, granting admin privileges
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  // The database URL depends on the location of the database
  databaseURL: "https://yourRealtimedatabase link"
});

// As an admin, the app has access to read and write all data, regardless of Security Rules
var db = admin.database();


module.exports = {
  db
}



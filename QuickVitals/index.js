//Node js Program to get gpio values from raspberry pi 

const admin = require('firebase-admin');

let serviceAccount = require('./quickvitals.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();

const sensor = require("node-dht-sensor").promises;
//let docRef = db.collection('users').doc('vitals').collection('data');
let docRef = db.collection('users').doc('vitals');

async function exec() {
  try {
    //set pin
    const res = await sensor.read(11, 4);
   docRef.set({
        roomTemp : res.temperature.toFixed(1),
        Humidity: res.humidity.toFixed(1),
    });
    console.log(
      `temp: ${res.temperature.toFixed(1)}°C, ` +
        `humidity: ${res.humidity.toFixed(1)}%`
    );
  } catch (err) {
    console.error("Failed to read sensor data:", err);
  }
setInterval(exec,20000);
}
 
exec();
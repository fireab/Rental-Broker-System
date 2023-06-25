const { initializeApp } = require("firebase/app");

const firebaseConfig = {
  apiKey: "AIzaSyBdVWCLfoeTObo8THWyaSX2h05HUDY5rPs",
  authDomain: "orbs-dc3b3.firebaseapp.com",
  projectId: "orbs-dc3b3",
  storageBucket: "orbs-dc3b3.appspot.com",
  messagingSenderId: "74188200086",
  appId: "1:74188200086:web:e8ba49192466530409cab7",
};

const app = initializeApp(firebaseConfig);

module.exports = app;

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC3TrsWZZvl0qCx1_nG40us38RPmWHguzo",
  authDomain: "react-native-netflix-clo-184da.firebaseapp.com",
  projectId: "react-native-netflix-clo-184da",
  storageBucket: "react-native-netflix-clo-184da.appspot.com",
  messagingSenderId: "105505377376",
  appId: "1:105505377376:web:98cc7be28197703af20705",
  measurementId: "G-QE287DPM61",
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);

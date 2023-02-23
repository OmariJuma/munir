import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDjgEhZH0gW840k8srIcBWGQDvxzxqWcDw",
  authDomain: "munir-4ab60.firebaseapp.com",
  databaseURL: "https://munir-4ab60-default-rtdb.firebaseio.com",
  projectId: "munir-4ab60",
  storageBucket: "munir-4ab60.appspot.com",
  messagingSenderId: "160306789496",
  appId: "1:160306789496:web:ba9a512ad3259012bfc18d"
};
// Initialize Firebase

const app = initializeApp(firebaseConfig);
const data = getDatabase(app)

export default data


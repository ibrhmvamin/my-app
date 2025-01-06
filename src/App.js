import logo from "./logo.svg";
import "./App.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzwI7IypOKEWn5gPg_GlDWyFhMY2zXKgw",
  authDomain: "amin-617a7.firebaseapp.com",
  projectId: "amin-617a7",
  storageBucket: "amin-617a7.firebasestorage.app",
  messagingSenderId: "349083940386",
  appId: "1:349083940386:web:32930806d5b895bed33c7b",
  measurementId: "G-MYQDBN3766",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

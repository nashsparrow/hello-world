import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { initializeApp } from "firebase/app";
import configData  from "../config.json";

const firebaseConfig = {
  apiKey: "AIzaSyBdjjiex6DK-iO81k0tSqyr2T9VqkifEok",
  authDomain: "react-hello-world-3c9e8.firebaseapp.com",
  projectId: "react-hello-world-3c9e8",
  storageBucket: "react-hello-world-3c9e8.appspot.com",
  messagingSenderId: "203274028943",
  appId: "1:203274028943:web:49ac9a774d456c2084edfa"
}


// Initialize Firebase
const app = initializeApp(firebaseConfig);

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp


import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { initializeApp } from "firebase/app";
import configData  from "../config.json";

const firebaseConfig = {
  apiKey: configData.firebaseConfig.apiKey,
  authDomain: configData.firebaseConfig.authDomain,
  projectId: configData.firebaseConfig.projectId,
  storageBucket: configData.firebaseConfig.storageBucket,
  messagingSenderId: configData.firebaseConfig.messagingSenderId,
  appId: configData.firebaseConfig.appId
}


// Initialize Firebase
const app = initializeApp(firebaseConfig);

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp


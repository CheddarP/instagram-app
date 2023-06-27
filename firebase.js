import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyBXJZ7gcfcnA9JSz0yKeswIKPgn1LcAY6Q',
  authDomain: 'instagram-c8a45.firebaseapp.com',
  projectId: 'instagram-c8a45',
  storageBucket: 'instagram-c8a45.appspot.com',
  messagingSenderId: '1061614238133',
  appId: '1:1061614238133:web:9a94aa746ccbdaeb9901fc',
}

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()

const db = getFirestore()
const storage = getStorage()

export { app, db, storage }

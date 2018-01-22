import { initializeApp } from 'firebase'

const app = initializeApp({
  apiKey: 'AIzaSyBzvaPqD39RaDLzF7TXivSlGla2Z0NUKWk',
  authDomain: 'cq2data.firebaseapp.com',
  databaseURL: 'https://cq2data.firebaseio.com',
  projectId: 'cq2data',
  storageBucket: 'cq2data.appspot.com',
  messagingSenderId: '123572184825'
})

export const db = app.database()
export const clientsRef = db.ref('clients')
export const ref = db.ref('counter')

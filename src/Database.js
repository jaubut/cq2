import firebase from 'firebase'

let config = {
  apiKey: 'AIzaSyBzvaPqD39RaDLzF7TXivSlGla2Z0NUKWk',
  authDomain: 'cq2data.firebaseapp.com',
  databaseURL: 'https://cq2data.firebaseio.com',
  projectId: 'cq2data',
  storageBucket: 'cq2data.appspot.com',
  messagingSenderId: '123572184825'
}
let firebaseApp = firebase.initializeApp(config)
let db = firebaseApp.database()
export default db

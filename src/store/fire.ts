import FIREBASE from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/database'
import 'firebase/firestore'
import 'firebase/functions'

FIREBASE.initializeApp({
  apiKey: 'AIzaSyBZCN7BcPCRqI-nqih_uSrEchwv3Q6vVBU',
  authDomain: 'watch-2019x.firebaseapp.com',
  databaseURL: 'https://touch-d0c06.firebaseio.com',
  projectId: 'watch-2019x',
  storageBucket: 'watch-2019x.appspot.com',
  messagingSenderId: '1058831529189'
})

const store = FIREBASE.firestore()
store.settings({
  timestampsInSnapshots: true
})

export default FIREBASE
export const DB = store
export const STORAGE = FIREBASE.storage().ref()

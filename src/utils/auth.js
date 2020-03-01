import { config } from '../config/firebase'

export const firebase = require('firebase')
// Required for side-effects
require('firebase/firestore')

export const fbase = firebase.initializeApp(config)
const db = fbase.firestore()

export var fbprovider = new firebase.auth.FacebookAuthProvider();
export var googleprovider = new firebase.auth.GoogleAuthProvider();

export default db
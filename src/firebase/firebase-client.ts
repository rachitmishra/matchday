import { initializeApp, getApps } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: 'AIzaSyC0mS0eAEoeCDXPbpO52GoURmcnOZqWDtU',
    authDomain: 'matchday-7cca5.firebaseapp.com',
    projectId: 'matchday-7cca5',
    storageBucket: 'matchday-7cca5.appspot.com',
    messagingSenderId: '855934031093',
    appId: '1:855934031093:web:28964d7819f3c6137da1bc',
}

const app = getApps().length <= 0 ? initializeApp(firebaseConfig) : getApps()[0]

export const clientAuth = getAuth(app)

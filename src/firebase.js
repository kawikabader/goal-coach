import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDSs1V9zisBLSJUnJMu0twUTjZz8KthhAI',
  authDomain: 'goal-coach-6541e.firebaseapp.com',
  databaseURL: 'https://goal-coach-6541e.firebaseio.com',
  projectId: 'goal-coach-6541e',
  storageBucket: '',
  messagingSenderId: '277816994560',
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
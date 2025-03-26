import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAR-VpCOxj844AXoGbveFPohHfD5nqN5cc',
  authDomain: 'app-interactive-elements.firebaseapp.com',
  projectId: 'app-interactive-elements',
  storageBucket: 'app-interactive-elements.firebasestorage.app',
  messagingSenderId: '695393772489',
  appId: '1:695393772489:web:70f5a69431996033d57e18',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

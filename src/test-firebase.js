// src/test-firebase.js
import { auth, db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';

// Test di Firestore
const testFirestore = async () => {
  try {
    const docRef = await addDoc(collection(db, 'test'), {
      message: 'Test Firebase',
      timestamp: new Date()
    });
    console.log('Document written with ID:', docRef.id);
  } catch (e) {
    console.error('Error adding document:', e);
  }
};

// Test di Auth
const testAuth = async () => {
  try {
    const user = auth.currentUser;
    console.log('Current user:', user);
  } catch (e) {
    console.error('Error checking auth:', e);
  }
};

// Esegui i test
testFirestore();
testAuth();
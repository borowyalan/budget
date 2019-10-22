import firebase from 'firebase/app'
import 'firebase/firestore'

  const firebaseConfig = {
    apiKey: "AIzaSyCG6D2s_3cXSpvknnu7JjHXYeKyO09C3Sw",
    authDomain: "budget-gagarina.firebaseapp.com",
    databaseURL: "https://budget-gagarina.firebaseio.com",
    projectId: "budget-gagarina",
    storageBucket: "budget-gagarina.appspot.com",
    messagingSenderId: "659002731653",
    appId: "1:659002731653:web:f3d834827e03a662514dec",
    measurementId: "G-LMRBESVC8S"
  };

	firebase.initializeApp(firebaseConfig);

	//debugging
	window.firebase = firebase;

	export const firestore = firebase.firestore(); 
	export default firebase;
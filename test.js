import firebase from "firebase/app";
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('g4Zk3l1WrJObJwLDbZwa').collection('cartItems')
.doc('YZZ3wzenwGwWPegns2yJ')

firestore.doc('users/g4Zk3l1WrJObJwLDbZwa/cartItems/YZZ3wzenwGwWPegns2yJ')
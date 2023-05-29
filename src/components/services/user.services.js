import { db } from "../../firebase";

import {
  collection,
//   getDocs,
//   getDoc,
  addDoc,
  updateDoc,
//   deleteDoc,
  doc,
} from "firebase/firestore";

const userCollectionRef = collection(db, "users");
class userDataService {
  addUsers = (newUser) => {
    return addDoc(userCollectionRef, newUser);
  };

  updateBook = (id, updatedUser) => {
    const userDoc = doc(db, "users", id);
    return updateDoc(userDoc, updatedUser);
  };

//   deleteBook = (id) => {
//     const bookDoc = doc(db, "books", id);
//     return deleteDoc(bookDoc);
//   };

//   getAllBooks = () => {
//     return getDocs(bookCollectionRef);
//   };

//   getBook = (id) => {
//     const bookDoc = doc(db, "books", id);
//     return getDoc(bookDoc);
//   };
}

export default new userDataService();
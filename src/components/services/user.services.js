/* eslint-disable import/no-anonymous-default-export */
import { db } from "../../firebase";

import {
  collection,
  getDocs,
  // getDoc,
  // addDoc,
  setDoc,
  // updateDoc,
  // deleteDoc,
  doc,
} from "firebase/firestore";

class userDataService {
  addUsers = (uid, userData) => {
    return setDoc(doc(db, "users", uid), {
      ...userData,
      uid: uid
    });
  };

  // updateUser = (id, updatedUser) => {
  //   const userDoc = doc(db, "users", id);
  //   return updateDoc(userDoc, updatedUser);
  // };

  // deleteUser = (id) => {
  //   const bookDoc = doc(db, "books", id);
  //   return deleteDoc(bookDoc);
  // };

  // getAllUsers = () => {
  //   return getDocs(userCollectionRef);
  // };

  // getUser = (id) => {
  //   const bookDoc = doc(db, "books", id);
  //   return getDoc(bookDoc);
  // };
}

export default new userDataService();
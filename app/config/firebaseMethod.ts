import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  where,
  deleteDoc,
  doc,
  updateDoc,
  DocumentData,
} from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { app } from "./firebaseConfig";

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Define types for User, Document, etc.
interface UserData {
  id?: string;
  email: string;
  password?: string;
  [key: string]: any;
}

interface FirebaseResponse {
  uid?: string;
  message?: string;
}

// Register user
const signUpUser = (obj: UserData): Promise<FirebaseResponse> => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, obj.email, obj.password as string);
      obj.id = res.user.uid;
      delete obj.password;
      await addDoc(collection(db, "users"), obj);
      resolve({ uid: res.user.uid });
    } catch (err) {
      console.log("Invalid information");
    }
  });
};

// Login user
const loginUser = (obj: UserData): Promise<UserData> => {
  return new Promise(async (resolve, reject) => {
    try {
      await signInWithEmailAndPassword(auth, obj.email, obj.password as string);
      const q = query(collection(db, "users"), where("id", "==", auth.currentUser?.uid));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => resolve(doc.data() as UserData));
    } catch (err) {
      reject(err);
    }
  });
};

// Signout User
const signOutUser = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    signOut(auth)
      .then(() => resolve("User signed out successfully"))
      .catch((error) => reject(error));
  });
};

// Send data to Firestore
const sendData = (obj: DocumentData, colName: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    addDoc(collection(db, colName), obj)
      .then(() => resolve("Data sent to DB successfully"))
      .catch((err) => reject(err));
  });
};

// Get data by user ID from Firestore
const getData = (colName: string, uid: string): Promise<DocumentData[]> => {
  return new Promise(async (resolve, reject) => {
    const dataArr: DocumentData[] = [];
    const q = query(collection(db, colName), where("uid", "==", uid));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => dataArr.push(doc.data()));
    if (dataArr.length) resolve(dataArr);
    else reject("Error occurred");
  });
};

// Get all data from a collection
const getAllData = (colName: string): Promise<DocumentData[]> => {
  return new Promise(async (resolve, reject) => {
    const dataArr: DocumentData[] = [];
    const querySnapshot = await getDocs(collection(db, colName));
    querySnapshot.forEach((doc) => {
      dataArr.push({ ...doc.data(), documentId: doc.id });
    });
    if (dataArr.length) resolve(dataArr);
    else reject("Error occurred");
  });
};

// Delete document by ID
const deleteDocument = (id: string, colName: string): Promise<string> => {
  return new Promise(async (resolve, reject) => {
    try {
      await deleteDoc(doc(db, colName, id));
      resolve("Document deleted");
    } catch (error) {
      reject("Error occurred");
    }
  });
};

// Update document by ID
const updateDocument = (obj: DocumentData, id: string, colName: string): Promise<string> => {
  return new Promise(async (resolve, reject) => {
    try {
      const updateRef = doc(db, colName, id);
      await updateDoc(updateRef, obj);
      resolve("Document updated");
    } catch (error) {
      reject("Error occurred");
    }
  });
};

// Upload image to Firebase storage
const uploadImage = async (file: File, email: string): Promise<string | undefined> => {
  const storageRef = ref(storage, email);
  try {
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    return url;
  } catch (error) {
    console.error("Upload image error:", error);
  }
};

export {
  auth,
  db,
  signUpUser,
  loginUser,
  signOutUser,
  sendData,
  getData,
  getAllData,
  deleteDocument,
  updateDocument,
  uploadImage,
};

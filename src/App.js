import { useEffect, useId, useState } from "react";
import { db } from "./firebase-config";
import { addDoc, collection, getDocs, doc, updateDoc } from "firebase/firestore";

function App() {
  const [users, setUsers] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const userCollectionRef = collection(db, "users");
  const uniqueId = useId();

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      setUsers(data.docs.map((doc)=>({ ...doc.data(), id: doc.id})))
    }

    getUsers();
  }, []);



  const createUser = async () => {
    await addDoc(userCollectionRef, { name: newName, password: newPassword });
    alert("클릭완료");
  };

  // const updateUser = async (name, password) => {
  //   const userDoc = doc(db, "users", name);
  //   const newField = {name : newName + password};
  //   await updateDoc(userDoc, newField);
  // }

  const showUsers = users.map((value) => (
    <div key={uniqueId}>
      <h6>Name: {value.name}</h6>
      <h6>passwordassword: {value.password}</h6>
      {/* <button onClick={()=>{updateUser(value.name, value.password)}}>Btn</button> */}
    </div>
  ));
  return (
    <>
      <div className="App">
        <input
          type="text"
          onChange={(event) => {
            setNewName(event.target.value);
          }}
        />
        <input
          type="text"
          onChange={(event) => {
            setNewPassword(event.target.value);
          }}
        />
        <button onClick={createUser}>가입</button>
        {showUsers}
      </div>
    </>
  );
}

export default App;

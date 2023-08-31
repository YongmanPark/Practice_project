import { useEffect, useState, useId } from "react";
import {firebase} from './firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import Login from "./Login";



function App() {

  const [userId, setUserId] = useState('');
  const userCollection = collection(firebase, 'users');
  const uKey = useId();
  useEffect(()=>{
    const getUser = async () => {
      const data = await getDocs(userCollection);
      const userId = data.docs[0]._document.data.value.mapValue.fields.userId.stringValue;
      setUserId(userId);
      //console.log(data.docs[0]._document.data.value.mapValue.fields.{userId}.stringValue);
    }
    getUser();
  },[])


  return (
    <div className="App">
        <Login/>
    {
      userId == 'master' ? <div>{userId} 성공</div> : <div>아이디를 잘못 입력하셨습니다.</div>
    }
    </div>
  );
}

export default App;
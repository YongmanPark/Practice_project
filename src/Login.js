import { useEffect, useState, useId } from "react";
import {firebase} from './firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

function Login(){

    const [inputId, setInputId] = useState('');
    const [inputPw, setInputpW] = useState('');

    const [userId, setUserId] = useState('');
    const userCollection = collection(firebase, 'users');
    const uKey = useId();

    const inputIdHandler = (e) =>{
        console.log("Id:" + e.target.value);
    }

    const inputPwHandler = (e) =>{
        console.log("pw:" + e.target.value);
    }

    const submitHandler = () =>{
        alert('gg');
    }

    useEffect(()=>{
      const getUser = async () => {
        const data = await getDocs(userCollection);
        const userId = data.docs[0]._document.data.value.mapValue.fields.userId.stringValue;
        setUserId(userId);
        //console.log(data.docs[0]._document.data.value.mapValue.fields.{userId}.stringValue);
      }
      getUser();
    },[])

    return(
        <>
            <div>
                <h2>Login</h2>
                <div>
                <label>ID:</label>
                <input type="text" onChange={inputIdHandler}/>
                </div>
                <div>
                <label>PW:</label>
                <input type="password" onChange={inputPwHandler}/>
                </div>
                <button onClick={submitHandler}>Login</button>
            </div>
        </>
    );
}

export default Login;
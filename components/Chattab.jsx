import { setDoc,doc} from 'firebase/firestore';
import React from 'react'

const Chattab = () => {
setDoc(doc(db, "users", user.uid), { uid:user.uid, email:email, name:name, req:[], realFriend:[] });

  return (
    <div>Chattab</div>
  )
}

export default Chattab
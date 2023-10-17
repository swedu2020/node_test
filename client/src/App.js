import {useEffect, useState} from 'react';
function App(){
  const [data, setData] = useState({});
  useEffect(()=>{
    fetch("/users").then(res=>res.json())
    .then(
      msg => setData(msg)
    )
  }, []);
  return(
    <div>
      {(typeof data.users === 'undefined') ? (
        <h1>Loading...</h1>
      ) : (
        data.users.map((user, i)=>(
          <li key={i}>{user}</li>
        ))
      )}
    </div>
  )
}
export default App;
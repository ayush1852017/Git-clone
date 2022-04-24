import { useEffect, useState } from "react";
import "../App.css";
export const Effectapi = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    try {
      let res = await fetch("https://api.github.com/users");
      setUsers(await res.json());
      console.log(users);
    } catch (error) {
      console.log("error:", error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h2>List of Github Users</h2>
      <div className='container'>
        {users.map((e) => {
          return (
            <div className='card'>
              <div className='img-title'>
                <div className='image'>
                  <img src={e.avatar_url} width='155' />
                </div>
                <h4 className='profile-name'>{e.login}</h4>
              </div>
              <div className='stats'>
                <div className='card-div'>
                  <span className='articals'>Articlas</span>
                  <span className='num1'>12</span>
                </div>
                <div className='card-div'>
                  <span className='followers'>followers</span>
                  <span className='num2'>120</span>
                </div>
                <div className='card-div'>
                  <span className='rating'>rating</span>
                  <span className='num3'>5</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

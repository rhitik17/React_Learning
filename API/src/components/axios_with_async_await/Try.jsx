import React, { useState, useEffect } from "react";
import axios from "axios";
import './try.css';

const TryAA = () => {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");


  //using Async Await
  const getData = async () => {

    try{
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setMyData(response.data);

    } catch(error){
        console.log(error);
    }
  };

  //calling the function
  useEffect(()=>{
    getData();

  }, []);

  return (
    <>
      <h1>Axios Tutorial</h1>
      {isError !== "" && <h2>{isError}</h2>}

      <div className=" grid">
        {myData.slice(0, 9).map((post) => {
          const { body, id, title } = post;
          return (
            <div key={id} className="card">
              <h2>{title.slice(0, 15).toUpperCase()}</h2>
              <p>{body.slice(0, 100)}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TryAA;

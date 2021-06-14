import React, { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);
  const [details, setDetails] = useState(null);
  const getData = () => {
    fetch("http://localhost:5000/api/v1/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
      });
  };

  async function onClick(e) {
    const id = e.target.dataset.id;
    await fetch(`http://localhost:5000/api/v1/product/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((details) => {
        console.log(details);
        // const detailArr = []
        // let newObject = {};
        // for (const [key, value] of Object.entries(details)) {
        //     newObject[key] = value;
        //   detailArr.push(newObject);
        // } 
        // console.log(detailArr)
        setDetails(details);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  
  return (
    <>
      <h1>Hello</h1>
      <div>
        {data &&
          data.map((product) => (
            <button onClick={onClick} data-id={product.id} key={product.id}>
              {product.label}
            </button>
          ))}
      </div>
      <div>
        {details && (
          <>
            <h3>{details.label}</h3>
            {/* <h3>{details.id}</h3> */}
            {/* <h3>{details.features}</h3> */}
            <ul>
            {details.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
            ))}
            </ul>
          </>
        )}
      </div>
    </>
  );
};

export default Home;

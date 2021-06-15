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
        setDetails(details);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  
  return (
    <div style={{textAlign:"center", display:'flex', flexDirection:"column"}}>
      <h1 style={{textDecoration: 'underline'}}>Product Page</h1>
      <div>
        {data &&
          data.map((product, idx) => (

            <button onClick={onClick} data-id={product.id} key={product.id} style={{padding:"10px", margin:"10px"}}>
              {product.label}, ${product.price}
            </button>

          ))}
      </div>
      <div>
        {details && (
          <div>
            <h3 style={{textDecoration:"underline"}}>{details.label}</h3>
            <ul style={{alignItems:"center", display:"inline-block", padding:'0', textAlign:'left'}}>
            {details.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
            ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;

import React from 'react';

const Details = ({details}) => {
    return (
      <div>
        {details && (
          <div>
            <h3 style={{ textDecoration: "underline" }}>{details.label}</h3>
            <ul
              style={{
                alignItems: "center",
                display: "inline-block",
                padding: "0",
                textAlign: "left",
              }}
            >
              {details.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
}
 
export default Details;
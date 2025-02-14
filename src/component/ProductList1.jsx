// import React from 'react';

const products = [
  {
    // Image: "https://want.am/wp-content/uploads/2024/12/robotime-doras-loft-box_1024x.webp",
    name: "Roombox-կաշին",
    description: "«Dora's Loft»",
    price: 23500,
    new: true,
  },
  {
    name: "UGREEN 2-1",
    description: "մարգագույն ինֆորմացինք",
    price: 22900,
    new: true,
  },
  {
    name: "UGREEN Uno RG 65W",
    description: "մարկայի ադակից",
    price: 19900,
    new: true,
  },
  {
    name: "QBIRX VINTAGE",
    description: "40x50",
    price: 9500,
    new: true,
  },
];

const ProductList1 = () => {
  return (
    <div style={styles.container}>
      {products.map((product, index) => (
        <div key={index} style={styles.productCard}>
          <img src={product.Image} alt={product.title} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p style={styles.price}>{product.price} ₔ</p>
          {product.new && <span style={styles.newTag}>NEW</span>}
          <button style={styles.button}>Անկախ</button>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    padding: '20px',
  },
  productCard: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '20px',
    margin: '10px',
    width: '200px',
    textAlign: 'center',
  },
  price: {
    fontWeight: 'bold',
  },
  newTag: {
    color: 'green',
    fontWeight: 'bold',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },

  
};

export default ProductList1;
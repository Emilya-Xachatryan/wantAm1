// import React from 'react';
import '../styles/ProductList2.css'; 

const items = [
  { icon: '🚚', text: 'Ստանդարտ և էքսպրես առաքում::' },
  { icon: '🌼', text: 'Կփաթեթավորենք Ձեր նվերը::' },
  { icon: '🎁', text: 'Չե՞ք կողմնորոշվում։ Ձեռք բերե՜ք մեր նվեր քարտերը։:' },
  { icon: '🍓', text: 'Ապրանքի փոխանակում 14 օրվա ընթացքում:' },
];

const ProductList2 = () => {
  return (
    <div className="container">
      {items.map((item, index) => (
        <div className="card" key={index}>
          <div className="icon">{item.icon}</div>
          <div className="text">{item.text}</div>
        </div>
      ))}
    </div>
  );
};

export default ProductList2;
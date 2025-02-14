// import React from "react";
import "../styles/ContentSection.css"
const ContentSection =() =>{
 

    const cards = [
      {
          image: 'https://want.am/wp-content/uploads/2024/12/snimok-ekrana-2024-12-01-v-19.28.08-%E2%80%94-krupnyj-razmer-1.jpeg',
          title: 'Հարի Փոթերի պարագաններ',
          subtitle: 'Երեխանների համար.',
      },
      {
          image: 'https://want.am/wp-content/uploads/2024/12/ugears-gift-ideas_promo-e1733162502649.jpg',
          title: 'Ugears',
          subtitle: 'Հոբբի.',
      },
      {
          image: 'https://want.am/wp-content/uploads/2024/12/snimok-ekrana-2024-12-01-v-19.23.24-e1733066647151.jpeg',
          title: 'Աստղադիտակներ',
          subtitle: 'Օպտիկա.',
      },
      {
          image: 'https://want.am/wp-content/uploads/2024/12/luna14sm-1-1000x1000-1-e1733162657428.jpg',
          title: 'Լուսանփոփներ',
          subtitle: 'Կանանց համար',
      },
  ];

  return (
      <div className="homepage">
          {cards.map((card, index) => (
              <div className="card" key={index}>
                  <img src={card.image} alt={card.title} />
                  <h3>{card.title}</h3>
                  <p>{card.subtitle}</p>
              </div>
          ))}
      </div>
  );
  

}

export default ContentSection
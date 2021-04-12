import React from 'react';

const Dessert = () => {
  return(
    <div className='item-div'>
      <div className="item-title"></div>
      
      <div className="items">
        <div className="item">
          <h4>Soda</h4>
          <p>Coke, Diet Coke, Mr.pibb, Lemonade, Fanta, Sprite<br />2.50</p>
        </div>

        <div className="item">
          <h4>Ramune</h4>
          <p>Japanese marble soda<br />2.99</p>
        </div>

        <div className="item">
          <h4>Iced Tea</h4>
          <p>2.50</p>
        </div>

        <div className="item">
          <h4>Green Iced Tea</h4>
          <p>2.50</p>
        </div>

        <div className="item">
          <h4>Hot Tea</h4>
          <p>Genmai<br />1.00</p>
        </div>

        <div className="item">
          <h4>Mochi Ice cream</h4>
          <p>strawberry, chocolate, mango<br />3.99</p>
        </div>
      </div>
    </div>
  );
}

export default Dessert;

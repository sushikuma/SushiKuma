import React from 'react';

const Beverage = () => {
  return(
    <>
    <div className="item-div">
      <div className="item-title"></div>
      <div className="items">
        <div className="item">
          <h4>Beer Bottle 12oz</h4>
          <p>Sapporo, Asahi, Kirin, Bud Light, Corona, Blue moon<br />3.95</p>
        </div>

        <div className="item">
          <h4>Draft Beer</h4>
          <p>Sapporo<br />12oz: 3.75 | 22oz: 6.50 | Pitcher: 15.95</p>
        </div>

        <div className="item">
          <h4>Wine</h4>
          <p>Red, White<br />Glass: 6.50</p>
        </div>

        <div className="item">
          <h4>Cold Sake</h4>
          <p>Premium Ginjo, Karatamba<br />13.95</p>
        </div>

        <div className="item">
          <h4>Nigori Sake</h4>
          <p>Unfiltered Sake<br />9.95</p>
        </div>

        <div className="item">
          <h4>Hot Sake</h4>
          <p>Sho chiku Bai<br />S: 3.50 | L: 6.50</p>
        </div>

        <div className="item">
          <h4>Sake Bomb</h4>
          <p>Sake & Sapporo Draft Beer<br />3.50</p>
        </div>

        <div className="item">
          <h4>Sake Rita</h4>
          <p>Sake, Margarita & One Choice of Bottled Beer<br />9.50</p>
        </div>

        <div className="item">
          <h4>Oyster Shooter</h4>
          <p>3.95</p>
        </div>
      </div>

      <div className="corkage" style={{marginTop: "20px", color: "#ddd"}}>*** Corkage Fee - 10.00 ***</div>
    </div>
    </>
  );
}

export default Beverage;

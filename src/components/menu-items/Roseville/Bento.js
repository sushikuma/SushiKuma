import React from 'react';

const Bento = () => {
    return (
        <div className="item-div">
            <div className="item-title">KUMA BENTO BOX</div>

            <div className="bento-description">Lunch: Before 4 pm &nbsp; 12.50<br />Dinner: After 4 pm &nbsp; 16.95<br /><span style={{fontSize: '20px'}}>* Served with soup, salad & rice *<br />* Duplicate choices charge extra $ 1*<br />* No substitution on bento box *</span></div>
            
            <div className="bento-items">
                <div className="item">Beef Teriyaki</div>
                <div className="item">Chicken Teriyaki</div>
                <div className="item">Salmon Teriyaki</div>
                <div className="item">Fish Katsu</div>
                <div className="item">Ton Katsu</div>
                <div className="item">Chicken Katsu</div>
                <div className="item">California Roll</div>
                <div className="item">Tuna Sashimi 4ps</div>
                <div className="item">Saba Shioyaki</div>
                <div className="item">Sake Nigiri 2pcs</div>
                <div className="item">Sesame Chicken</div>
                <div className="item">Gyoza - 4pc</div>
                <div className="item">Croquette – 2pcs</div>
                <div className="item">Bulgogi</div>
                <div className="item">Mixed Tempura (shrimp - 1pc , vegetable - 5pcs)</div>
            </div>
        </div>
    )
}

export default Bento;
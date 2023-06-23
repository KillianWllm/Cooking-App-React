import React from 'react';

const Card = ({ meals }) => {
    return (
        <div className="card">
            <img
                src={meals.strMealThumb}
                alt={"Photo de" + meals.strMeal} />
            <div className="infos">
                <h2>{meals.strMeal}</h2>
                <p>Origin : {meals.strArea}</p>
                <p>{meals.strInstructions}</p>
            </div>
        </div>
    );
};

export default Card;
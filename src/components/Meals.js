import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';

const Meals = () => {

    const [data, setData] = useState([]);
    const [inputSearch, setInputSearch] = useState("");

    useEffect(() => {
        axios
            .get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + inputSearch)
            .then((res) => setData(res.data.meals));
    }, [inputSearch]);

    return (
        <div className="meals">
            <input
                type="text"
                placeholder="Tapez le nom d'un aliment (en anglais)"
                onChange={(e) => setInputSearch(e.target.value)}
            />
            <section className="card-container">
                {
                    data && data.slice(0, 24).map((meals, idMeal) => (
                        <Card key={idMeal} meals={meals} />
                    ))}
            </section>
        </div>
    );
};

export default Meals;
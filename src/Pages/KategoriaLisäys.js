import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function KategoriaLisäys({url, selectedCategory, setSelectedCategory}) {
    const [categories, setCategories] = useState([]);

    const url = 'http://localhost/verkkopalveluprojekti-backend/';

    useEffect(() => {
        axios.get(url + 'products/getcategories.php')
        .then((response) => {
            const json = response.data;
            if (json) {
                if (selectedCategory === null) { 
                    setSelectedCategory(json[0]);
                }
                setCategories(json);
            }
        }).catch (error => {
            alert(error.response === undefined ? error : error.response.data.error);
        })
    }, [selectedCategory])

    function onCategoryChange(value) {
        setSelectedCategory(categories.filter(item => item.id === value));
    }

    return (
        <select value={selectedCategory?.id} onChange={(e) => onCategoryChange(e.target.value)}>
            {categories.map((tuoteryhma) => (
                <option key={tuoteryhma.tuoteryhmanro} value={tuoteryhma.tuoteryhmanro}>{tuoteryhma.tuoteryhmanimi}</option>
            ))}
        </select>
    )
}
import axios from 'axios';
import KategoriaLista from './KategoriaLista';
import React, { useState, useEffect } from 'react';

export default function ManageCategories({url}) {
    const [newCategory, setNewCategory] = useState("");
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [addingCategory, setAddingCategory] = useState(false);

    function saveCategory(e) {
        e.preventDefault();
        const json = JSON.stringify({name: newCategory});
        axios.post(url + 'products/addcategories.php',json,{
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        .then((response) => {
            setNewCategory('');
            setAddingCategory(false);
            setSelectedCategory(response.data);
        }).catch(error => {
            alert(error.response === undefined ? error : error.response.data.error);
        });
    }


    if (!addingCategory) {
    return (
        <>
            <h3>Hallinnoi kategorioita</h3>
            <br/>
            <div class='kategorialista'>
                <label>Kategoriat</label><br/>
                <KategoriaLista
                    url={url}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />
                <br/>
                <button className="btn btn-dark" type="button" onClick={()=> setAddingCategory(true)}>Lisää</button>
            </div>
        </>
    )
} else {
    return (
        <>
            <h3>Lisää uusi kategoria</h3>
            <form class='lisääkategoria' onSubmit={saveCategory}>
                <div>
                    <label>Kategorian nimi</label><br/>
                    <input type="text" value={newCategory} onChange={(e) => setNewCategory(e.target.value)}></input>
                </div><br/>
                <button type="button" onClick={() => setAddingCategory(false)}>Peruuta</button>
                <button type="submit">Tallenna</button>
            </form>
        </>
    )
}

}

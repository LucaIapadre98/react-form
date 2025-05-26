import { useState } from "react";

export default function Main(){
    // GESTIONE DELL'ARRAY //
    const [listTitle, setListTitle] = useState(["Html","Css","JavaScript","Express"]);

    //GESTIONE DEL NUOVO INPUT //
    const [newTitle, setNewTitle] = useState("");

    // FUNZIONE CHE PREVIENE L'INVIO DEL FORM IN PAGINA //
    const handleFormSubmit =(e) => {
        e.preventDefault(); 
        const newListTitle = [...listTitle, newTitle];
        setListTitle(newListTitle);
    };
    // FUNZIONE PER L'ELIMINAZIONE DI UN INPUT IN PAGINA //
    const handleDeleteTitle = (indexDelete) =>{
        const newListTitle = listTitle.filter((index) => index != indexDelete);
        setListTitle(newListTitle);
    };
    return (
        <main>
            <div className="container">
                <ul>
                   {listTitle.map((title, index) =>(
                    <li key={index} onClick={() =>handleDeleteTitle(index)}>{title}</li>
                    ))}
                </ul>
                <form onSubmit={handleFormSubmit}>
                    <input 
                        value={newTitle} 
                        onChange={(e)=>setNewTitle(e.target.value)}
                        className="form-control" 
                        type="text"
                    />
                    <button id="btn-add" className="btn btn-primary">Aggiungi</button>
                    <button id="btn-remove" className="btn btn-danger">Elimina</button>
                </form>
            </div>
        </main>
    );
}
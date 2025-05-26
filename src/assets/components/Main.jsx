import { useState } from "react";

export default function Main(){
    // GESTIONE DELL'ARRAY //
    const [listTitle, setListTitle] = useState(["Html","Css","JavaScript","Express"]);
    //GESTIONE DEL UOVO INPUT //
    const [newTitle, setNewTitle] = useState("");

    // PREVIENE L'INVIO DEL FORM IN PAGINA //
    const handleFormSubmit =(e) => {
        e.preventDefault(); 
        const newListTitle = [...listTitle, newTitle];
        setListTitle(newListTitle);
    };
    // FUNZIONE PER L'ELIMINAZIONE DI UN INPUT IN PAGINA //
    const handleDeleteTitle = (e) =>{
        const newListTitle = listTitle.filter((title,index) => index != 0);
    };
    return (
        <main>
            <div className="container">
                <ul>
                   {listTitle.map((title, index) =>(
                    <li key={index} onClick={()=>handleDeleteTitle()}>{title}</li>
                    ))}
                </ul>
                <form onSubmit={handleFormSubmit}>
                    <input 
                        value={newTitle} 
                        onChange={(e)=>setNewTitle(e.target.value)}
                        className="form-control" 
                        type="text"
                    />
                    <button className="btn btn-primary">Aggiungi</button>
                </form>
            </div>
        </main>
    );
}
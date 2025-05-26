export default function Main(){
    const listTitle = ["Html","Css","JavaScript"];

    // PREVIENE L'INVIO DEL FORM IN PAGINA //
    const handleFormSubmit =(e) => {
        e.preventDeFault();
    }
    
    return (
        <main>
            <div className="container">
                <ul>
                   {listTitle.map((title, index) =>(
                    <li key={index}>{title}</li>
                    ))}
                </ul>
                <form onSubmit={handleFormSubmit}>
                    <input className="form-control" type="text"></input>
                    <button className="btn btn-primary">Aggiungi</button>
                </form>
            </div>
        </main>
    );
}
export default function Main(){
    const listTitle = ["Html","Css","JavaScript"];
    
    return (
        <main>
            <div className="container">
                <ul>
                   {listTitle.map((title, index) =>(
                    <li key={index}>{title}</li>
                    ))}
                </ul>
                <input type="text"></input>
            </div>
        </main>
    );
}
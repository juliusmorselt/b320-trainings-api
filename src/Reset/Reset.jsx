import { fetchBooks, fetchAuthors, fetchGenres } from "../functions";
import { useAppContext } from "../AppContext";

export default function Reset() 
{
    const { setBooks, setAuthors, setGenres } = useAppContext();
    function resetData () 
    {
        if (window.confirm('Weet je zeker dat je wilt resetten?')) 
        {
            fetch("http://api.training.theburo.nl/reset", 
            {
                method: "GET",
                headers: 
                {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
            })
            .then(response => 
            {
                if (response.status === 204 || response.status === 200) 
                {
                    fetchBooks().then(booksRes => setBooks(booksRes));
                    fetchAuthors().then(authorsRes => setAuthors(authorsRes));
                    fetchGenres().then(genresRes => setGenres(genresRes));
                } 
                else 
                {
                    console.error("Error deleting book: ", response.status);
                }
            })
            .catch(error => 
            {
                console.error("Error deleting book: ", error);
            });
        } 
        else 
        {
            return;
        }
    }
    
    
    return(
        <button onClick={() => resetData()} className="text-white text-lg bg-red-700 px-4 py-2 rounded-lg shadow-lg">Reset Data</button>
    )

}
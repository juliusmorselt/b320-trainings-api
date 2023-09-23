export async function fetchAuthors() 
{
    try 
    {
        const response = await fetch(`http://api.training.theburo.nl/authors`)
        const authorsRes = await response.json()
        return authorsRes
    } 
    catch (error) 
    {
        console.error('Error fetching authors:', error)
    }
}



export async function fetchBooks() 
{
    try 
    {
        const response = await fetch(`http://api.training.theburo.nl/books`)
        const booksRes = await response.json()
        return booksRes;
    } 
    catch (error) 
    {
        console.error('Error fetching books:', error)
    }
}



export async function fetchGenres() 
{
    try 
    {
        const response = await fetch(`http://api.training.theburo.nl/genres`)
        const genresRes = await response.json()
        return genresRes;
    } 
    catch (error) 
    {
        console.error('Error fetching genres:', error)
    }
}



export async function fetchAuthorById(authorId) 
{
    try 
    {
        const response = await fetch(`http://api.training.theburo.nl/authors/${authorId}`)
        const authorRes = await response.json();
        return authorRes;
    } 
    catch (error) 
    {
        console.error(`Error fetching author with ID ${authorId}:`, error);
        throw error;
    }
}



export async function fetchGenreById(genreId) 
{
    try 
    {
        const response = await fetch(`http://api.training.theburo.nl/genres/${genreId}`)
        const genreRes = await response.json();
        return genreRes;
    } 
    catch (error) 
    {
        console.error(`Error fetching author with ID ${genreId}:`, error);
        throw error;
    }
}



export function addBook (bookName, specifiedAuthorId, specifiedGenreIds, setBooks) 
{
    fetch("http://api.training.theburo.nl/books", 
    {
        method: "POST",
        headers: 
        {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify
        ({
            name: bookName,
            author_id: specifiedAuthorId,
            genre_id: specifiedGenreIds
        })
    })
    .then (response => response.json())
    .then(newBook => {
        setBooks(prevBooks => [...prevBooks, newBook])
    })
    .catch(error => {
        console.error("Error adding book: ", error)
    })
}



export function deleteBook(specifiedBookId, setBooks) 
{
    fetch(`http://api.training.theburo.nl/books/${specifiedBookId}`, 
    {
        method: "DELETE",
        headers: 
        {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    })
    .then(response => 
    {
        if (response.status === 204 || response.status === 200) 
        {
            fetchBooks().then(booksRes => setBooks(booksRes));
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
  
  
  


export function updateBook (bookName, specifiedAuthorId, specifiedGenreIds, specifiedBookId, setBooks) 
{
    fetch(`http://api.training.theburo.nl/books/${specifiedBookId}`, 
    {
        method: "PUT",
        headers: 
        {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify
        ({
            name: bookName,
            author_id: specifiedAuthorId,
            genre_id: specifiedGenreIds
        })
    })
    .then(response => 
    {
        if (response.status === 204 || response.status === 200) 
        {
            fetchBooks().then(booksRes => setBooks(booksRes));
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


export function addAuthor(authorName, newAuthorAge, setAuthors) 
{
    fetch("http://api.training.theburo.nl/authors", 
    {
        method: "POST",
        headers: 
        {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify
        ({
            name: authorName,
            age: newAuthorAge 
        })
    })
    .then (response => response.json())
    .then(newAuthor => {
        setAuthors(prevAuthors => [...prevAuthors, newAuthor])
    })
    .catch(error => {
        console.error("Error adding author: ", error)
    })
}



export function deleteAuthor(specifiedAuthorId, setAuthors, setBooks) 
{
    fetch(`http://api.training.theburo.nl/authors/${specifiedAuthorId}`, 
    {
        method: "DELETE",
        headers: 
        {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    })
    .then(response => 
    {
        if (response.status === 204 || response.status === 200) 
        {
            fetchAuthors().then(authorsRes => setAuthors(authorsRes));
            fetchBooks().then(booksRes => setBooks(booksRes));
        } 
        else 
        {
            console.error("Error deleting book: ", response.status);
        }
    })
    .catch(error => 
    {
        console.error("Error deleting book: ", error);
    })
}



export function updateAuthor (authorName, newAuthorAge, specifiedAuthorId, setAuthors, setBooks) 
{
    fetch(`http://api.training.theburo.nl/authors/${specifiedAuthorId}`, 
    {
        method: "PUT",
        headers: 
        {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify
        ({
            name: authorName,
            age: newAuthorAge,
        })
    })
    .then(response => 
    {
        if (response.status === 204 || response.status === 200) 
        {
            fetchAuthors().then(authorsRes => setAuthors(authorsRes));
            fetchBooks().then(booksRes => setBooks(booksRes));
        } 
        else 
        {
            console.error("Error updating author: ", response.status);
        }
    })
    .catch(error => 
    {
        console.error("Error updating author: ", error);
    })
}



export function addGenre(genreName, setGenres) 
{
    fetch("http://api.training.theburo.nl/genres", 
    {
        method: "POST",
        headers: 
        {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify
        ({
            name: genreName,
        })
    })
    .then (response => response.json())
    .then(newGenre => {
        setGenres(prevGenres => [...prevGenres, newGenre])
    })
    .catch(error => {
        console.error("Error adding author: ", error)
    })
}



export function deleteGenre(specifiedGenreIds, setGenres, setBooks) 
{
    fetch(`http://api.training.theburo.nl/genres/${specifiedGenreIds}`, 
    {
        method: "DELETE",
        headers: 
        {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    })
    .then(response => 
    {
        if (response.status === 204 || response.status === 200) 
        {
            fetchGenres().then(genreRes => setGenres(genreRes));
            fetchBooks().then(booksRes => setBooks(booksRes));
        } 
        else 
        {
            console.error("Error deleting genre: ", response.status);
        }
    })
    .catch(error => 
    {
        console.error("Error deleting genre: ", error);
    })
}



export function updateGenre (genreName, specifiedGenreIds, setGenres, setBooks) 
{
    fetch(`http://api.training.theburo.nl/genres/${specifiedGenreIds}`, 
    {
        method: "PUT",
        headers: 
        {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify
        ({
            name: genreName
        })
    })
    .then(response => 
    {
        if (response.status === 204 || response.status === 200) 
        {
            fetchGenres().then(genreRes => setGenres(genreRes));
            fetchBooks().then(booksRes => setBooks(booksRes));
        } 
        else 
        {
            console.error("Error updating genre: ", response.status);
        }
    })
    .catch(error => 
    {
        console.error("Error updating genre: ", error);
    })
}
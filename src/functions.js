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



export function addBook (bookName, specifiedAuthorId, specifiedGenreIds) 
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
}



export function deleteBook (specifiedBookId) 
{
    fetch(`http://api.training.theburo.nl/books/${specifiedBookId}`, 
    {
        method: "DELETE",
        headers: 
        {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify
        ({
            id: specifiedBookId,
        })
    })
}



export function updateBook (bookName, specifiedAuthorId, specifiedGenreIds, specifiedBookId) 
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
}



export function addAuthor(authorName, newAuthorAge) 
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
}



export function deleteAuthor(specifiedAuthorId) 
{
    fetch(`http://api.training.theburo.nl/authors/${specifiedAuthorId}`, 
    {
        method: "DELETE",
        headers: 
        {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify
        ({
            id: specifiedAuthorId,
        })
    })
}



export function updateAuthor (authorName, newAuthorAge, specifiedAuthorId) 
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
}



export function addGenre(genreName) 
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
}



export function deleteGenre(specifiedGenreIds) 
{
    fetch(`http://api.training.theburo.nl/genres/${specifiedGenreIds}`, 
    {
        method: "DELETE",
        headers: 
        {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify
        ({
            id: specifiedGenreIds,
        })
    })
}



export function updateGenre (genreName, specifiedGenreIds) 
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
}
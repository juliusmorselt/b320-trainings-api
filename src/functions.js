//Fetch schrijvers
export async function fetchAuthors() {
    try {
        const response = await fetch(`http://api.training.theburo.nl/authors`)
        const authorsRes = await response.json()
        return authorsRes
    } catch (error) {
        console.error('Error fetching authors:', error)
    }
}

//Fetch titels
export async function fetchBooks() {
    try {
        const response = await fetch(`http://api.training.theburo.nl/books`)
        const booksRes = await response.json()
        return booksRes;
    } catch (error) {
        console.error('Error fetching books:', error)
    }
}

//Fetch genres
export async function fetchGenres() {
    try {
        const response = await fetch(`http://api.training.theburo.nl/genres`)
        const genresRes = await response.json()
        return genresRes;
    } catch (error) {
        console.error('Error fetching genres:', error)
    }
}





//Fetch schrijver bij ID
export async function fetchAuthorById(authorId) {
    try {
        const response = await fetch(`http://api.training.theburo.nl/authors/${authorId}`)
        const authorRes = await response.json();
        return authorRes;
    } catch (error) {
        console.error(`Error fetching author with ID ${authorId}:`, error);
        throw error;
    }
}

//Fetch genres bij ID
export async function fetchGenreById(genreId) {
    try {
        const response = await fetch(`http://api.training.theburo.nl/genres/${genreId}`)
        const genreRes = await response.json();
        return genreRes;
    } catch (error) {
        console.error(`Error fetching author with ID ${genreId}:`, error);
        throw error;
    }
}
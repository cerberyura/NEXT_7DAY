
export const getAllFilms = (): Promise<FilmsResponse> => {
    return fetch(`https://swapi.tech/api/films`).then(res=> res.json())
}
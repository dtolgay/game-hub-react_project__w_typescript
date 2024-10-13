import useGenres from '../hooks/useGenres';

const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  return (
    <ul>
      {data.map(genre => (
        <li>{genre.name}</li>
      ))}
    </ul>
  )
}

export default GenreList

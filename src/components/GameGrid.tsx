import { SimpleGrid, Skeleton, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';



const GameGrid = () => {

  const { data, error, isLoading } = useGames();
  const skelatons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={3} padding={10}>
        {isLoading && skelatons.map(skelaton => <GameCardContainer><GameCardSkeleton key={skelaton} /></GameCardContainer>)}
        {!isLoading && data.map(game => <GameCardContainer><GameCard key={game.id} game={game} /></GameCardContainer>)}
      </SimpleGrid>
    </>
  )
}

export default GameGrid

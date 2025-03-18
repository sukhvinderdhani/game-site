import useGames from "@/hooks/useGames";
import { Button, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import InfiniteScroll from "react-infinite-scroll-component";

// Error Fallback Component
const ErrorFallback = ({
  error,
  resetErrorBoundary,
}: {
  error: Error;
  resetErrorBoundary: () => void;
}) => (
  <div role="alert">
    <Text color="red.500" fontSize="lg">
      Something went wrong:
    </Text>
    <Text color="gray.600">{error.message}</Text>
    <Button onClick={resetErrorBoundary} colorScheme="red" mt={4}>
      Try Again
    </Button>
  </div>
);

const GameGrid = () => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } = useGames();

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  if (error) return <Text color="red.500">{error.message}</Text>;

  const fetchedGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => window.location.reload()}
    >
      <InfiniteScroll
        dataLength={fetchedGamesCount}
        hasMore={!!hasNextPage}
        next={() => fetchNextPage()}
        loader={<Spinner />}
      >
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
          padding="10px"
          gap={6}
        >
          {isLoading &&
            skeletons.map((skeleton) => (
              <GameCardContainer key={skeleton}>
                <GameCardSkeleton />
              </GameCardContainer>
            ))}
          {data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map((game) => (
                <GameCardContainer key={game.id}>
                  <GameCard game={game} />
                </GameCardContainer>
              ))}
            </React.Fragment>
          ))}
        </SimpleGrid>
      </InfiniteScroll>
    </ErrorBoundary>
  );
};

export default GameGrid;

import { Game } from '../hooks/useGames';
import {
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '../services/image-url';
import Emoji from './Emoji';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const { colorMode } = useColorMode();

  return (
    // Kinda ugly implementation but makes light mode look a little better
    <Card bgColor={colorMode === 'light' ? 'gray.100' : 'gray.700'}>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent='space-between' marginBottom={3}>
          <PlatformIconList // Only map if there are platforms
            platforms={game.parent_platforms?.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize='2xl'>
          {game.name}
          <Emoji rating={game.rating_top} />{' '}
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;

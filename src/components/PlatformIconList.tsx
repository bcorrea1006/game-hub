import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { HStack, Icon } from '@chakra-ui/react';
import { Platform } from '../hooks/useGames';
import { IconType } from 'react-icons';

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  // Handle scenario with no platform.
  // I'm looking at you "Hamsterinabol 2: Ham Harder"
  if (!platforms) return;

  // Called an index signature. Used so we don't have to specify name of keys
  // says there's any number of keys of type string that map to react's IconType
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color='gray.500' />
      ))}
    </HStack>
  );
};

export default PlatformIconList;


import { ImageBackground } from 'react-native';

import backgroundimg from '../../assets/background-galaxy.png'

import { styles } from './style';

interface Props {
    children: React.ReactNode;
}

export function Background({ children }: Props) {
  return (
    <ImageBackground 
    source={backgroundimg}
    defaultSource={backgroundimg}
    style={styles.container}

    >

        { children }    

    </ImageBackground>
  );
}
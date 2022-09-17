import React, { useEffect, useState } from 'react';
import {  Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import logoImg from '../assets/logo-nlw-esports.png'
import { Heading } from '../components/Heading';
import { styles } from './styles';
import { GameCard, GameCardProps } from '../components/GameCard';
import { Background } from '../components/background';
import {useNavigation} from '@react-navigation/native'

export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([])

  const navigation = useNavigation();

  function handleOpenGames({id, title, bannerUrl}: GameCardProps) {
    navigation.navigate('game', {id, title, bannerUrl});
  }

  useEffect(() =>{
    fetch('http://192.168.0.87:3333/games')
    .then(response => response.json())
    .then(data => setGames(data))
  }, [])


  return (

  <Background>
      <SafeAreaView style={styles.container}>
      
      <Image 
      source={logoImg}
      style={styles.logo}
      />

      <Heading 
      
      title='Encontre seu duo!'
      subtitle='Selecione um game que desje jogar...'
      />

      <FlatList
      data={games}
      keyExtractor={item=> item.id}
      renderItem={({item}) => (

          <GameCard
            data={item}
            onPress={()=> handleOpenGames(item)}
          />
      )}
      
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={styles.contentLit}
      />
      </SafeAreaView>
      
  </Background>
  );
}
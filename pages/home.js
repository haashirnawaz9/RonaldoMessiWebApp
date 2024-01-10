import React from 'react';
import { Platform, StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import Stats from '../stats.json';

export const Home = () => {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.backgroundImage}
          source={require('./images/ronaldomessi.jpeg')}>
        </ImageBackground>
  
        {Stats.map(stats => (
          <View style={styles.statContainer} key={stats.name}>
            <Text style={styles.name}>{stats.name}</Text>
            <Text style={styles.stat}>⚽ Goals: {stats.goals}</Text>
            <Text style={styles.stat}>🤝 Assists: {stats.assists}</Text>
            <Text style={styles.stat}>👟 Apps: {stats.apps}</Text>
            <Text style={styles.stat}>🏆 Trophies: {stats.trophies}</Text>
          </View>
        ))}
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      ...Platform.select({
        web: {
          maxWidth: 800,
          margin: 'auto',
        },
      }),
    },
    backgroundImage: {
      width: '100%',
      aspectRatio: 16 / 9, // Set the aspect ratio to maintain the image's proportion
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 30,
      overflow: 'hidden',
      marginBottom: 20,
      ...Platform.select({
        web: {
          maxWidth: '100%', // Make the image responsive on the web
        },
      }),
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#fff',
    },
    statContainer: {
      padding: 15,
      marginVertical: 10,
      borderRadius: 15,
      backgroundColor: '#fff',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      elevation: 2,
    },
    playerImage: {
      width: 100,
      height: 100,
      borderRadius: 50,
      marginBottom: 10,
      alignSelf: 'center',
    },
    name: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
      textAlign: 'center',
    },
    stat: {
      fontSize: 16,
      marginBottom: 5,
      textAlign: 'center',
    },
  });
  
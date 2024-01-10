import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button, Linking } from 'react-native';
import Stats from '../stats.json';

export const Messi = () => {
  const messihighlights = () => {
    const videoUrl = 'https://www.youtube.com/watch?v=QiUJfvA4oVY&ab_channel=Fad3nHD';
    Linking.openURL(videoUrl).catch((err) => console.error('An error occurred', err));
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.image} source={require('./images/messi.jpeg')} />

        <View style={styles.statContainer}>
          <Text style={styles.stat}>
            Goals: 810{'\n'}
            Assists: 360{'\n'}
            Apps: 1071{'\n'}
            Trophies: 44
          </Text>
        </View>
      </View>

      <Text style={styles.heading}>Background</Text>

      <Text style={styles.text}>
        Born in Rosario, Argentina in 1987 Lionel Messi is widely held to be one of the greatest
        football players of his generation — and with good reason. The record seven-time Ballon
        d’Or winner has conquered nearly every piece of football there is to claim over the course
        of his illustrious football career. Flashing his prodigious talent from a very young age, it
        was clear from the outset that Messi was a child phenom. At 13 years old, then receiving
        treatment for a growth hormone deficiency, Messi and his family relocated to Barcelona,
        where he began playing for FC Barcelona’s U14 team. Graduating quickly through the club’s
        ranks thanks to his ever-growing skill set, Messi made his first senior appearance for the
        club at the age of 17.
      </Text>

      <Text style={styles.heading}>Career History</Text>

      <Text style={styles.text}>
        Argentinian footballer Lionel Messi, widely regarded as one of the greatest players of all
        time, has received seven Ballon d'Or awards, the most for any football player, as well as
        the 2009 FIFA World Player of the Year, and the 2019 and 2022 The Best FIFA Men's Player.
        Messi holds the record for most goals in La Liga (474), the Supercopa de España (14), the
        UEFA Super Cup (3) and is the player with the most official recorded assists in football
        history (357). He has scored 806 goals for club and country throughout his professional
        career and is also the first and only player in history to win five and six European Golden
        Shoes. From Barcelona, he joined Paris-Saint-Germain for 2 seasons where during that time
        has won the 2022 FIFA World Cup with Argentina before recently joining Inter Miami in the MLS.
      </Text>

      <View style={styles.buttonContainer}>
        <Button title="Watch Messi's Highlights" onPress={messihighlights} color="#3498db" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  header: {
    flexDirection: 'row',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
    overflow: 'hidden', // Clip the border radius
  },
  image: {
    width: 200,
    height: 160,
    borderRadius: 8,
  },
  statContainer: {
    flex: 1,
    marginLeft: 10,
    padding: 15,
  },
  stat: {
    fontSize: 18,
    lineHeight: 30,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingTop: 15,
    paddingBottom: 10,
  },
  text: {
    fontSize: 15,
    marginBottom: 15,
    textAlign: 'justify',
  },
  buttonContainer: {
    marginBottom: 40,
  },
});

import React from 'react';
import { StyleSheet, Platform, Text, View, Image, ScrollView, Button, Linking } from 'react-native';
import Stats from '../stats.json';

export const Ronaldo = () => {
  const ronaldohighlights = () => {
    const videoUrl = 'https://www.youtube.com/watch?v=b2QFKIwQFpc&ab_channel=Legasus';

    Linking.openURL(videoUrl).catch((err) => console.error('An error occurred', err));
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.image} source={require('./images/ronaldo.jpeg')} />

        <View style={styles.statContainer}>
          <Text style={styles.stat}>
            Goals: 874{'\n'}
            Assists: 244{'\n'}
            Apps: 1202{'\n'}
            Trophies: 35
          </Text>
        </View>
      </View>

      <Text style={styles.heading}>Achievements</Text>

      <Text style={styles.text}>
        Portuguese footballer Cristiano Ronaldo dos Santos Aveiro (born 5 February 1985) plays as a
        striker for Al Nassr in the Saudi Professional League and is the squad captain for
        Portugal. Ronaldo, who is recognized as one of the all-time best players, holds the most
        European player accolades with five Ballon d'Or victories and four Golden Shoes. 34 trophies
        have been awarded to him during the course of his career, including the UEFA European
        Championship, the UEFA Nations League, five UEFA Champions Leagues, and seven league
        championships.
      </Text>

      <Text style={styles.heading}>Career History</Text>

      <Text style={styles.text}>
        Ronaldo began his senior career with Sporting CP, before signing with Manchester United in
        2003, winning the FA Cup in his first season. He would also go on to win three consecutive
        Premier League titles, the Champions League and the FIFA Club World Cup; at age 23, he won his
        first Ballon d'Or. Ronaldo was the subject of the then-most expensive association football
        transfer when he signed for Real Madrid in 2009 in a transfer worth €94 million. He became a
        key contributor and formed an attacking trio with Karim Benzema and Gareth Bale which was
        integral to the team winning four Champions League wins from 2014 to 2018, including La
        Décima. During this period, he won back-to-back Ballons d'Or in 2013 and 2014, and again in
        2016 and 2017, and was runner-up three times behind Lionel Messi, his perceived career rival.
        He also became the club's all-time top goalscorer and the all-time top scorer in the
        Champions League, and finished as the competition's top scorer for six consecutive seasons
        between 2012 and 2018. With Real, Ronaldo won two La Liga titles, two Copas del Rey, four
        Champions Leagues, three UEFA Super Cups and three Club World Cups. In 2018, he signed for
        Juventus in a transfer worth an initial €100 million, the most expensive transfer for an
        Italian club and for a player over 30 years old. He won two Serie A titles, two Supercoppa
        Italiana trophies and a Coppa Italia, became the inaugural Serie A Most Valuable Player and
        became the first footballer to finish as top scorer in the English, Spanish and Italian
        leagues. He returned to Manchester United in 2021, finishing his only full season as the
        club's top scorer, before his contract was terminated in 2022. In 2023, he signed for Al Nassr.
      </Text>

      <View style={styles.buttonContainer}>
        <Button title="Watch Ronaldo's Highlights" onPress={ronaldohighlights} color="#3498db" />
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
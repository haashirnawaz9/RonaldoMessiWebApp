import { StyleSheet, Text, View } from 'react-native';

export const Header = () => {
    return(
        <View style={styles.header}>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        paddingTop: 50,
        backgroundColor: 'white',
        height: 45,
    },
    title: {
        alignSelf: 'center',
        textAlign: 'center',
        fontSize: 23,
        fontWeight: 'bold',

    }
});

export default Header;
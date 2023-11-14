import React from 'react';
import {
 StyleSheet,
 Text,
 View,
 ScrollView,
 Image,
 Dimensions,
 TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');

const App = () => {
 return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Image
            style={styles.headerImage}
            source={{ uri: 'https://i.imgur.com/UwWuZJA.png' }}
          />
          <Text style={styles.headerText}>Perusahaan Catering</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Icon name="md-add" size={30} color="#FFF" />
            <Text style={styles.buttonText}>Pesanan Baru</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Icon name="md-navigate" size={30} color="#FFF" />
            <Text style={styles.buttonText}>Lokasi Antar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Icon name="md-calendar" size={30} color="#FFF" />
            <Text style={styles.buttonText}>Jadwal Pengiriman</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
 );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#fff',
 },
 scrollView: {
    paddingTop: 50,
 },
 header: {
    alignItems: 'center',
    paddingHorizontal: 20,
 },
 headerImage: {
    width: 100,
    height: 100,
    marginBottom: 20,
 },
 headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
 },
 buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 30,
 },
 button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#32CD32',
    borderRadius: 10,
    width: width / 3 - 30,
    height: height / 8,
    marginBottom: 20,
 },
 buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
    marginTop: 10,
 },
});

export default App;

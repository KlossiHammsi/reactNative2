import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const HomeScreen = ({ navigation }) => {

  const handleNavigateToProduct = () => {
    
    navigation.navigate('ProductDetail');
  };

  return (
    <View style={styles.wrapper}>
      {/* Nav Bar */}
      <View style={styles.navBar}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Brands')}>
          <Text style={styles.navText}>Brands</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Strap')}>
          <Text style={styles.navText}>Strap</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Bestsellers')}>
          <Text style={styles.navText}>Bestsellers</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navbarIcons}>
          <AntDesign name="search1" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navbarIcons}>
          <AntDesign name="shoppingcart" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navbarIcons}>
          <MaterialIcons name="account-circle" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Text style={styles.title}>Welcome to Watchers</Text>

          <TextInput
            style={styles.searchBar}
            placeholder="Search for watches..."
          />

          <Text style={styles.sectionTitle}>Featured Watches</Text>

          <View style={styles.productList}>
            {/* Product Item 1 */}
            <TouchableOpacity style={styles.productItem} onPress={handleNavigateToProduct}>
              <Image source={require('../assets/watch1.jpg')} style={styles.productImage} />
              <Text style={styles.productName}>Patek Philippe Nautilus 40 - 5712/1R-001 </Text>
              <Text style={styles.productPrice}>Rp3,500,000,000 IDR</Text>
            </TouchableOpacity>

            {/* Product Item 2 */}
            <TouchableOpacity style={styles.productItem} onPress={handleNavigateToProduct}>
              <Image source={require('../assets/watch2.jpg')} style={styles.productImage} />
              <Text style={styles.productName}>Audemars Piguet Royal Oak</Text>
              <Text style={styles.productPrice}>Rp502,162,688 IDR</Text>
            </TouchableOpacity>

            {/* Product Item 3 */}
            <TouchableOpacity style={styles.productItem} onPress={handleNavigateToProduct}>
              <Image source={require('../assets/watch3.jpg')} style={styles.productImage} />
              <Text style={styles.productName}>Richard Mille RM35-02 Red</Text>
              <Text style={styles.productPrice}>Rp6,489,729,000 IDR</Text>
            </TouchableOpacity>

            {/* Product Item 4 */}
            <TouchableOpacity style={styles.productItem} onPress={handleNavigateToProduct}>
              <Image source={require('../assets/watch4.jpg')} style={styles.productImage} />
              <Text style={styles.productName}>Rolex Daytona 40 - 126500 Cosmograph Black Steel</Text>
              <Text style={styles.productPrice}>Rp453,000,000 IDR</Text>
            </TouchableOpacity>

            {/* Product Item 5 */}
            <TouchableOpacity style={styles.productItem} onPress={handleNavigateToProduct}>
              <Image source={require('../assets/watch5.jpg')} style={styles.productImage} />
              <Text style={styles.productName}>Santos de Cartier | WSSA0029</Text>
              <Text style={styles.productPrice}>Rp502,162,688 IDR</Text>
            </TouchableOpacity>

            {/* Product Item 6 */}
            <TouchableOpacity style={styles.productItem} onPress={handleNavigateToProduct}>
              <Image source={require('../assets/watch6.jpg')} style={styles.productImage} />
              <Text style={styles.productName}>Tudor Black Bay</Text>
              <Text style={styles.productPrice}>Rp6,489,729,000 IDR</Text>
            </TouchableOpacity>

          </View>

          <Button title="View All Products" onPress={() => navigation.navigate('ProductList')} />
        </View>
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 Watchers. All rights reserved.</Text>
        <View style={styles.footerLinks}>
          <TouchableOpacity onPress={() => navigation.navigate('Terms')}>
            <Text style={styles.footerLinkText}>Terms</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Privacy')}>
            <Text style={styles.footerLinkText}>Privacy</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Contact')}>
            <Text style={styles.footerLinkText}>Contact Us</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 10,
  },
  navText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginHorizontal: 5,
  },
  navbarIcons: {
    padding: 5,
  },
  scrollContainer: {
    paddingTop: 70,
    paddingBottom: 20,
    paddingHorizontal: 10,
  },
  container: {
    flex: 1,
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  productItem: {
    width: '48%',
    marginBottom: 20,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
  },
  productImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 14,
    color: '#888',
  },

  footerText: {
    fontSize: 14,
    color: '#888',
  },
  footerLinks: {
    flexDirection: 'row',
    marginTop: 10,
  },
  footerLinkText: {
    fontSize: 14,
    color: '#007BFF',
    marginHorizontal: 10,
  },

});

export default HomeScreen;

import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';

const API_URL = 'https://random-data-api.com/api/users/random_user?size=80';

const UserInfoScreen = () => {
  const [users, setUsers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setUsers(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching user data:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#3498db" style={styles.loader} />;
  }

  const currentUser = users[currentIndex];

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={{ uri: currentUser.avatar }} style={styles.avatar} />
        <Text style={styles.label}>ID: <Text style={styles.value}>{currentUser.id}</Text></Text>
        <Text style={styles.label}>UID: <Text style={styles.value}>{currentUser.uid}</Text></Text>
        <Text style={styles.label}>Password: <Text style={styles.value}>{currentUser.password}</Text></Text>
        <Text style={styles.label}>First Name: <Text style={styles.value}>{currentUser.first_name}</Text></Text>
        <Text style={styles.label}>Last Name: <Text style={styles.value}>{currentUser.last_name}</Text></Text>
        <Text style={styles.label}>Username: <Text style={styles.value}>{currentUser.username}</Text></Text>
        <Text style={styles.label}>Email: <Text style={styles.value}>{currentUser.email}</Text></Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={[styles.button, currentIndex === 0 && styles.disabledButton]} 
          onPress={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))} 
          disabled={currentIndex === 0}>
          <Text style={styles.buttonText}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.button, currentIndex === users.length - 1 && styles.disabledButton]} 
          onPress={() => setCurrentIndex((prev) => Math.min(prev + 1, users.length - 1))} 
          disabled={currentIndex === users.length - 1}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    alignItems: 'center',
    width: '90%',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#3498db',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 5,
  },
  value: {
    fontWeight: 'normal',
    color: '#555',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default UserInfoScreen;

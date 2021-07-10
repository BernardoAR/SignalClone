import React, { useLayoutEffect } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, View, TouchableOpacity } from 'react-native';
import CustomListItem from '../components/CustomListItem';
import { auth, db } from '../firebase';
import { Avatar } from 'react-native-elements';
const HomeScreen = ({ navigation }) => {
  const signOutUser = () => {
    auth.signOut().then(() => {
      navigation.replace('Login');
    });
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Signal',
      headerStyle: {
        backgroundColor: 'white',
      },
      headerTitleStyle: { color: 'black' },
      headerTintColor: 'black',
      headerRight: () => {
        return (
          <View style={{ marginRight: 20 }}>
            <TouchableOpacity activeOpacity={0.5} onPress={signOutUser}>
              <Avatar rounded source={{ uri: auth?.currentUser?.photoURL }} />
            </TouchableOpacity>
          </View>
        );
      },
    });
  }, []);
  return (
    <SafeAreaView>
      <ScrollView>
        <CustomListItem />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

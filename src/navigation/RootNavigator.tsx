import React from 'react';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Import mock screens
import LoginForm from '../screens/Login/LoginScreen'
import NoteList from '../screens/NoteList/NoteList'
import BooksList from '../screens/BookList/BookList'

const Tab = createBottomTabNavigator()

const tabBarOptions = {
  showLabel: false,
  inactiveTintColor: '#2D3038',
  activeTintColor: '#FFFFFF',
  style: {
    height: '10%',
    backgroundColor: '#1E1B26'
  }
}

const screenOptions = (route:RouteProp<Record<string, object | undefined>, string>, color:string) => {
  let iconName:string = ""

  switch (route.name) {
    case 'Login':
      iconName = 'view-dashboard';
      break;
    case 'NotesList':
      iconName = 'bookmark-multiple-outline';
      break;
    case 'BooksList':
      iconName = 'view-dashboard';
      break;
    default:
      break;
  }

  return <MaterialCommunityIcons name={iconName} color={color} size={24} />;
}

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Login'
        tabBarOptions={tabBarOptions}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => screenOptions(route, color)
        })}
      >
        <Tab.Screen name='Login' component={LoginForm} />
        <Tab.Screen name='NotesList' component={NoteList} />
        <Tab.Screen name='BooksList' component={BooksList} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator
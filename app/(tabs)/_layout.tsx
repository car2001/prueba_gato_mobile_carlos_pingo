import { Redirect, Tabs, useRouter } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { ThemedView as View } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { useAuth } from '@/context/AuthContext';
import { UserProvider } from '@/context/UserContext';
import { useColorScheme } from '@/hooks/useColorScheme';
import { AddIcon, CalendarIcon, DocumentIcon, HomeIcon, NotificationsIcon } from '../../lib/Icons';

const TabNavigation = () => {
  const colorScheme = useColorScheme();
  const router = useRouter();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarStyle: Platform.select({
          default: {
            backgroundColor: '#fff',
            elevation: 10,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: -2,
            },
            shadowOpacity: 0.1,
            shadowRadius: 5,
            borderTopWidth: 0, 
          },
        }),
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          title: 'Calendario',
          tabBarIcon: ({ color }) => <CalendarIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="register"
        options={{
          title: 'Registrar',
          tabBarIcon: ({ color }) => (
            <View
              style={{
                backgroundColor: '#4608AD',
                borderRadius: 35,
                padding: 5,
                height:"auto"
              }}>
                <AddIcon color="#fff" />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="documents"
        options={{
          title: 'Documentos',
          tabBarIcon: ({ color }) => <DocumentIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: 'Notificaciones',
          tabBarIcon: ({ color }) => <NotificationsIcon color={color} />,
        }}
      />
    </Tabs>
  );
}

export default function TabLayout() {
  const { authState } = useAuth();
  const authenticated = authState?.authenticated;
  console.log(authenticated);

  return(
    !authenticated 
      ? <Redirect href="/" /> 
      : (
        <UserProvider>
          <TabNavigation />
        </UserProvider>
      )
  )
}

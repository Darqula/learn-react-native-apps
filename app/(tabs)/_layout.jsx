import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { FontAwesome } from '@expo/vector-icons'

export default function TabLayout() {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: 'blue', headerShown: false }}>
            <Tabs.Screen
                name='index'
                options={{ title: 'Home', tabBarIcon: ({ color }) => <FontAwesome size={28} name='home' color={color} /> }} />
            <Tabs.Screen
                name='smasher'
                options={{ title: 'Smasher App', tabBarIcon: ({ color }) => <FontAwesome size={24} name='image' color={color} /> }} />
            <Tabs.Screen
                name='home'
                options={{ href: null }} />
        </Tabs>
    )
}

const styles = StyleSheet.create({})
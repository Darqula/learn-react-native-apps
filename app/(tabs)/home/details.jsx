import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function details() {
  return (
    <View>
      <Text>Some details</Text>
      <Link href='..' asChild>
        <Pressable>
          <Text>Back</Text>
        </Pressable>
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({})
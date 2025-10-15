import { ActivityIndicator, ActivityIndicatorProps, StyleSheet, View } from 'react-native'
import React from 'react'
import { colors } from '@/constants/theme'

const Loading = ({size = 'large' ,color = colors.primaryDark}: ActivityIndicatorProps) => {
  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent:'center'
      
    }}>
      <ActivityIndicator color={color} size={size} />
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({})
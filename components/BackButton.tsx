import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '@/constants/theme'
import { BackButtonProps } from '@/types'
import { useRouter } from 'expo-router'
import { CaretLeftIcon } from 'phosphor-react-native'
import { verticalScale } from '@/utils/styling'

const BackButton = ({ style, iconSize = 26, color = colors.white }: BackButtonProps) => {

    const router = useRouter()

    const handleBackFunction = () => {
        router.back()
    }

    return (
        <TouchableOpacity onPress={handleBackFunction} style={[styles.button, style]}>
            <CaretLeftIcon size={verticalScale(iconSize)} color={color} weight='bold' />
        </TouchableOpacity>
    )
}

export default BackButton

const styles = StyleSheet.create({
    button: {

    }
})
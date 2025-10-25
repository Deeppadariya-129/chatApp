import { Alert, KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import { colors, radius, spacingX, spacingY } from '@/constants/theme'
import BackButton from '@/components/BackButton'
import Typo from '@/components/Typo'
import Input from '@/components/Input'
import * as Icon from 'phosphor-react-native'
import { verticalScale } from '@/utils/styling'
import { useRouter } from 'expo-router'
import Button from '@/components/Button'

const LoginPage = () => {

    const email = useRef('')
    const password = useRef('')

    const [isLoading, setisLoading] = useState(false)

    const router = useRouter()

    const handleSubmit = () => {
        console.log("Hello");

        if (!email.current || !password.current) {
            Alert.alert("Login", "Please fill all the fields")
        }

    }

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? "padding" : "height"}>
            <ScreenWrapper showPattern={true}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <BackButton iconSize={28} />
                        <Typo size={17} color={colors.white}>
                            Forgot password
                        </Typo>
                    </View>

                    <View style={styles.content}>
                        <ScrollView contentContainerStyle={styles.form} showsVerticalScrollIndicator={false}>
                            <View style={{ gap: spacingY._10, marginBottom: spacingY._15 }}>
                                <Typo size={28} fontWeight='bold'>Welcome Back</Typo>
                                <Typo color={colors.neutral600}>We are happy to see you</Typo>
                            </View>

                            <Input
                                placeholder='Enter Your Name'
                                icon={<Icon.At size={verticalScale(26)} color={colors.neutral600} />}
                                onChangeText={(value: string) => email.current = value}
                            />
                            <Input
                                placeholder='Enter Your Name'
                                icon={<Icon.PasswordIcon size={verticalScale(26)} color={colors.neutral600} />}
                                onChangeText={(value: string) => password.current = value}
                            />

                            <View style={{ marginTop: spacingY._25, gap: spacingY._15 }}>
                                <Button loading={isLoading} onPress={handleSubmit}>
                                    <Typo fontWeight='bold' color={colors.black} size={20}>Login</Typo>
                                </Button>
                            </View>


                            <View style={styles.footer}>
                                <Typo>Dont have an account</Typo>
                                <Pressable onPress={() => router.push('/(auth)/loginpage')}>
                                    <Typo color={colors.primaryDark} fontWeight='bold'>Sign up</Typo>
                                </Pressable>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </ScreenWrapper>
        </KeyboardAvoidingView>
    )
}

export default LoginPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between'
    },
    header: {
        paddingHorizontal: spacingX._20,
        paddingTop: spacingY._15,
        paddingBottom: spacingY._25,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center'
    },
    content: {
        flex: 1,
        backgroundColor: colors.white,
        borderTopLeftRadius: radius._50,
        borderTopRightRadius: radius._50,
        borderCurve: 'continuous',
        paddingHorizontal: spacingX._20,
        paddingTop: spacingY._20
    },
    form: {
        gap: spacingY._15,
        marginTop: spacingY._20
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5
    }
})
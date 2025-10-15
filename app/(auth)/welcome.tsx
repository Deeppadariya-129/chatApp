import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import Typo from '@/components/Typo'
import { colors, spacingX, spacingY } from '@/constants/theme'
import Animated, { FadeIn } from 'react-native-reanimated'
import { verticalScale } from '@/utils/styling'
import Button from '../../components/Button'
import { useRouter } from 'expo-router'

const Welcome = () => {

  const router = useRouter()

  const handleToRegister = () => {
    router.push('/(auth)/registerpage')
  }



  return (
    <ScreenWrapper showPattern={true} bgOpacity={0.5}>
      <View style={styles.container} >
        <View style={{alignItems:'center'}}>
          <Typo color={colors.white} size={30} fontWeight={'900'}>
            Omegggle
          </Typo>
        </View>

        <Animated.Image
        
          entering={FadeIn.duration(700).springify()}
          source={require('../../assets/images/welcome.png')}
          resizeMode={'contain'}
          style={styles.welcomeImage}

        />


        <View style={{ alignItems: 'center' }}>
          <Typo color={colors.white} size={33} fontWeight={'800'}>
            Stay Connected
          </Typo>
          <Typo color={colors.white} size={33} fontWeight={'800'}>
            with your friends
          </Typo>
          <Typo color={colors.white} size={33} fontWeight={'800'}>
            and family
          </Typo>
        </View>
        

        <Button style={{backgroundColor:colors.white}} onPress={handleToRegister} >
          <Typo size={23} fontWeight={'bold'}>
            Get Started
          </Typo>
        </Button>

      </View>
    </ScreenWrapper>
  )
}

export default Welcome

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    paddingHorizontal: spacingX._20,
    marginVertical: spacingY._10
  },
  background: {
    flex: 1,
    backgroundColor: colors.neutral900
  },
  welcomeImage: {
    height: verticalScale(300),
    aspectRatio: 1,
    alignItems:"center"
  }
})
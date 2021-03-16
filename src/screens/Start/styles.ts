import { StyleSheet } from 'react-native'
import theme from '../../theme'

export default StyleSheet.create({
    startScreen: {
        height: '100%',
        backgroundColor: theme.color.whitish,
    },
    roundedBtn: {
        zIndex: 999,
        width: 70,
        height: 70,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.color.primary,
        borderRadius: 35,
        elevation: 10,
    },
})

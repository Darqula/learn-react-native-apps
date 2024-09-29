import { Link } from "expo-router"
import { Text, View, StyleSheet, Pressable } from "react-native"

export default function HomePage() {

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Hello, Expo router!</Text>
            <Link style={styles.button} href='/home/details' asChild>
                <Pressable >
                    <Text style={styles.buttonTitle}>Go deeper</Text>
                </Pressable>
            </Link>
        </View>
    )
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: '#ff0',
        paddingHorizontal: 12,
        paddingVertical: 8,
        marginTop: 8
    },
    buttonTitle: {
        fontSize: 16
    }
})
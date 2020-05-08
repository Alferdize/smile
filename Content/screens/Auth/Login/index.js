import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const index = () => {
    return (
        <View>
            <Text style={styles.textstyle}>Login</Text>
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    textstyle:{
        fontSize:18
    }
})

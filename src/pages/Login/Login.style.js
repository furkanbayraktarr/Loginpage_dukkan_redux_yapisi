import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#64b5f6'
    },
    logo:{
        height: Dimensions.get('window').height / 3,
        width: Dimensions.get('window').width,
        resizeMode:'contain',
        tintColor:'white',
    },
    logo_container:{
        
        flex:1,
        justifyContent:'center'
    },
    body_container:{
        flex:1
    },


})
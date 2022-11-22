import { NavigationHelpersContext, useNavigation } from "@react-navigation/native";
import React from "react";
import { Text , StyleSheet, View, Button,Image, TextInput, TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import '../assets/Bond.png'
import Oca from "./Oca";
import Chooser from "./Chooser";
const SignIn = ()=>{

    const navigation = useNavigation();

    return(
        < View style={styles.mainView}>

            
                
            <View style={styles.BottomView}>
                <Text style={styles.Heading}>
                    Welcome {'\n'}
                    back
                </Text>
                <View style ={styles.FormView}>

                     <TextInput placeholder={"Email address*"} 
                    placeholderTextColor={"#fff"}
                    keyboardType={"default"}
                    style = {styles.TextInput}
                    secureTextEntry={false}
                    borderColor={'#fff'}/>
                    
                    <TextInput placeholder={"Password*"}
                    placeholderTextColor={"#fff"}
                    keyboardType ={'default'} 
                    style = {styles.TextInput}
                    borderColor={'#fff'}
                    secureTextEntry={true}
                    />

                    <TouchableOpacity style = {styles.Button}>
                        <Text style = {styles.ButtonText}> Sign in</Text>
                    </TouchableOpacity>
                    
                    

                   
                    
                </View>

                <TouchableOpacity style = {styles.TextButton} onPress={()=>navigation.navigate("SignUp")}>
                    <Text style = {styles.SignUpText}>
                    Sign Up
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.TextButton} onPress={()=>navigation.navigate("Chooser")}>
                    <Text style = {styles.SignUpText}>
                    Card chooser
                    </Text>
                </TouchableOpacity>

                

                
                
            </View>
        
        </View>
        
    )
}


    

const styles = StyleSheet.create({

    mainView:{
        marginTop:40,
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        
        



    },
    TopView:{

        width:'100%',
        height:'30%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',

        

    },
    BottomView:{
        width:'100%',
        height:'70%',
        backgroundColor:'#000',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,


        
    },
    imageStyle:{
        width:'30%',
        resizeMode:'contain',
    },
    Heading:{

        color:'#fff',
        fontSize:'40',
        fontWeight:'bold',
        marginLeft:30,
        marginTop:60,


    },
    TextInput:{

        width:'80%',
        borderWidth:2,
        borderColor:'#white',
        height:50,
        borderRadius:15,
        paddingLeft:5,
        marginTop:20,
        color:'#fff',

        

    },

    FormView:{

        width:'100%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        marginTop:30,




    },

    Button:{

        width:'90%',
        color:'#000',
        height:52,
        backgroundColor:'#fff',
        borderRadius:10,
        marginTop:20,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',






    },
    ButtonText:{
        fontSize:18,
        fontWeight:'bold',
        

    },

    SignUpText:{
        color:'gray',


    },

    TextButton:{

        width:'100%',
        display:'flex',
        alignItems:'center',
        marginTop:20,



    },


})


export default SignIn
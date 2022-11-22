import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text , StyleSheet, View,Image,TextInput,TouchableOpacity, ScrollView} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const SignUp = ()=>{

    const navigation = useNavigation();
    return(
        < View style={styles.mainView}>

           
                
            <ScrollView style={styles.BottomView}>
                <Icon onPress={()=>navigation.navigate("SignIn")} name="chevron-left" size={60} color={"#fff"}></Icon>
                <Text style={styles.Heading}>
                    Welcome {'\n'}
                    back
                </Text>
                <View style ={styles.FormView}>

                     <TextInput placeholder={"Full Name*"} 
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
                    <TextInput placeholder={"Confirm Password*"}
                    placeholderTextColor={"#fff"}
                    keyboardType ={'default'} 
                    style = {styles.TextInput}
                    borderColor={'#fff'}
                    secureTextEntry={true}
                    />
                    <TextInput placeholder={"Mobile Number*"}
                    placeholderTextColor={"#fff"}
                    keyboardType ={'default'} 
                    style = {styles.TextInput}
                    borderColor={'#fff'}
                    secureTextEntry={false}
                    />
                    

                    <TouchableOpacity style = {styles.Button}>
                        <Text style = {styles.ButtonText}> Sign up</Text>
                    </TouchableOpacity>
                    
                    

                   
                    
                </View>

                <TouchableOpacity style = {styles.TextButton} onPress={()=>navigation.navigate("SignIn")}>
                    <Text style = {styles.SignUpText}>
                    Go back to sign in
                    </Text>
                </TouchableOpacity>
                
                
            </ScrollView>
        
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
        height:'20%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',

        

    },
    BottomView:{
        width:'100%',
        height:'85%',
        backgroundColor:'#000',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,


        
    },
    imageStyle:{
        width:'15%',
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


export default SignUp
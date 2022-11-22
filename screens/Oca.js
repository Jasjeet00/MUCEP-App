import { View, Text,TextInput,ScrollView,Button , StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'


const Oca = () => {

    const navigation = useNavigation();
  return (
       
    <SafeAreaView style={styles.container}>
    <Formik
      initialValues={{ name: '', date: '', ttc: '',us: '', cr: '', ct: '', other:'',  }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {props => (
        <ScrollView>
          <Text style={styles.input}>
            Resident Information
          </Text>
          <TextInput
            style={styles.input}
            placeholder='Resident'
            onChangeText={props.handleChange('name')}
            value={props.values.name}
          />

          <TextInput
            style={styles.input}
            multiline
            placeholder='Date'
            onChangeText={props.handleChange('date')}
            value={props.values.date}
          />
          <Text style={styles.input}>
            Total Call Volume :
            
          </Text>
          <TextInput
            style={styles.input}
            multiline
            placeholder='US:'
            onChangeText={props.handleChange('us')}
            value={props.values.us}
          />
          <TextInput
            style={styles.input}
            multiline
            placeholder='CR:'
            onChangeText={props.handleChange('cr')}
            value={props.values.cr}
          />
          <TextInput
            style={styles.input}
            multiline
            placeholder='CT:'
            onChangeText={props.handleChange('ct')}
            value={props.values.ct}
          />
          <TextInput
            style={styles.input}
            multiline
            placeholder='OTHER:'
            onChangeText={props.handleChange('other')}
            value={props.values.other}
          />
          
          
         

          <Text style={styles.input}>
            Staff/ Jr. Staff Assessment
            
          </Text>

          <Text style={styles.input}>
            Diagnostic Ability( Medical Expert):
            
          </Text>


          
          <TouchableOpacity style={styles.button} color='maroon' title="Submit" onPress={props.handleSubmit} >
            
            <Text style={styles.buttonText}> Submit evaluation</Text>
            
          </TouchableOpacity> 
        </ScrollView>
      )}
    </Formik>
  </SafeAreaView>
  )
}
const styles = StyleSheet.create({

    titleText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
      },
      paragraph: {
        marginVertical: 8,
        lineHeight: 20,
      },
      container: {
        flex: 1,
        padding: 20,
        justifyContent:'center',
      },
      input: {
        borderWidth: 1,
        borderStyle:'solid',

        borderColor: 'green',
        padding: 10,
        fontSize: 18,
        borderRadius: 6,
      },
      button:{
        width:'90%',
        color:'#000',
        height:52,
        backgroundColor:'#fff',
        borderRadius:10,
        marginTop:20,
        display:'flex',
        alignItems:'center',
      },
      buttonText:{
        fontSize:18,
        fontWeight:'bold',
        

      }

})

export default Oca
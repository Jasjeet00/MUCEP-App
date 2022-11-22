import { View, Text, StyleSheet,Button, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Dpa = () => {
  return (
  
      
    <SafeAreaView style={styles.container}>
    <Formik
      initialValues={{ resident: '', rotation: '', date: '', cr: '', ct: '', us: '', mr: '', rf: '', mg: '', nm: '', ir: '', other: '', tahd: ''}}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {props => (
        <ScrollView>
          <Text style={styles.input}>Resident Information</Text>
          <TextInput
            style={styles.input}
            placeholder='Resident'
            onChangeText={props.handleChange('resident')}
            value={props.values.resident}
          />

          <TextInput
            style={styles.input}
            multiline
            placeholder='Rotation'
            onChangeText={props.handleChange('rotation')}
            value={props.values.rotation}
          />
          <Text style={styles.input}>Volume:</Text>
          <TextInput
            style={styles.input}
            multiline
            placeholder='CR'
            onChangeText={props.handleChange('cr')}
            value={props.values.cr}
          />
          <TextInput
            style={styles.input}
            multiline
            placeholder='CT'
            onChangeText={props.handleChange('ct')}
            value={props.values.ct}
          />
          <TextInput
            style={styles.input}
            multiline
            placeholder='US'
            onChangeText={props.handleChange('us')}
            value={props.values.us}
          />
          <TextInput
            style={styles.input}
            multiline
            placeholder='MR'
            onChangeText={props.handleChange('mr')}
            value={props.values.mr}
          />
          <TextInput
            style={styles.input}
            multiline
            placeholder='RF'
            onChangeText={props.handleChange('rf')}
            value={props.values.rf}
          />
          <TextInput
            style={styles.input}
            multiline
            placeholder='MG'
            onChangeText={props.handleChange('mg')}
            value={props.values.mg}
          />
          <TextInput
            style={styles.input}
            multiline
            placeholder='NM'
            onChangeText={props.handleChange('nm')}
            value={props.values.nm}
          />
          
          <TextInput
            style={styles.input}
            multiline
            placeholder='IR'
            onChangeText={props.handleChange('ir')}
            value={props.values.ir}
          />
          <TextInput
            style={styles.input}
            multiline
            placeholder='OTHER:'
            onChangeText={props.handleChange('other')}
            value={props.values.other}
          />
          <TextInput
            style={styles.input}
            multiline
            placeholder='TEACHING/ AHD'
            onChangeText={props.handleChange('tahd')}
            value={props.values.tahd}
          />
          
         

          <Text style={styles.input}> Staff Information</Text>
          
          <TouchableOpacity style ={styles.button} title="Submit Evaluation" onPress={props.handleSubmit} >
            <Text style={styles.buttonText}> Submit Evaluation</Text>
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
        marginTop:20,
        

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

export default Dpa
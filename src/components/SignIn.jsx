import { useFormik } from 'formik';
import Text from './Text';
import { View, StyleSheet, TextInput, TextField, Pressable } from 'react-native';
const styles = StyleSheet.create({
    container: {
      padding: 10,
    },
    input: {
        height: 40,
        width: 100,
        borderColor: '#ccc', // Border color for the input box
        borderWidth: 1, // Border width for the input box
        marginBottom: 10, // Space between the input boxes
        padding: 10, // Padding inside the input box
        borderRadius: 5, // Optional: Adds rounded corners to the input box
        backgroundColor: '#fff', // Optional: Sets a background color for the input box
      },
    button: {
      height: 40,
      width: 80,
      padding: 10,
      backgroundColor: '#007bff', 
      justifyContent: 'center', // Centers the text vertically
      alignItems: 'center', // Centers the text horizontally
      borderRadius: 5,
    },
  });
const initialValues={
    username: '',
    password:''
}
const onSubmit = (values) => {
    console.log(values);
  };
  
const SignIn = () => {
    const formik = useFormik ({
        initialValues,
        onSubmit
    })


  return (
  <View style={styles.container}>
    <TextInput style={styles.input}
      placeholder="username"
      value={formik.values.username}
      onChangeText={formik.handleChange('username')}
    />
    <TextInput style={styles.input}
      placeholder="password"
      value={formik.values.password}
      onChangeText={formik.handleChange('password')}
    />
    <Pressable onPress={formik.handleSubmit}>
      <Text style={styles.button}>Sign in</Text>
    </Pressable>
    
  </View>
  
  )
};

export default SignIn;
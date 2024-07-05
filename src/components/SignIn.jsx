import { useFormik } from 'formik';
import Text from './Text';
import * as yup from 'yup';
import { View, StyleSheet, TextInput, TextField, Pressable } from 'react-native'
import useSignIn from '../hooks/useSignIn';
const validationSchema = yup.object().shape({
    username: yup
    .string()
    .required('Username is required'),
    password: yup
    .string()
    .required('Password is required')
})


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
    errorInput: {
        borderColor: 'red',
      },
    
  });

const initialValues={
    username: '',
    password:''
}

  
const SignIn = () => {

  const [signIn] = useSignIn(); 

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const data = await signIn({ username, password });
      console.log('Sign-in successful:', data);
    } catch (error) {
      console.error('Sign-in error:', error);
    }
  };
    const formik = useFormik ({
        initialValues,
        validationSchema,
        onSubmit
    })


  return (
  <View style={styles.container}>
    <TextInput
        style={[
          styles.input,
          formik.touched.username && formik.errors.username && styles.errorInput
        ]}
        placeholder="Username"
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
      
      />
      {formik.touched.username && formik.errors.username && (
        <Text style={{ color: 'red' }}>{formik.errors.username}</Text>
      )}
      <TextInput
        style={[
          styles.input,
          formik.touched.password && formik.errors.password && styles.errorInput
        ]}
        placeholder="Password"
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}   
      />
      {formik.touched.password && formik.errors.password && (
        <Text style={{ color: 'red' }}>{formik.errors.password}</Text>
      )}
      <Pressable style={styles.button} onPress={formik.handleSubmit}>
        <Text style={styles.buttonText}>Sign In</Text>
      </Pressable>
    </View>
    

  
  )
};

export default SignIn;
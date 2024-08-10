import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginP1 from './src/componentes/screen/login/LoginP1'
import Loginp2 from './src/componentes/screen/login/LoginP2';
import MenuPrincipal from './src/componentes/screen/Dash/MenuPrincipal';
import Navegation from './src/componentes/screen/Navegation';

export default function App() {
  return (
    <View style={styles.container}>
    <StatusBar style="auto" />
   
    <Loginp2/>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   textAlign:"center",
    backgroundColor: "#CDCDCD",
  
  },
});
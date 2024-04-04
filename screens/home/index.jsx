import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";


export default function Home(){
    return(
        <View style={styles.container}>
            <View style={styles.primeira}>
            <Image style={styles.img} source={require('../../../assets/ceu.jpg')} />

            
            <View style= {styles.form}>
            
                        
                <TextInput style={styles.input}
               
                />
                <TouchableOpacity 
                >
                    <Image style={styles.icon}
                    source={require('../../../assets/pesquisa.png')}
                    />
                </TouchableOpacity>
                        
            
            </View>
            <View style={styles.campo}>
            <Image style={styles.img1} source={require('../../../assets/blob_gm7y.jpg')} />

            <TextInput style={styles.input1}
               
                />
                </View>
        </View>
        </View>

    )
}

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Text, Button, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function App2() {
    const navigation = useNavigation();

    return ( 
        <View style = { styles.body } >
            <View style={{flex:2, flexDirection:'row', justifyContent:'flex-start', padding:'20px' }}>
                <Image style={{ flex: 1, borderRadius:15, height:"132px", width:"112px", resizeMode:'contain', padding:'20px'}} source={require('./assets/vs_blue.png')}></Image>
                <View style={{ flex: 2}} > 
                    <Text style={{fontSize:'15px', fontWeight:200}}>Điện Thoại Vsmart Joy 3</Text>
                    <Text style={{fontSize:'15px', fontWeight:200}}>Hàng chính hãng</Text>
                </View>
            </View>

            <View style={{flex:7, backgroundColor: '#C4C4C4', padding:'20px'}}>
                <Text style={{fontSize:'15px', fontWeight:200}}>Chọn một màu bên dưới:</Text>
                <View style={{alignItems:'center'}}>
                    <View style={{flex:2, padding:'5px'}}>
                        <TouchableOpacity style={{backgroundColor: '#C5F1FB'}}>
                            <Text style={{color:'#C5F1FB', width:'80px', height:'85px'}}></Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:2, padding:'5px'}}>
                        <TouchableOpacity style={{backgroundColor: '#F30D0D'}}>
                            <Text style={{color:'#F30D0D', width:'80px', height:'85px'}}></Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:2, padding:'5px'}}>
                        <TouchableOpacity style={{backgroundColor: '#000000'}}>
                            <Text style={{color:'#000000', width:'80px', height:'85px'}}></Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:2, padding:'5px'}}>
                        <TouchableOpacity style={{backgroundColor: '#234896'}}>
                            <Text style={{color:'#234896', width:'80px', height:'85px'}}></Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={{flex:1, padding:'20px', backgroundColor:'#C4C4C4'}}>
                <TouchableOpacity style={{borderRadius:'15px' ,alignItems: 'center',backgroundColor: '#1952E2', padding: '10px'}}>
                    <Text style={{color:'#F9F2F2'}}>XONG</Text>
                </TouchableOpacity>
            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        width: '360px',
        height: '640px',
        
    },
});
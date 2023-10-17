
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Text, Button, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useContext, useEffect, useRef, useState } from 'react';
import { propContext } from './App';

export default function App1() {
    const navigation = useNavigation();

    // const [img, setImg] = useState((require('./assets/vs_blue.png')));
    const {img, setImg}  = useContext(propContext)


    return ( 
        <View style = { styles.body } >
            <View style={{flex:5, alignItems:'center'}}> 
                <Image style={{ flex: 1, borderRadius:15, height:"361px", width:"301px", resizeMode:'contain'}} source={img}></Image>
            </View>
            <View style={{flex: 3}}> 
                <Text style={{fontSize:'15px', fontWeight:200}}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
                <View style={{flexDirection:'row'}}>
                    <Image style={{ flex: 1, borderRadius:15, height:"25px", width:"23px"}} source={require('./assets/star.png')}></Image>
                    <Image style={{ flex: 1, borderRadius:15, height:"25px", width:"23px"}} source={require('./assets/star.png')}></Image>
                    <Image style={{ flex: 1, borderRadius:15, height:"25px", width:"23px"}} source={require('./assets/star.png')}></Image>
                    <Image style={{ flex: 1, borderRadius:15, height:"25px", width:"23px"}} source={require('./assets/star.png')}></Image>
                    <Image style={{ flex: 1, borderRadius:15, height:"25px", width:"23px"}} source={require('./assets/star.png')}></Image>
            
                    <Text style={{flex:5 , fontSize:'15px', fontWeight:200}}>        (Xem 828 đánh giá)</Text>
                </View>

                <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                    <Text style={{flex:8 , fontSize:'15px', textDecorationStyle:'dashed'}}>1.790.000 đ</Text>
                    <Text style={{flex:6 , fontSize:'15px', textDecorationLine:'line-through'}}>1.790.000 đ</Text>
                </View>

                <View style={{flexDirection:'row'}}>
                    <Text style={{fontSize:'15px', marginRight:'15px', color:'#f50000'}}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
                    <Image style={{borderRadius:15, height:"20px", width:"20px"}} source={require('./assets/Group 1.png')}></Image>
                </View>


                <View style={{flex:3}}>
                    <TouchableOpacity onPress={()=> navigation.navigate('App2')} style={{borderRadius:'15px' ,alignItems: 'center',backgroundColor: '#e6e1e1',padding: '10px'}}>
                        <Text style={{color:'#000000'}}>4 MÀU-CHỌN MÀU</Text>
                    </TouchableOpacity>
                </View>
                


            </View>
            <View style={{flex: 3}}> 
                <Button color='#ed070f' title='CHỌN MUA'></Button>
            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding:'20px'
    },
});
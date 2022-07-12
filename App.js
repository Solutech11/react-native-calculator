import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity,TextInput,Keyboard,Vibration } from 'react-native';
import React,{useState, useEffect} from 'react';
import { Feather,FontAwesome  } from '@expo/vector-icons';
import {Col,Grid,Row} from 'react-native-easy-grid'

// import {StatusBar} from 'expo-status-bar'
export default function App() {
  //theme selection
  const dark={background1:'#22252d', sun:'grey', moon:'white', Text:'white', background2:'#2a2f3c', stbar:'light'},
        light ={background1:'white', sun:'black', moon:'#d3cbcb', Text:'black', background2:'#ece8e8', stbar:'dark'};
  const [theme,settheme]= useState(dark);


  //outputs
  const [inputvalue, changevalue]=useState('')
  const [outputval, changeOut]= useState('0')

  function changeinput(text) {
    changevalue(()=>{return inputvalue + text})
  }



  useEffect(() => {
    Keyboard.dismiss()
  });
  return (
    <View style={{flex:1, backgroundColor:theme.background1, paddingTop:45,elevation:10}}>
      {/* theme selecttion */}
      <View style={{display:'flex',alignItems:'center',flex:0.7}}> 
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:'30%',height:'100%',backgroundColor:theme.background2, padding: 8,borderRadius:20}}>
          <TouchableOpacity onPress={()=>settheme(light)}><Feather name='sun' size={26} color={theme.sun} /></TouchableOpacity>
          <TouchableOpacity onPress={()=>settheme(dark)}><Feather name='moon' size={26} color={theme.moon} /></TouchableOpacity>
        </View>
      </View>

      {/* text output */}
      <View style={{flex:2.5,display:'flex',alignItems:'flex-end',justifyContent:'flex-end',padding:20, }}>
        {/* <Text style={{fontSize:35,color:theme.Text}}>344*677</Text> */}
        <TextInput style={{fontSize:35,color:theme.Text}} showSoftInputOnFocus={false} allowFontScaling={true} autoFocus={true} value={inputvalue} />
        <TextInput style={{fontSize:45, fontWeight:'500',color:theme.Text}} showSoftInputOnFocus={false} allowFontScaling={true} autoFocus={true} value={outputval} editable={false} />
      </View>


      {/* buttons */}
      <View style={{flex:6, backgroundColor:theme.background2, borderTopLeftRadius:50,borderTopRightRadius:50, elevation:20, paddingVertical:50, paddingHorizontal:30}} >
        <Grid style={{width:'100%', height:'100%'}}>

          {/* column 1 */}
          <Col>

            {/* ac btn  */}
            <Row style={[styles.allkey,{backgroundColor:theme.background1}]}>
              <TouchableOpacity style={styles.buttonstylefunction} onPress={()=>changevalue('')}>
                <Text style={[styles.specialkeyText,{color:'#26f3ce'}]}>AC</Text>
              </TouchableOpacity>
            </Row>

            {/* 7 btn  */}
            <Row style={[styles.allkey,{backgroundColor:theme.background1}]}>
              <TouchableOpacity style={styles.buttonstylefunction} onPress={()=>{changeinput('7')}}>
                <Text style={[styles.specialkeyText,{color:theme.Text}]}>7</Text>
              </TouchableOpacity>
            </Row>
            
            {/* 4 btn  */}
            <Row style={[styles.allkey,{backgroundColor:theme.background1}]}>
              <TouchableOpacity style={styles.buttonstylefunction} onPress={()=>{changeinput('4')}}>
                <Text style={[styles.specialkeyText,{color:theme.Text}]}>4</Text>
              </TouchableOpacity>
            </Row>

            {/* 1 btn  */}
            <Row style={[styles.allkey,{backgroundColor:theme.background1}]}>
              <TouchableOpacity style={styles.buttonstylefunction} onPress={()=>{changeinput('1')}}>
                <Text style={[styles.specialkeyText,{color:theme.Text}]}>1</Text>
              </TouchableOpacity>
            </Row>

            {/* DELETE btn  */}
            <Row style={[styles.allkey,{backgroundColor:theme.background1}]}>
              <TouchableOpacity style={styles.buttonstylefunction} onPress={()=>{changevalue(inputvalue.slice(0,-1))}}>
                {/* <Text style={[styles.specialkeyText,{color:theme.Text}]}>1</Text> */}
                <FontAwesome  name='undo' size={25} color={theme.Text} />
              </TouchableOpacity>
            </Row>
          </Col>

          {/* column 2 */}
          <Col>

            {/* +/- btn  */}
            <Row style={[styles.allkey,{backgroundColor:theme.background1}]}>
              <TouchableOpacity style={styles.buttonstylefunction} onPress={()=>Vibration.vibrate()}>
                <Text style={[styles.specialkeyText,{color:'red',fontWeight:'bold'}]}>ST</Text>
              </TouchableOpacity>
            </Row>

            {/* 7 btn  */}
            <Row style={[styles.allkey,{backgroundColor:theme.background1}]}>
              <TouchableOpacity style={styles.buttonstylefunction} onPress={()=>{changeinput('8')}}>
                <Text style={[styles.specialkeyText,{color:theme.Text}]}>8</Text>
              </TouchableOpacity>
            </Row>
            
            {/* 4 btn  */}
            <Row style={[styles.allkey,{backgroundColor:theme.background1}]}>
              <TouchableOpacity style={styles.buttonstylefunction} onPress={()=>{changeinput('5')}}>
                <Text style={[styles.specialkeyText,{color:theme.Text}]}>5</Text>
              </TouchableOpacity>
            </Row>

            {/* 1 btn  */}
            <Row style={[styles.allkey,{backgroundColor:theme.background1}]}>
              <TouchableOpacity style={styles.buttonstylefunction} onPress={()=>{changeinput('2')}}>
                <Text style={[styles.specialkeyText,{color:theme.Text}]}>2</Text>
              </TouchableOpacity>
            </Row>

            {/* DELETE btn  */}
            <Row style={[styles.allkey,{backgroundColor:theme.background1}]}>
              <TouchableOpacity style={styles.buttonstylefunction} onPress={()=>{changeinput('0')}}>
                <Text style={[styles.specialkeyText,{color:theme.Text}]}>0</Text>
                {/* <FontAwesome  name='undo' size={25} color={theme.Text} /> */}
              </TouchableOpacity>
            </Row>
          </Col>

          {/* column 3 */}
          <Col>

            {/* +/- btn  */}
            <Row style={[styles.allkey,{backgroundColor:theme.background1}]}>
              <TouchableOpacity style={styles.buttonstylefunction} onPress={()=>changeinput('%')}>
                <Text style={[styles.specialkeyText,{color:'red'}]}>%</Text>
              </TouchableOpacity>
            </Row>

            {/* 7 btn  */}
            <Row style={[styles.allkey,{backgroundColor:theme.background1}]}>
              <TouchableOpacity style={styles.buttonstylefunction} onPress={()=>{changeinput('9')}}>
                <Text style={[styles.specialkeyText,{color:theme.Text}]}>9</Text>
              </TouchableOpacity>
            </Row>
            
            {/* 4 btn  */}
            <Row style={[styles.allkey,{backgroundColor:theme.background1}]}>
              <TouchableOpacity style={styles.buttonstylefunction} onPress={()=>{changeinput('6')}}>
                <Text style={[styles.specialkeyText,{color:theme.Text}]}>6</Text>
              </TouchableOpacity>
            </Row>

            {/* 1 btn  */}
            <Row style={[styles.allkey,{backgroundColor:theme.background1}]}>
              <TouchableOpacity style={styles.buttonstylefunction} onPress={()=>{changeinput('3')}}>
                <Text style={[styles.specialkeyText,{color:theme.Text}]}>3</Text>
              </TouchableOpacity>
            </Row>

            {/* DELETE btn  */}
            <Row style={[styles.allkey,{backgroundColor:theme.background1}]}>
              <TouchableOpacity style={styles.buttonstylefunction} onPress={()=>{changeinput('.')}}>
                <Text style={[styles.specialkeyText,{color:theme.Text}]}>.</Text>
                {/* <FontAwesome  name='undo' size={25} color={theme.Text} /> */}
              </TouchableOpacity>
            </Row>
          </Col>
          {/* column 4 */}
          <Col>

            {/* +/- btn  */}
            <Row style={[styles.allkey,{backgroundColor:theme.background1}]}>
              <TouchableOpacity style={styles.buttonstylefunction} onPress={()=>changeinput('/')}>
                <Text style={[styles.specialkeyText,{color:'red'}]}>÷</Text>
              </TouchableOpacity>
            </Row>

            {/* 7 btn  */}
            <Row style={[styles.allkey,{backgroundColor:theme.background1}]}>
              <TouchableOpacity style={styles.buttonstylefunction} onPress={()=>{changeinput('*')}}>
                <Text style={[styles.specialkeyText,{color:'red'}]}>x</Text>
              </TouchableOpacity>
            </Row>
            
            {/* 4 btn  */}
            <Row style={[styles.allkey,{backgroundColor:theme.background1}]}>
              <TouchableOpacity style={styles.buttonstylefunction} onPress={()=>{changeinput('+')}}>
                <Text style={[styles.specialkeyText,{color:'red'}]}>+</Text>
              </TouchableOpacity>
            </Row>

            {/* 1 btn  */}
            <Row style={[styles.allkey,{backgroundColor:theme.background1}]}>
              <TouchableOpacity style={styles.buttonstylefunction} onPress={()=>{changeinput('-')}}>
                <Text style={[styles.specialkeyText,{color:'red'}]}>-</Text>
              </TouchableOpacity>
            </Row>

            {/* DELETE btn  */}
            <Row style={[styles.allkey,{backgroundColor:theme.background1}]}>
              <TouchableOpacity style={styles.buttonstylefunction} onPress={()=>{changeOut(()=>{
                try{
                  return eval(inputvalue).toString()
                }catch (e){
                  if (e) {
                    return 'Invalid'
                  } 
                }
              })}}>
                <Text style={[styles.specialkeyText,{color:'#26f3ce'}]}>=</Text>
                {/* <FontAwesome  name='undo' size={25} color={theme.Text} /> */}
              </TouchableOpacity>
            </Row>
          </Col>
        </Grid>
      </View>
      <StatusBar style={theme.stbar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  buttonstylefunction:{
    flex:1,
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },
  allkey:{
    borderRadius:20,
    elevation:5,
    margin:10
  },
  specialkeyText:{
    fontSize:20,
    fontWeight:'700'
  }
});

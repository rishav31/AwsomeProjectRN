import React, { useState } from 'react';
import {Text, View, Button, TextInput, Keyboard} from 'react-native';
import CompmonStyles from './CommonStyle';



const MyFrom =()=> {

    let [name, setName] = useState('');
    let [address, setAddress] = useState('');
    let [age, setAge] = useState('');
    let [data, setData] = useState('');


    const onSave = ()=>{
        setData(name+'\n'+address+'\n'+age);
    }
    const onCancel = ()=>{
        setAge('');
        setAddress('');
        setName('');
        setData('');
    }
    return(
        <View>
            <TextInput 
                placeholder='Enter your name'
                value={name}
                onChangeText={ (value)=>{setName(value)}} 
                style={CompmonStyles.pmyadding} />
            <TextInput 
                onChangeText={ (value)=>{setAddress(value)}} 
                value={address}
                placeholder='Enter your address' 
                style={CompmonStyles.pmyadding} />
            
            <TextInput 
                onChangeText={ (value)=>{setAge(value)}} 
                value={age}
                placeholder='enter you age' 
                keyboardType='numeric' 
                style={CompmonStyles.pmyadding} />

            <Text>{data}</Text>

            <Button 
                title='Save'
                onPress={onSave}/>
            <Button 
                title='Cancel' 
                onPress={onCancel}/>
        </View>
    );
}

export default MyFrom;
import React, { useEffect, useState, useRef } from "react";
import { View, Text, Button } from "react-native";

const CountDown = ()=>{

    // const [count, setCount] = useState(0);
    // const timerIdRef = useRef(null);
  
  
    // const onStart = () => {
    //     timerIdRef.current = setInterval(() => {
    //     setCount(count + 1);
    //     }, 1000);
    // };
  
    // const onStop = () => {
    //     clearInterval(timerIdRef.current);
    // };

    const [count, setCount] = useState(0);
    const [start, setStart] = useState(false);
    const timerIdRef = useRef(null);
  
    useEffect(() => {
        if(start){
        timerIdRef.current = setTimeout(() => {
            setCount(count + 1);
        }, 1000);
        }
        
        () => {
        clearTimeout(timerIdRef.current);
        }
    }, [count, start])
  
    const onStart = () => {
        setStart(true);
    };
  
    const onStop = () => {
        clearTimeout(timerIdRef.current);
        setStart(false);
    };
  
  
    return(
        <View>
            <Text>Count+{count}</Text>
            <Button
                onPress={onStart}
                title="Start"/>
            <Button 
                onPress={onStop}
                title="Stop"/>
        </View>
    );
}

export default CountDown;
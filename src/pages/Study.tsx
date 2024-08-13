import styled from "@emotion/styled";
import { useEffect, useCallback, useState} from "react";
import { getOutputFileNames } from "typescript";

var yourName = "ㅛㄷㄷㄴㄴㄴ"
function Study(){

    const myFunc = useCallback(() => {

        const user = [
            {
            name: 'dsnj', 
            age: 14,
            isStudent: false,
            isHandsome: true,
            },
            {
                name: 'adf', 
                age: 14,
                isStudent: false,
                isHandsome: true,
                },
                {
                    name: 'ewf', 
                    age: 14,
                    isStudent: false,
                    isHandsome: true,
                    },
                    {
                        name: 'fef', 
                        age: 14,
                        isStudent: false,
                        isHandsome: true,
                        },
        ];
 
        const userArr = ["dsnj","adf","ewf","fef"];

        console.log("함수", userArr[0]);
    }, []);
    useEffect(() => {

        //alert("Go back now.");
    }, []);
    //console.log("my name is meme")
    return <Container onClick={myFunc}>javascript basics</Container>
}

const Container = styled.div`
  width: 100px;
  height: 100px;
  background-color: red;
  padding-top: 100px;
  position: absolute;
  left: 200px
`;

export default Study;
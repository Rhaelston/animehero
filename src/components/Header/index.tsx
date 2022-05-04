import React, { useState } from "react";
import { Container, Content, Items, Menu } from "./styles";
import {Modal, Pressable, Image, TouchableOpacity,  } from "react-native";



export function Nav () {
    const [modalVisible, setModalVisible] = useState(false);

    var CloseIcon = require ('../../assets/close_icon.png');
    var MenuIcon = require ('../../assets/menu_icon.png');

    return (
        <Menu>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                setModalVisible(!modalVisible);
                }}
            >
                <Container>
                    <Pressable
                        onPress={() => setModalVisible(!modalVisible)}
                        style={{alignSelf:"flex-end", marginRight:15, marginTop:10 }}
                    >
                        <Image source={CloseIcon} style={{width:40, height:40, }}/>
                    </Pressable>
                    <Content>

                        <TouchableOpacity><Items>Settings</Items></TouchableOpacity>
                        <TouchableOpacity><Items>community</Items></TouchableOpacity>
                        <TouchableOpacity><Items>Category</Items></TouchableOpacity>
                        <TouchableOpacity><Items>Your Library</Items></TouchableOpacity>
                        <TouchableOpacity><Items>Login</Items></TouchableOpacity>
                    
                    </Content>
                </Container>
            </Modal>
            {!modalVisible && <Pressable 
                onPress={() => setModalVisible(!modalVisible)}
                style={{alignSelf:"flex-end", marginRight:15, marginTop:10}}
            >
                <Image source={MenuIcon} style ={{ height: 40, width: 40,}}/>
            </Pressable>}
        </Menu>
    )
}
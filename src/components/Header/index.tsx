import React, { useState } from "react";
import { Container, Content, Items, Menu, OpenClose } from "./styles";
import {Modal, Pressable, Image, TouchableOpacity,  } from "react-native";
import { MenuIcon } from '../../assets/menu-icon.png'
import {CloseTag} from '../../assets/close-tag.png'



export function Nav () {
    const [modalVisible, setModalVisible] = useState(false);

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
                        style={{alignSelf:"flex-end", marginRight:10, marginTop:20 }}
                    >
                        <OpenClose>Close</OpenClose>
                    </Pressable>
                    <Content>

                        <TouchableOpacity><Items>Settings</Items></TouchableOpacity>
                        <TouchableOpacity><Items>community</Items></TouchableOpacity>
                        <TouchableOpacity><Items>Category</Items></TouchableOpacity>
                        <TouchableOpacity><Items>Your Library</Items></TouchableOpacity>
                        <TouchableOpacity><Items>Login</Items></TouchableOpacity>
                    
                        <Image source={{uri:CloseTag}} style={{width:10}}/>
                    </Content>
                </Container>
            </Modal>
            {!modalVisible && <Pressable 
                onPress={() => setModalVisible(!modalVisible)}
                style={{alignSelf:"flex-end", marginRight:10, marginTop:10}}
            >
                <OpenClose>Options</OpenClose>
            </Pressable>}
        </Menu>
    )
}
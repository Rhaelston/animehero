import React from "react";
import { Image, Text } from "react-native"
import {  AnimeResponseData } from "../../@types/anime";
import { useNavigation } from "@react-navigation/native";
import { Container } from "./styles";


export function Card (props: AnimeResponseData  ) {

    const navigation = useNavigation()

    function selectedAnime () {
        navigation.navigate("Anime",
        {NameEn:props.attributes.titles.en_jp,
        NameJp:props.attributes.titles.ja_jp,
        Age:props.attributes.ageRatingGuide,
        img:props.attributes.posterImage.medium,
        meta:{
            width: props.attributes.posterImage.meta.dimensions.medium.width,
            height: props.attributes.posterImage.meta.dimensions.medium.height
        },
        About:props.attributes.synopsis,
        Video:props.attributes.youtubeVideoId,
        },
        )
    };

    return(
        <Container  onPress={()=>{selectedAnime()}}>
        <Text style={{color:"#FA58B6", fontSize:15}}>
            {props.attributes.titles.en_jp}
        </Text>
        <Image source={{uri:props.attributes.posterImage.tiny}}   style={{
            width: props.attributes.posterImage.meta.dimensions.tiny.width,
            height: props.attributes.posterImage.meta.dimensions.tiny.height,
            borderRadius: 4
            }}
        />
        </Container>
    )
}

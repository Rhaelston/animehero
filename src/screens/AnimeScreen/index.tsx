import React, { useCallback, useState } from "react"
import { Image, Text } from "react-native";
import { Container, About, Age, TitleJp, TitleEn } from './styles';
import YoutubePlayer from "react-native-youtube-iframe";

interface RouteProps {
  route:{
    params:
        {NameEn:string;
        NameJp:string
        Age:string
        img:string
        meta:{
            width: string,
            height: string
        },
        About:string,
        Video:string,
    }}
}

export function Anime ({ route }: RouteProps) {
    const [playing, setPlaying] = useState(false);

    const onStateChange = useCallback((state) => {
        if (state === "ended") {
          setPlaying(false);
        }
    }, []);

    return(
        <Container>
            <TitleEn>
                {route.params.NameEn}
            </TitleEn>
            <TitleJp>
                {route.params.NameJp}
            </TitleJp>
            <Age style={{borderBottomWidth:1, borderBottomColor: '#270082'}}>
                {route.params.Age}
            </Age>
            <Image source={{uri:route.params.img}}  style={{
            width: route.params.meta.width,
            height:route.params.meta.height,
            borderRadius:20,
            margin: 45,
            }
           }/>
           <About style={{borderBottomWidth:1, borderBottomColor: '#270082'}}>
                <Text style={{fontWeight:"bold", fontSize: 17, color:"#FA58B6", width:100}}>About:  </Text>
                {route.params.About} 
           </About>
           <YoutubePlayer
            height={300}
            play={playing}
            videoId={route.params.Video}
            onChangeState={onStateChange}
            />
        </Container>
    )
}
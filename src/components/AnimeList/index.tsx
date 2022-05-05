import React, { useEffect, useState } from "react"
import { Card } from "../Card"
import api from "../../service/api"
import { Container, LoadMore } from "./styles"
import { useNavigation } from "@react-navigation/native"
import { Button } from "react-native"



export function AnimeList(props: {URL:string, horizontal:boolean, page?:string}) {
    const [animes, setAnimes] = useState<any>([])
    const [url, setUrl] = useState(props.URL)
    const [next, setNext] = useState('')
    const [prev, setPrev] = useState('')
    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')
    
    const navigation = useNavigation()

    const getAnime = async () =>{ 
        const response = await api.get(url)
      
        setAnimes(response.data)
        setNext(response.data.links?.next)
        setPrev(response.data.links?.prev)
        setFirst(response.data.links?.first)
        setLast(response.data.links?.last)
    }
 
    useEffect(()=>{
        getAnime()
    },[url])


return (
    <>
    <Container horizontal={props.horizontal}>
        {animes.data?.map((anime: any) => (
            <Card
                id={anime.id}
                type={anime.type}
                attributes={anime.attributes}
                key={anime.id}
            />
        ))}
    </Container>

        <LoadMore>
        {props.page == "ShowAll" && !!prev && <Button title="First" onPress={()=>setUrl(first)}/>}

        {!!prev && <Button title="Preview" onPress={()=>setUrl(prev)}/>}
        {!!next && <Button title="Next" onPress={()=>setUrl(next)}/>}


        {props.page != "ShowAll" && !!next &&<Button title="Show all" onPress={()=>{navigation.navigate("ShowAll")}}/>}

        {props.page == "ShowAll" && !!next && <Button title="last" onPress={()=>setUrl(last)}/>}
        </LoadMore>
    </>
)
}
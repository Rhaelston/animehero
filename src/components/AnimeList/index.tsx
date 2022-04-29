import React, { useEffect } from "react"
import { useState } from "react"
import { Card } from "../AnimeCard"
import api from "../../service/api"
import { Container, Load } from "./styles"
import { Button } from "react-native"



export function AnimeList(props: {URL:string}) {
    const [animes, setAnimes] = useState<any>([])
    const [next, setNext] = useState('')
    
    const getAnime = async () =>{ 
        const response = await api.get(props.URL)
      
        setAnimes(response.data)
        setNext(response.data.links?.next)
      }
    useEffect(()=>{
        getAnime()
    },[])

return (
    <>
    <Container horizontal={true}>
    {animes.data?.map((anime: any) => (
        <Card
            id={anime.id}
            type={anime.type}
            attributes={anime.attributes}
            key={anime.id} />
        ))}
    </Container>
    <Load>
        {!!next && <Button title="Load More" onPress={async () => {
            const response = await api.get(next)
            setAnimes(response.data)
            setNext(response.data.links?.next)
        } } />}
    </Load>
    </>
    );
    
}
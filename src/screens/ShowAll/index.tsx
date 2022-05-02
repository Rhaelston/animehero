import React from 'react';
import { AnimeList } from '../../components/AnimeList';
import { Container } from './styles';

export function ShowAll () {
    return(
        <Container>
            <AnimeList URL="anime?page%5Blimit%5D=20" horizontal={false} page="ShowAll"/>
        </Container>
    )
}
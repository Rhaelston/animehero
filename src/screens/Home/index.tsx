import React from 'react';
import { AnimeList } from '../../components/AnimeList';
import { Container, Title } from './styles';

export default function Home() {
  return (
    <Container>
    <Title>Trending</Title>
    <AnimeList URL="/trending/anime"/>
    <Title>All Animes</Title>
    <AnimeList URL="anime"/>
    </Container>
  );
}


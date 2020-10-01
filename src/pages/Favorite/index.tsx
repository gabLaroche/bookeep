import React, { useState, useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import createPersistedSate from 'use-persisted-state';
import Loading from 'react-loading';
import { useTheme } from 'styled-components';
import { Link } from 'react-router-dom';

import Header from 'components/Header';
import { Container } from './styles';
import bookApi from 'services/bookApi';
import Volume from '../../components/Volume';

const useFavoriteVolumesState = createPersistedSate('favorite-volumes');

interface VolumeData {
  id: string;
  title: string;
  authors?: string;
  description: string;
  image?: string;
}

const Favorite = () => {
  const [volumes, setVolumes] = useState<VolumeData[]>([]);
  const [searching, setSearching] = useState(false);
  const [favoriteVolumes, setFavoriteVolumes] = useFavoriteVolumesState<
    string[]
  >([]);

  const theme = useTheme();

  useEffect(() => {
    setSearching(true);
    Promise.all(
      favoriteVolumes.map((favoriteVolume) =>
        bookApi.getVolume(favoriteVolume)
      )
    ).then((unsortedVolumes) => {
      const sortedVolumes = unsortedVolumes.sort((a, b) => {
        if (a.title === b.title) {
          return 0;
        }
        return a.title > b.title ? 1 : -1;
      });
      setVolumes(sortedVolumes);
      setSearching(false);
    });
  }, [favoriteVolumes]);

  function handleFavoriteVolume(id: string) {
    if (favoriteVolumes.includes(id)) {
      setFavoriteVolumes((oldFavoriteVolumes) =>
        oldFavoriteVolumes.filter((volumeId) => volumeId !== id)
      );
    } else {
      setFavoriteVolumes([...favoriteVolumes, id]);
    }
  }

  return (
    <Container>
      <Header>
        <Link id="header-link" to="/search">
          <span>Search</span>
          <AiOutlineSearch size={25} />
        </Link>
      </Header>

      <h1>Favorite books</h1>

      {searching ? (
        <div id="loading">
          <Loading type="spin" color={theme.primary} height={45} width={45} />
        </div>
      ) : (
        volumes.map((volume) => (
          <Volume key={volume.id} volume={volume} favoriteVolumes={favoriteVolumes} handleFavoriteVolume={handleFavoriteVolume} />
        ))
      )}
    </Container>
  );
};

export default Favorite;

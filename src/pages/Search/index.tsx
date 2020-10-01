import React, { useState, useEffect, ChangeEvent } from 'react';
import { AiFillHeart, AiOutlineSearch } from 'react-icons/ai';
import { DebounceInput } from 'react-debounce-input';
import createPersistedSate from 'use-persisted-state';
import Loading from 'react-loading';
import { useTheme } from 'styled-components';
import { Link } from 'react-router-dom';

import Volume from '../../components/Volume';
import { Container, SearchBar } from './styles';
import Header from 'components/Header';
import bookApi from 'services/bookApi';

const useFavoriteVolumesState = createPersistedSate('favorite-volumes');

interface VolumeData {
  id: string;
  title: string;
  authors?: string;
  description: string;
  image?: string;
}

const Search = () => {
  const [query, setQuery] = useState('');
  const [volumes, setVolumes] = useState<VolumeData[]>([]);
  const [searching, setSearching] = useState(false);
  const [favoriteVolumes, setFavoriteVolumes] = useFavoriteVolumesState<
    string[]
  >([]);

  const theme = useTheme();

  useEffect(() => {
    if (query.length > 0) {
      setVolumes([]);
      setSearching(true);
      bookApi.getVolumes(query).then((responseVolumes) => {
        setVolumes(responseVolumes);
        setSearching(false);
      });
    } else {
      setVolumes([]);
    }
  }, [query]);

  function handleSearchInputChange(event: ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value);
  }

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
        <Link id="header-link" to="/favorite">
          <span>Favorite books</span>
          <AiFillHeart size={25} />
        </Link>
      </Header>
      <SearchBar>
        <DebounceInput
          debounceTimeout={600}
          value={query}
          onChange={handleSearchInputChange}
        />
        <div id="search-icon">
          <AiOutlineSearch size={22} />
        </div>
      </SearchBar>

      {searching ? (
        <div id="loading">
          <Loading type="spin" color={theme.primary} height={45} width={45} />
        </div>
      ) : (
        volumes.map((volume) => (
          <Volume
            key={volume.id}
            volume={volume}
            favoriteVolumes={favoriteVolumes}
            handleFavoriteVolume={handleFavoriteVolume}
          />
        ))
      )}
    </Container>
  );
};

export default Search;

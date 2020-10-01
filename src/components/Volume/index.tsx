import React from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { VolumeContainer} from './styles';

interface VolumeData {
  id: string;
  title: string;
  authors?: string;
  description: string;
  image?: string;
}

interface VolumeProps {
  volume: VolumeData;
  favoriteVolumes: Array<string>;
  handleFavoriteVolume: any;
}

const Volume = (props: VolumeProps) => {
  const { volume, favoriteVolumes, handleFavoriteVolume } = props;

  return (

    <VolumeContainer>
      <img
        src={
          volume.image ||
          'https://booksforphysicists.com/static/cover-not-available.f94fb02e99a0.png'
        }
        alt="volume"
      />
      <div className="volume-info">
        <div className="volume-header">
          <h1><Link to={`books/${volume.id}`} target="_blank" rel="noreferrer noopener">{volume.title}</Link></h1>
          {favoriteVolumes.includes(volume.id) ? (
            <AiFillHeart
              size={25}
              onClick={() => handleFavoriteVolume(volume.id)}
            />
          ) : (
            <AiOutlineHeart
              size={25}
              onClick={() => handleFavoriteVolume(volume.id)}
            />
          )}
        </div>
        <h2>{volume.authors}</h2>
        <p dangerouslySetInnerHTML={{__html: volume.description}}></p>
      </div>
    </VolumeContainer>
  )
};

export default Volume;

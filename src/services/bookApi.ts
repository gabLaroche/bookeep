import axios from 'axios';

interface ResponseVolume {
  id: string;
  volumeInfo: {
    title: string;
    authors?: string[];
    description: string;
    imageLinks?: {
      thumbnail: string;
      small: string;
    };
    industryIdentifiers: [
      {
        type: string;
        identifier: string;
      }
    ];
    publisher: string;
    publishedDate: string;
  };
}

interface ResponseVolumes {
  items: ResponseVolume[];
}

export interface VolumeData {
  id: string;
  title: string;
  authors?: string;
  description: string;
  image?: string;
  imageLarge?: string;
  industryIdentifiers: [
    {
      type: string;
      identifier: string;
    }
  ];
  publisher: string;
  publishedDate: string;
}

const api = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1',
});

export default {
  async getVolumes(query: string) {
    const response = await api.get<ResponseVolumes>('/volumes', {
      params: {
        q: query,
        printType: 'books',
        maxResults: 40,
        fields:
          'items(id,volumeInfo/title,volumeInfo/authors,volumeInfo/description,volumeInfo/imageLinks/thumbnail)',
      },
    });

    if (!response.data) {
      return [];
    }

    const serializedVolumes = response.data.items.map((volume) => ({
      id: volume.id,
      title: volume.volumeInfo.title,
      authors: volume.volumeInfo.authors?.join(', '),
      description: volume.volumeInfo.description,
      image: volume.volumeInfo.imageLinks?.thumbnail,
    }));

    return serializedVolumes;
  },
  async getVolume(id: string): Promise<VolumeData> {
    const response = await api.get<ResponseVolume>(`/volumes/${id}`);

    const volume = response.data;

    const serializedVolume = {
      id: volume.id,
      title: volume.volumeInfo.title,
      authors: volume.volumeInfo.authors?.join(', '),
      description: volume.volumeInfo.description,
      image: volume.volumeInfo.imageLinks?.thumbnail,
      imageLarge: volume.volumeInfo.imageLinks?.small,
      industryIdentifiers: volume.volumeInfo.industryIdentifiers,
      publisher: volume.volumeInfo.publisher,
      publishedDate: volume.volumeInfo.publishedDate,
    };

    return serializedVolume;
  },
};

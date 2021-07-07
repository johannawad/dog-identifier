import React, { ReactElement, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import LazyImage from '../LazyImage/LazyImage';

interface ImageListProps {
  breed: string;
}

const ImageList: React.FC<ImageListProps> = ({ breed }): ReactElement => {
  const [images, setImages] = React.useState([]);
  const [error, setError] = React.useState(null);

  const fetchImages = (): void => {
    fetch(`https://dog.ceo/api/breed/${breed.toLowerCase()}/images/random/3`)
      .then(response => response.json())
      .then(response => setImages([...images, ...response.message]))
      .catch((error_): void => setError(error_));
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return !error ? (
    <InfiniteScroll
      dataLength={images.length}
      next={fetchImages}
      hasMore={true}
      loader={<h4>Loading...</h4>}
    >
      {images.map((image, index) => (
        <LazyImage key={index} src={image} alt={`Random image ${image}`} />
      ))}
    </InfiniteScroll>
  ) : (
    <h1>{error}</h1>
  );
};

export default ImageList;

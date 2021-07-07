import * as mobilenet from '@tensorflow-models/mobilenet';
import { tensor, Tensor3D } from '@tensorflow/tfjs';
import React, {
  ReactElement,
  useEffect,
  useRef as useReference,
  useState,
} from 'react';

import { iResults } from '../../interfaces/results';
import { loadImage } from '../../utils/imageProcessor';
import Results from '../Results/Results';
import { Uploader } from './DogIdentifier.styles';

const DogIdentifier = (): ReactElement => {
  const [image, setImage] = useState(null);
  const [model, setModel] = useState(null);
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const imageReference = useReference();

  const predict = async () => {
    if (!model) return;

    const tensorImage: Tensor3D = await loadImage(image);
    const prediction: iResults[] = await model.classify(tensorImage, 1);
    setResults(...prediction);
  };

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const { files } = event.target;
    setResults(null);

    if (files && files.length > 0) {
      const url = URL.createObjectURL(files[0]);
      setImage(url);
    }
  };

  useEffect(async () => {
    setLoading(true);
    await mobilenet.load().then(_model => {
      setModel(_model);
      setLoading(false);
    });
  }, []);

  useEffect(async () => {
    if (image) {
      await predict();
    }
  }, [image]);

  return (
    <div>
      {loading ? (
        <p>loading...</p>
      ) : (
        <Uploader>
          <p>Please upload your photo here:</p>
          <input type="file" onChange={handleFileChange} accept="image/*" />
          {image ? (
            <img
              src={image}
              width="300px"
              height="300px"
              ref={imageReference}
            />
          ) : null}
        </Uploader>
      )}
      {results ? (
        <Results
          className={results.className}
          probability={results.probability}
        />
      ) : null}
    </div>
  );
};

export default DogIdentifier;

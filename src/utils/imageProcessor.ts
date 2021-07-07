import { browser, Tensor3D } from '@tensorflow/tfjs';

export const loadImage = (source: string): Promise<Tensor3D> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = source;
    img.addEventListener('load', () => resolve(browser.fromPixels(img)));
    img.addEventListener('error', error => reject(error));
  });
};

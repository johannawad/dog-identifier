export const getBreed = (className: string): string => {
  if (className.includes(',')) {
    const array = className.split(',');

    return array[array.length - 1].replace(' ', '');
  } else if (className.includes(' ')) {
    const array = className.split(' ');

    return array[array.length - 1].replace(' ', '');
  }

  return className;
};

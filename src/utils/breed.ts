export const getBreed = (className: string): string => {
  if (className.includes(',')) {
    return className.split(',')[0];
  } else if (className.includes(' ')) {
    const array = className.split(' ');

    return array[array.length - 1];
  }

  return className;
};

export interface RawMovie {
  id: string;
  title: string;
  image: string;
  synopsis: string;
  rating: string;
  type: string;
  released: string;
  runtime: string;
  largeimage: string;
  unogsdate: string;
  imdbid: string;
  download: string;
}

export interface Movie extends RawMovie {
  searchTitle: string;
}

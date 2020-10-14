export interface ITrailer {
  id: string;
  link: string;
}

export interface IActor {
  actor: string;
  // eslint-disable-next-line camelcase
  actor_id: string;
  character: string;
}

export interface IMovieDetails {
  id: string;
  title: string;
  year: string;
  length: string;
  rating: string;
  poster: string;
  plot: string;
  trailer: ITrailer;
  cast: IActor[];
  reducedCast: string;
}

export interface IRating {
  subject: string;
  rating: number;
}

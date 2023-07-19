export type PostType = {
    title: string;
    subheader: string;
    description: string;
    urlImage: string | undefined;
    id: number;
  }

export type InitialStateType = {
    posts: PostType[];
    fetching: boolean;
  }

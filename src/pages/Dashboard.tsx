import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Grid } from '@mui/material';

import CardDetails from '../components/Card';

import { Dispatch, getPosts } from '../redux/actions/post';

import { InitialStateType } from '../types/post';

const Dashboard = () => {
  const { postsReducer: { posts, fetching } } = useSelector((
    state: { postsReducer: InitialStateType }) => state
  );
  const dispatch: Dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <Fragment>
      {
        fetching 
          ? <h1>Loading...</h1>
          : (
            <Grid container spacing={2}>
              {
                posts.map((post) => {
                  return (
                    <Grid key={post.id} item sm={3}>
                      <CardDetails
                        id={post.id}
                        title={post.title}
                        subheader={post.subheader}
                        description={post.description}
                        urlImage={post.urlImage}
                      />
                    </Grid>
                  );
                })
              }
            </Grid>
          )
      }
    </Fragment>
  );
};

export default Dashboard;

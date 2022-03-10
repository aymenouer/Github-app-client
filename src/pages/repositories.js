import React from 'react';
import { useQuery, gql } from '@apollo/client';
import RepoCard from '../containers/repo-card';
import { Layout, QueryResult } from '../components';

/** TRACKS gql query to retreive all tracks */
export const REPOSITORIES = gql`
query getRepositoriesForHome {
    repositoriesForHome {   
      id
      name
      html_url
      description
      stargazers_count
      owner {
        id
        login
        avatar_url
      }
    }
  }
  
`;

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Repositories = () => {
  const { loading, error, data } = useQuery(REPOSITORIES);

  return (
    <Layout grid>
       <QueryResult error={error} loading={loading} data={data}>
        {data?.repositoriesForHome?.map((repo, index) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </QueryResult>
    </Layout>
  );
};

export default Repositories;

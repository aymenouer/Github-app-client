import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import RepoCard from '../containers/repo-card';
import { Layout, QueryResult } from '../components';
import { Button, colors, IconBook } from '../styles';

/** REPOSITORIES gql query to retreive all REPOSITORIES with loadpage */
export const REPOSITORIES = gql`
query getRepositoriesForHome($loadpage: Int!) {
  repositoriesForHome(loadpage: $loadpage) {
    id
    name
    owner {
      id
      login
      avatar_url
    }
    html_url
    description
    stargazers_count
  }
}
  
`;

const Repositories = () => {
  const [loadpage,setLoadpage] = useState(6);
  const { loading, error, data } = useQuery(REPOSITORIES,{
    variables: { loadpage },
  });
  const [repoLiked,setRepoLiked]=useState(JSON.parse(localStorage.getItem("Rated")) || []);
  return (
    <Layout grid>
  
       <QueryResult error={error} loading={loading} data={data}>
        {data?.repositoriesForHome?.map((repo, index) => (
          <RepoCard setRepoLiked={setRepoLiked} repoLiked={repoLiked} key={repo.id} repo={repo} />
        ))}
      </QueryResult>
      <Button onClick={()=>setLoadpage(loadpage+6)}     icon={<IconBook width="20px" />}
                color={colors.pink.base}
                size="large" >  Show More</Button>
    </Layout>
  );
};

export default Repositories;

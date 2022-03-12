import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import RepoCard from "../containers/repo-card";
import { Layout, QueryResult } from "../components";
import { Button, colors, IconBook, Select } from "../styles";
import Box from "@mui/material/Box";
/** REPOSITORIES gql query to retreive all REPOSITORIES with loadpage */
export const REPOSITORIES = gql`
query RepositoriesForHome($loadpage: Int!, $language: String, $page: Int) {
    repositoriesForHome(loadpage: $loadpage, language: $language, page: $page) {
      id
      name
      owner {
        id
        login
        avatar_url
      }
      html_url
      description
      language
      stargazers_count
    }
  }
`;

const Repos = () => {
  const [loadpage] = useState(6);
  const [language, setLanguage] = useState("");
  const [page,setPage] = useState(1);
  const { loading, error, data } = useQuery(REPOSITORIES, {
    variables: { loadpage, language,page },
  });

  const [repoLiked, setRepoLiked] = useState(
    JSON.parse(localStorage.getItem("Rated")) || []
  );
  return (
    <>
      <Layout grid>
        <Box style={{ marginRight: "20px", display:"flex" ,alignItems:"Center" }} width={800}>
          
        
        
            
        </Box>
        <Select
          feel="raised"
          onChange={(e) => setLanguage(e.currentTarget.value)}
          renderTriggerNode={(selectedItem) => (
            <>{selectedItem?.children ?? "select an langague"}</>
          )}
        >
           <option>C</option>
          <option>Solidity</option>
          <option>PHP</option>
          <option>R</option>
          <option>SQL</option>
          <option>Java</option>
          <option>JavaScript</option>
          <option>Python</option>
          <option>Rust</option>
          <option>HTML</option>
        </Select>

        <QueryResult error={error} loading={loading} data={data}>
          {data?.repositoriesForHome?.map((repo, index) => (
            <RepoCard
              setRepoLiked={setRepoLiked}
              repoLiked={repoLiked}
              key={repo.id}
              repo={repo}
            />
          ))}
        </QueryResult>

        <Box style={{  display:"flex" ,alignItems:"Center",justifyContent:"Center" }} width={800}>
          
        
          <Button
            onClick={() => {
                    setPage(page+1);
                }}
            icon={<IconBook width="20px" />}
            color={colors.pink.base}
            size="large"
          >
            Show More
          </Button>
              
            </Box>
         
        
      </Layout>
    </>
  );
};

export default Repos;

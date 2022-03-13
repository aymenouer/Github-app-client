import React from "react";
import styled from "@emotion/styled";
import { colors, Button,widths, IconBook,IconStar, IconRun } from "../styles";
import useRepo from "./../store/useRepo";
import logo from "../assets/repo.png";
const RepoDetail = () => {
  const {
    name,
    login,
    avatar_url,
    html_url,
    description,
    language,
    stargazers_count,
  } = useRepo();
  return (
    <ContentDiv>
      <RepoImage src={logo} alt="" />
      <RepoDetails>
        <DetailRow>
          <h1>{name}</h1>
        </DetailRow>
        <DetailRow>
          <DetailItem>
            <h4>Repository details</h4>
        
            <IconAndLabel >
              <IconStar style={{color:"goldenrod"}} width="14px" height="14px" />
              <div style={{color:"goldenrod"}} >{stargazers_count} stars</div>
            </IconAndLabel>
            <IconAndLabel>
              <IconBook width="14px" />
              <div>Language : {language || "No language"}</div>
            </IconAndLabel>
          </DetailItem>
          <DetailItem>
            <h4>Owner</h4>
            <OwnerImage src={avatar_url} />
            <OwnerName>{login}</OwnerName>
          </DetailItem>
     
          <div>
            <StyledLink >
              <Button
                icon={<IconRun width="20px" />}
                color={colors.black.base}
                size="large"
                onClick={()=>window.location.replace(html_url)}
              >
                To Repository
              </Button>
            </StyledLink>
          </div>
        </DetailRow>
       
      <StyledDescription>
      {description || "No description"} 
          </StyledDescription> 
      </RepoDetails>
    </ContentDiv>
  );
};

export default RepoDetail;

const ContentDiv = styled.div({
    marginTop: 10,
    display: 'flex',
    flexDirection: 'column',
    maxWidth: widths.textPageWidth,
    width: '100%',
    alignSelf: 'center',
    backgroundColor: colors.background,
  });
const RepoImage = styled.img({
  objectFit: "cover",
  maxHeight: 400,
  borderRadius: 4,
  marginBottom: 30,
});

const StyledLink = styled.div({
  textDecoration: "none",
  color: "white",
});

const RepoDetails = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: 20,
  borderRadius: 4,
  marginBottom: 30,
  border: `solid 1px ${colors.silver.dark}`,
  backgroundColor: colors.silver.lighter,
  h1: {
    width: "100%",
    textAlign: "center",
    marginBottom: 5,
  },
  h4: {
    fontSize: "1.2em",
    marginBottom: 5,
    color: colors.text,
  },
});

const DetailRow = styled.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  paddingBottom: 20,
  marginBottom: 20,
  borderBottom: `solid 1px ${colors.silver.dark}`,
});

const DetailItem = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  color: colors.textSecondary,
  alignSelf: "center",
});

const OwnerImage = styled.img({
  height: 30,
  width: 30,
  marginBottom: 8,
  borderRadius: "50%",
  objectFit: "cover",
});

const OwnerName = styled.div({
  lineHeight: "1em",
  fontSize: "1em",
});

const IconAndLabel = styled.div({
  display: "flex",
  flex: "row",
  alignItems: "center",
  maxHeight: 20,
  width: "100%",
  div: {
    marginLeft: 8,
  },
  svg: {
    maxHeight: 16,
  }
});

const StyledDescription = styled.div({
    color: colors.grey.darker,
      padding: 20,
      borderRadius: 4,
      border: `solid 1px ${colors.silver.dark}`,
   

  });


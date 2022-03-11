import React, { useState } from "react";
import styled from "@emotion/styled";
import { colors, mq } from "../styles";
import logo from "../assets/repo.png";
import { toast } from "react-toastify";
import Rating from "@mui/material/Rating";

const RepoCard = ({ setRepoLiked, repoLiked, repo }) => {
  const { name, language, owner, description, stargazers_count, id } =
    repo;
  const [rate, setRate] = useState(
    repoLiked.map((e) => e.id).includes(id)
      ? repoLiked.find((element) => element.id === id).rate
      : stargazers_count
  );
  const ratingChanged = (newrate, id) => {
    let array = repoLiked;

    setRate(rate + newrate);
    array.push({ id, rate: rate + newrate });
    setRepoLiked(array);
    localStorage.setItem("Rated", JSON.stringify(repoLiked));
    toast.success("Rated");
  };

  return (
    <CardContainer>
      <CardContent>
        <CardImageContainer>
          <CardImage src={logo} alt={name} />
        </CardImageContainer>
        <CardBody>
          <CardTitle>{name || ""}</CardTitle>
          <CardDescription>{description || "No description"}</CardDescription>
          <CardLanguage>Language : {language  || "No language"}</CardLanguage>
          <CardFooter>
            <OwnerImage src={owner.avatar_url} alt={owner.login} />
            <OwnerAndRepo>
              <OwnerName> {owner.login}</OwnerName>
              <RepoStars>{rate} Star</RepoStars>
            </OwnerAndRepo>
          </CardFooter>
          <Rating
            readOnly={repoLiked.map((e) => e.id).includes(id)}
            name="customized-10"
            value={repoLiked.map((e) => e.id).includes(id) && 1}
            max={1}
            onChange={(event, value) => ratingChanged(value, id)}
          />
        </CardBody>
      </CardContent>
    </CardContainer>
  );
};

export default RepoCard;

/** Repo Card styled components */
const CardContainer = styled.div({
  borderRadius: 6,
  color: colors.text,
  backgroundSize: "cover",
  backgroundColor: "white",
  boxShadow: "0px 1px 5px 0px rgba(0,0,0,0.15)",
  backgroundPosition: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  [mq[0]]: {
    width: "90%",
  },
  [mq[1]]: {
    width: "47%",
  },
  [mq[2]]: {
    width: "31%",
  },
  height: 380,
  margin: 10,
  overflow: "hidden",
  position: "relative",
  ":hover": {
    backgroundColor: colors.grey.lighter,
  },
  cursor: "pointer",
  textDecoration: "none",
});

const CardContent = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  height: "100%",
});

const CardTitle = styled.h3({
  textAlign: "center",
  fontSize: "1.4em",
  lineHeight: "1em",
  fontWeight: 700,
  color: colors.text,
  flex: 1,
});
const CardDescription = styled.p({
  fontSize: "0.9em",
  lineHeight: "1em",
  fontWeight: 500,
  color: colors.text,
  flex: 1,
});
const CardLanguage = styled.p({
  fontSize: "0.9em",
  lineHeight: "1em",
  fontWeight: 600,
  color: colors.text,
  flex: 1,
});

const CardImageContainer = styled.div({
  height: 220,
  position: "relative",
  "::after": {
    content: '""',
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background: "rgba(250,0,150,0.20)",
  },
});

const CardImage = styled.img({
  objectFit: "cover",
  width: "100%",
  height: "100%",
  filter: "grayscale(60%)",
});

const CardBody = styled.div({
  padding: 18,
  flex: 1,
  display: "flex",
  color: colors.textSecondary,
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-around",
});

const CardFooter = styled.div({
  display: "flex",
  flexDirection: "Row",
});

const OwnerImage = styled.img({
  height: 30,
  width: 30,
  marginRight: 8,
  borderRadius: "50%",
  objectFit: "cover",
});

const OwnerAndRepo = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

const OwnerName = styled.div({
  lineHeight: "1em",
  fontSize: "1.1em",
});

const RepoStars = styled.div({
  color: "goldenrod",
  fontSize: "0.8em",
});

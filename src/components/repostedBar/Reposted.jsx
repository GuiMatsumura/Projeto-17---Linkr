import { Container, StyledRepost } from "./RepostedStyle";

export default function Reposted({userName}) {
  return (
    <Container>
      <StyledRepost />
      <h2>Re-posted by </h2>
      <h1>{userName}</h1>
    </Container>
  );
}

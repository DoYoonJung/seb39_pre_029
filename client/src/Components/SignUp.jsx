import styled from "styled-components";
import "../index";

function SignUp() {
  return (
    <Container>
      <Ad>
        <h1>Join the Stack Overflow community</h1>
        <p>Get unstuck — ask a question</p>
        <p>Unlock new privileges like voting and commenting</p>
        <p>Save your favorite tags, filters, and jobs</p>
        <p>Earn reputation and badges</p>
        <p className="explain">
          Collaborate and share knowledge with a private group for FREE.
          <p className="link">
            Get Stack Overflow for Teams free for up to 50 users.
          </p>
        </p>
      </Ad>
      <Wrapper>
        <SocialWrapper>
          <button>Sign up with Google</button>
          <button>Sign up with Github</button>
        </SocialWrapper>
        <SignupWrapper>
          <label for="id">Display name</label>
          <input type="text" id="id" />
          <label for="email">Email</label>
          <input type="email" id="email" />
          <label for="pw">Password</label>
          <input type="password" id="pw" />
          <p>
            Passwords must contain at least eight characters, including at least
            1 letter and 1 number.
          </p>
          <button>Sign up</button>
          <span>
            Already have an account? <span className="toMain">Log in</span>
          </span>
        </SignupWrapper>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  margin: 0;
  padding: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--theme-background-gray);
  font-family: var(--sans-serif);
`;
const Ad = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0;
  margin: 0 40px 0 0;
  width: 100;
  height: 100;
  > h1 {
    margin: 0 0 10px 0;
    font-size: var(--header-font);
    font-weight: normal;
  }
  > p {
    font-size: var(--text-font);
    margin: 10px;
  }
  .explain {
    font-size: var(--normal-font);
    color: var(--font-color-gray);
  }
  .link {
    margin: 0;
    color: var(--font-color-blue);
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 280px;
  height: 100;
`;
const SocialWrapper = styled.div`
  display: flex;
  flex-direction: column;
  > button {
    padding: 8px;
    margin: 0 0 10px 0;
    font-size: var(--normal-font);
  }
`;
const SignupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--theme-white);
  padding: 24px;
  border-radius: 10px;
  box-shadow: 0 10px 24px hsla(0, 0%, 0%, 0.05),
    0 20px 48px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.1);
  > label {
    font-size: var(--text-font);
    font-weight: bold;
  }
  > input {
    margin: 10px 0 20px 0;
    padding: 6px;
  }
  > button {
    margin-top: 20px;
    padding: 8px;
    font-size: var(--normal-font);
  }
  > p {
    font-size: var(--small-font);
    color: var(--font-color-gray);
  }
  > span {
    margin-top: 20px;
    font-size: var(--small-font);
  }
  .toMain {
    color: var(--font-color-blue);
  }
`;

export default SignUp;

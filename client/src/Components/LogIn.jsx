import styled from "styled-components";
import "../index";

function LogIn() {
  return (
    <Container>
      <Wrapper>
        <Img />
        <SocialWrapper>
          <button>Sign up with Google</button>
          <button>Sign up with Github</button>
        </SocialWrapper>
        <SignupWrapper>
          <label for="email">Email</label>
          <input type="email" id="email" />
          <label for="pw">Password</label>
          <input type="password" id="pw" />
          <button>Log in</button>
          <span>
            Don’t have an account? <span className="toMain">Sign up</span>
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
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 280px;
  height: 100;
`;
const Img = styled.div`
  border: 1px solid gold;
  width: 50px;
  height: 50px;
  align-self: center;
  margin: 0 0 30px 0;
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
  > span {
    margin-top: 20px;
    font-size: var(--small-font);
  }
  .toMain {
    color: var(--font-color-blue);
  }
`;

export default LogIn;

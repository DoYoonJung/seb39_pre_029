import styled from "styled-components"
import Button from "../Assets/Button"
import stackoverflowlogo from "../Assets/Imgs/stackoverflowlogo.png"

function MainNav () {
return(<Container><Line/>
<Navbody>
    <img src={stackoverflowlogo} className="logo" alt="react"/>
    <div className="btnwrapper">
    <Button padding={8} bgcolor="#E1ECF4" color="#39739D" ftsize={13} text="Log in" bordercolor="#7aa7c7" hovercolor="#b3d3ea"/>
    <Button className="signupbtn" padding={8} bgcolor="#0995ff" color="#FFFFFF" ftsize={13} text="Sign up" bordercolor="#0995ff" hovercolor="#0074cc"/>
    </div>
</Navbody>

</Container>)
}

const Container = styled.div`
    width: 100%;
    height: 50px;
    background-color: #f8f9f9;
    box-shadow: 0 1px 2px lightgray;
`
const Line = styled.div`
    width: 100%;
    height: 3px;
    background-color: #f48225;
`
const Navbody = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width:100%;
    height: 47px;
    .btnwrapper{
        display:flex;
        margin-right: 20px;
    }
    .loginpbtn{
       margin-right: 10px;
    }
    .logo{
        width:158px;
        height: 30px;
        margin-left: 56px;
    }
    .signupbtn{
        margin-left: 10px;
    }
`

export default MainNav
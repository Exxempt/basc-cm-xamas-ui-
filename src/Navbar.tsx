import styled from "styled-components";

const Container = styled("div")`
    width: 100vw;
    height: 75px;
    display: flex;
    justify-content: start;
    align-items: center;
    background-color: rgb(32 37 43 / 90%);
`

const Logo = styled("a")`
    display: flex;
    justify-content: space-around;
    align-items: center;
    max-width 100vw;
    text-decoration: none;
`
const Basc = styled("img")`
    width: 50px;
    margin-left: 25px;
`
const Title = styled("h1")`
    color: white;
    margin-left: 15px;
    font-family: 'Galindo', cursive;
`

const Navbar = () => {
    return (
        <Container>
            <Logo href="https://www.bascdao.net/">
                <Basc src="logo-white.svg" alt="basc-logo"/>
                <Title>BASC</Title>
            </Logo>
        </Container>
    )
}

export default Navbar
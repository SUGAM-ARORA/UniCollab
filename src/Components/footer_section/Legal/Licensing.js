import styled from "styled-components";

const LicenseContainer = styled.div`
  margin: auto;
  max-width: 75%;
  overflow: auto;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  font-size: 16px;
  line-height: 1.6;
  font-family: "Open Sans", sans-serif;
  text-align: justify;
  @media (max-width: 768px) {
    max-width: 90%;
    padding: 15px;
    font-size: 14px;
  }
  @media (max-width: 480px) {
    max-width: 95%;
    padding: 10px;
    font-size: 12px;
    padding-bottom: 5rem; /* Ensure enough space for the bottom bar */
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-weight: 700;
  text-align: center;
  font-size: 28px;
  color: #ff21bc;
`;

const SubTitle = styled.h3`
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 22px;
  color: #ff21bc;
`;

const Content = styled.p`
  margin-bottom: 20px;
`;

const StyledUl = styled.ul`
  margin-bottom: 20px;
  list-style-type: disc;
  padding-left: 20px;
`;

const StyledLi = styled.li`
  margin-bottom: 20px;
  list-style-type: disc;
  margin-left: 20px;
`;

const Strong = styled.strong`
  font-weight: bold;
`;

const Licensing = () => {
  return (
    <LicenseContainer>
        <Title>Licensing Information</Title><br/>
        <Content><Strong>Last Updated:</Strong> 08-06-2024</Content>
        <SubTitle>Introduction</SubTitle>
        <Content>Welcome to UniCollab! This page provides information about the licensing of our collaborative platform, which allows students from different universities and colleges to collaborate, innovate, and elevate their projects.</Content>
        <SubTitle>License Grant</SubTitle>
        <Content>UniCollab grants you a limited, non-exclusive, non-transferable, revocable license to use our platform for personal and educational purposes, subject to your compliance with these terms.</Content>
        <SubTitle>Restrictions</SubTitle>
        <Content>You agree not to:
            <StyledUl> <br/>
                <StyledLi>Copy, modify, or create derivative works of our platform;</StyledLi>
                <StyledLi>Distribute, transmit, or publicly display any part of the platform;</StyledLi>
                <StyledLi>Reverse engineer, decompile, or disassemble the platform;</StyledLi>
                <StyledLi>Use the platform for any commercial purposes without prior written consent from UniCollab;</StyledLi>
                <StyledLi>Remove or alter any proprietary notices on the platform.</StyledLi>
            </StyledUl>
        </Content>
        <SubTitle>Intellectual Property</SubTitle>
        <Content>All intellectual property rights in the platform and its content are owned by UniCollab or its licensors. Your use of the platform does not grant you any ownership rights to the content.</Content>
        <SubTitle>Third-Party Content</SubTitle>
        <Content>Our platform may include third-party content or links to third-party websites. UniCollab does not endorse or assume any responsibility for third-party content.</Content>
        <SubTitle>License Termination</SubTitle>
        <Content>UniCollab reserves the right to terminate your license to use the platform at any time, without notice, if you breach these terms or engage in prohibited activities.</Content>
        <SubTitle>Changes to Licensing Terms</SubTitle>
        <Content>We reserve the right to modify or replace these licensing terms at any time. It is your responsibility to review these terms periodically for changes.</Content>
        <SubTitle>Contact Us</SubTitle>
        <Content style={{ marginBottom: '5rem' }}>If you have any questions or concerns about these licensing terms, please contact us at: <br/><br/>
        <Strong>Email: </Strong><a href="mailto:unicollab@gmail.com" style={{color: 'cyan'}}>unicollab@gmail.com</a><br/>
        <Strong>Contact: </Strong>+91 99323 32321
        </Content>
    </LicenseContainer>
  )
}

export default Licensing;
import styled from "styled-components";

const PrivacyContainer = styled.div`
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

const PrivacyPolicy = () => {
  return (
    <PrivacyContainer>
        <Title>Privacy Policy</Title><br/>
        <Content><Strong>Last Updated:</Strong> 08-06-2024</Content>
        <SubTitle>Introduction</SubTitle>
        <Content>Welcome to UniCollab! This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our collaborative platform. Please read this policy carefully to understand our views and practices regarding your personal data.</Content>
        <SubTitle>Information We Collect</SubTitle>
        <Content>We may collect and process the following data about you:
            <StyledUl>
                <StyledLi>Information you provide directly to us, such as when you create an account, fill out a form, or communicate with us.</StyledLi>
                <StyledLi>Information collected automatically, such as your IP address, browser type, and usage data.</StyledLi>
                <StyledLi>Information from third parties, such as social media platforms, if you choose to link your account.</StyledLi>
            </StyledUl>
        </Content>
        <SubTitle>How We Use Your Information</SubTitle>
        <Content>We use the information we collect to:
            <StyledUl>
                <StyledLi>Provide, operate, and maintain our platform;</StyledLi>
                <StyledLi>Improve, personalize, and expand our platform;</StyledLi>
                <StyledLi>Understand and analyze how you use our platform;</StyledLi>
                <StyledLi>Develop new products, services, features, and functionality;</StyledLi>
                <StyledLi>Communicate with you, either directly or through one of our partners, including for customer service and support, to provide you with updates and other information relating to the platform, and for marketing and promotional purposes;</StyledLi>
                <StyledLi>Process your transactions and manage your orders;</StyledLi>
                <StyledLi>Find and prevent fraud; and</StyledLi>
                <StyledLi>Comply with legal obligations.</StyledLi>
            </StyledUl>
        </Content>
        <SubTitle>Sharing Your Information</SubTitle>
        <Content>We may share your information with third parties in the following circumstances:
            <StyledUl>
                <StyledLi>With your consent;</StyledLi>
                <StyledLi>With service providers who perform services on our behalf;</StyledLi>
                <StyledLi>To comply with legal obligations;</StyledLi>
                <StyledLi>To protect and defend our rights and property;</StyledLi>
                <StyledLi>To prevent or investigate possible wrongdoing in connection with our platform;</StyledLi>
                <StyledLi>To protect the personal safety of users of the platform or the public;</StyledLi>
                <StyledLi>In connection with any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</StyledLi>
            </StyledUl>
        </Content>
        <SubTitle>Security of Your Information</SubTitle>
        <Content>We use administrative, technical, and physical security measures to help protect your personal information. However, no method of transmission over the internet, or method of electronic storage, is 100% secure, and we cannot guarantee its absolute security.</Content>
        <SubTitle>Retention of Your Information</SubTitle>
        <Content>We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy, to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies.</Content>
        <SubTitle>Your Data Protection Rights</SubTitle>
        <Content>Depending on your location, you may have the following rights regarding your personal information:
            <StyledUl>
                <StyledLi><Strong>The right to access</Strong> - You have the right to request copies of your personal data.</StyledLi>
                <StyledLi><Strong>The right to rectification</Strong> – You have the right to request that we correct any information you believe is inaccurate or complete information you believe is incomplete.</StyledLi>
                <StyledLi><Strong>The right to erasure</Strong> – You have the right to request that we erase your personal data, under certain conditions.</StyledLi>
                <StyledLi><Strong>The right to restrict processing</Strong> – You have the right to request that we restrict the processing of your personal data, under certain conditions.</StyledLi>
                <StyledLi><Strong>The right to object to processing</Strong> – You have the right to object to our processing of your personal data, under certain conditions.</StyledLi>
                <StyledLi><Strong>The right to data portability</Strong> – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</StyledLi>
            </StyledUl>
        </Content>
        <SubTitle>Changes to This Privacy Policy</SubTitle>
        <Content>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</Content>
        <SubTitle>Contact Us</SubTitle>
        <Content style={{ marginBottom: '5rem' }}>If you have any questions or concerns about this Privacy Policy, please contact us at: <br/><br/>
        <Strong>Email: </Strong><a href="mailto:unicollab@gmail.com" style={{color: 'cyan'}}>unicollab@gmail.com</a><br/>
        <Strong>Contact: </Strong>+91 99323 32321
        </Content>
    </PrivacyContainer>
  )
}

export default PrivacyPolicy;
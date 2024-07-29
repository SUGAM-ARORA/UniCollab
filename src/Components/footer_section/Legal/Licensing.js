import React from 'react';
import styled from 'styled-components';
import homeIcon from '../../../img/homeicon.png';
import { Link } from 'react-router-dom';

const Licensing = () => {
  return (
    <>
      <HomeLink to="/">
        <img src={homeIcon} alt="Home" className="home-icon" />
      </HomeLink>
      <div className="py-8 mb-5 sm:w-[90vw] justify-start ml-auto mr-auto mt-10">
        <div className='text-center'>
          <LicenseWrapper className='license'>
            <section className='text-left'>
              <h1>Licensing</h1>
              <p>
                UniCollab is more than just a platform; it's a gateway to a world where students from different universities/colleges converge to collaborate, innovate, and elevate their projects. 
              </p>
            </section>
            <section className='text-left'>
              <h2>MIT License</h2>
              <p>Copyright (c) 2024 Sugam Arora</p>
              <p>
                Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
              </p>
              <p>
                The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
              </p>
              <p>
                THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
              </p>
            </section>
            <section className='text-left'>
              <h2>Contact Information</h2>
              <p>
                If you have any questions or concerns about this Licensing Agreement, please contact us at:
                <br />
                <br />
                Email: <CyanLink href="mailto:unicollab@gmail.com">unicollab@gmail.com</CyanLink>
                <br />
                Contact: +91 99323 32321
              </p>
            </section>
          </LicenseWrapper>
        </div>
      </div>
    </>
  );
};

const HomeLink = styled(Link)`
  display: block;
  margin: 20px auto;
  width: fit-content;

  img {
    width: 40px; /* Adjust the size of the home icon as needed */
    height: 40px; /* Adjust the size of the home icon as needed */
  }
`;

const LicenseWrapper = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  color: #333;
  line-height: 1.6;

  h1 {
    font-size: 2rem;
    margin-bottom: 20px;
    margin-top: 30px;
    color: #ff21bc;
  }

  h2 {
    font-size: 1.5rem;
    margin-top: 20px;
    color: #ff21bc;
    text-align: left;
  }

  p {
    margin: 10px 0;
    font-weight: normal; /* Set font weight to normal */
  }

  ul {
    list-style-type: disc;
    margin-left: 20px;
  }

  li {
    margin: 10px 0;
  }

  address {
    font-style: normal;
    line-height: 1.6;
  }
`;

const CyanLink = styled.a`
  color: cyan;
`;

export default Licensing;

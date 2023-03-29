import React from 'react'
import styled from 'styled-components';

const FooterPage = () => {
  return (
    <Wrapper>
      <div className='footer-section w-scrren '>

        <div className="footer-content py-20">
          <div className="custom-container">

          </div>
        </div>

        <div className="footer-copyright flex justify-center items-center">
          <div className="custom-container">
            <div className="copyright text-center py-5">
              <p className='text-xl'>© 2023. All rights reserved | Made with ❤️</p>
            </div>
          </div>
        </div>


      </div>
    </Wrapper>
  )
}

export default FooterPage;

const Wrapper = styled.section`

.footer-section{
  width: 100vw;
  background-color: #f7f9fb;
    background-image: url("https://marketplace.foodotawp.com/wp-content/themes/foodota/libs/images/dots-new.png");
    background-size: cover;
    position: relative;
  .footer-content{
    padding: 90px 0 50px;
  }
}
  
`
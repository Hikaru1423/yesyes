import styled from 'styled-components'

const FooterWrapper = styled.div`
  width: 100%;
  scroll-margin-top: 100px;
  font-family: 'Manrope', 'Montserrat', sans-serif;
`

const FooterContainer = styled.footer`
  background-color: #ffffff;
  padding: 60px 60px 0;
  border-top: 1px solid #e0e0e0;
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 1024px) {
    padding: 50px 40px 0;
  }

  @media (max-width: 768px) {
    padding: 40px 20px 0;
  }

  @media (max-width: 440px) {
    padding: 30px 12px 0;
  }
`

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  margin-bottom: 40px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    margin-bottom: 30px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 25px;
    margin-bottom: 25px;
  }

  @media (max-width: 440px) {
    gap: 20px;
    margin-bottom: 20px;
  }
`

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

const ColumnTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 440px) {
    font-size: 15px;
  }
`

const FooterLink = styled.a`
  color: #666;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s ease;
  
  &:hover {
    color: #ff9800;
  }

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 440px) {
    font-size: 12px;
  }
`

const ContactInfo = styled.p`
  color: #666;
  font-size: 14px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 440px) {
    font-size: 12px;
  }
`

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 10px;

  @media (max-width: 768px) {
    gap: 12px;
  }

  @media (max-width: 440px) {
    gap: 10px;
  }
`

const SocialIcon = styled.a`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #ff9800;
  }
  
  svg {
    width: 20px;
    height: 20px;
    fill: #666;
    transition: fill 0.3s ease;
  }
  
  &:hover svg {
    fill: white;
  }

  @media (max-width: 768px) {
    width: 32px;
    height: 32px;

    svg {
      width: 18px;
      height: 18px;
    }
  }

  @media (max-width: 440px) {
    width: 30px;
    height: 30px;

    svg {
      width: 16px;
      height: 16px;
    }
  }
`

const CopyrightBar = styled.div`
  background-color: #ff9800;
  color: white;
  text-align: center;
  padding: 20px 0;
  margin: 0;
  width: 100%;

  @media (max-width: 768px) {
    padding: 15px 0;
  }

  @media (max-width: 440px) {
    padding: 12px 0;
  }
`

const CopyrightText = styled.p`
  font-size: 14px;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 440px) {
    font-size: 12px;
  }
`

interface FooterProps {
  id?: string
}

function Footer({ id }: FooterProps) {
  return (
    <FooterWrapper id={id}>
      <FooterContainer>
        <FooterGrid>
          <FooterColumn>
            <ColumnTitle>Тех-поддержка</ColumnTitle>
            <ContactInfo>телефон: +8 999 999 9999</ContactInfo>
            <ContactInfo>Наши социальные сети</ContactInfo>
            <SocialLinks>
              <SocialIcon href="#">
                <svg viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </SocialIcon>
              <SocialIcon href="#">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </SocialIcon>
              <SocialIcon href="#">
                <svg viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </SocialIcon>
            </SocialLinks>
          </FooterColumn>
          
          <FooterColumn>
            <ColumnTitle>Разное</ColumnTitle>
            <FooterLink href="#">О нас</FooterLink>
            <FooterLink href="#">Новинки</FooterLink>
            <FooterLink href="#">Колоборации</FooterLink>
            <FooterLink href="#">Лидеры прожад</FooterLink>
            <FooterLink href="#">Политика конфедоциальности</FooterLink>
          </FooterColumn>
          
          <FooterColumn>
            <ColumnTitle>Обслуживание клиентов</ColumnTitle>
            <FooterLink href="#">Правила</FooterLink>
            <FooterLink href="#">условия использования</FooterLink>
            <FooterLink href="#">Процедуры возврата</FooterLink>
            <FooterLink href="#">Политика конфиденциальности</FooterLink>
            <FooterLink href="#">Форумы</FooterLink>
          </FooterColumn>
          
          <FooterColumn>
            <ColumnTitle>Быстрый доступ</ColumnTitle>
            <FooterLink href="#">Связаться с нам</FooterLink>
            <FooterLink href="#">Блог</FooterLink>
            <FooterLink href="#">Возвраты и возмещения</FooterLink>
            <FooterLink href="#">Порядок отслеживания</FooterLink>
            <FooterLink href="#">FAQ</FooterLink>
          </FooterColumn>
        </FooterGrid>
      </FooterContainer>
      
      <CopyrightBar>
        <CopyrightText>© All Rights Reserved for Mansoury - 2023</CopyrightText>
      </CopyrightBar>
    </FooterWrapper>
  )
}

export default Footer

import styled from 'styled-components'

const Section = styled.section`
  padding: 80px 60px;
  background-color: #f8f8f8;
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
  font-family: 'Manrope', 'Montserrat', sans-serif;

  @media (max-width: 1024px) {
    padding: 60px 40px;
  }

  @media (max-width: 768px) {
    padding: 40px 20px;
  }

  @media (max-width: 440px) {
    padding: 30px 10px;
  }
`

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;

  @media (max-width: 1024px) {
    gap: 40px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  @media (max-width: 440px) {
    gap: 25px;
  }
`

const DiscountImage = styled.div`
  width: 100%;
  height: 400px;
  background-color: #ffeb3b;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);

  @media (max-width: 1024px) {
    height: 350px;
  }

  @media (max-width: 768px) {
    height: 300px;
  }

  @media (max-width: 440px) {
    height: 250px;
  }
`

const DiscountPercent = styled.div`
  font-size: 200px;
  font-weight: bold;
  color: #333;
  line-height: 1;
  opacity: 1;

  @media (max-width: 1024px) {
    font-size: 150px;
  }

  @media (max-width: 768px) {
    font-size: 120px;
  }

  @media (max-width: 440px) {
    font-size: 100px;
  }
`

const DiscountText = styled.div`
  position: absolute;
  bottom: 40px;
  font-size: 32px;
  font-weight: bold;
  color: #333;
  opacity: 1;

  @media (max-width: 1024px) {
    font-size: 28px;
    bottom: 30px;
  }

  @media (max-width: 768px) {
    font-size: 24px;
    bottom: 25px;
  }

  @media (max-width: 440px) {
    font-size: 20px;
    bottom: 20px;
  }
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (max-width: 768px) {
    gap: 20px;
  }

  @media (max-width: 440px) {
    gap: 15px;
  }
`

const Headline1 = styled.h2`
  font-size: 32px;
  font-weight: bold;
  color: #333;
  line-height: 1.4;
  word-wrap: break-word;
  overflow-wrap: break-word;

  @media (max-width: 1024px) {
    font-size: 28px;
  }

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 440px) {
    font-size: 20px;
  }
`

const Headline2 = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: #666;
  line-height: 1.5;
  word-wrap: break-word;
  overflow-wrap: break-word;

  @media (max-width: 1024px) {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 440px) {
    font-size: 16px;
  }
`

const CardButton = styled.button`
  padding: 18px 40px;
  background-color: transparent;
  border: 2px solid #ff9800;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 600;
  color: #ff9800;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: flex-start;
  box-shadow: 0 2px 8px rgba(255, 152, 0, 0.2);
  white-space: nowrap;
  
  &:hover {
    background-color: #ff9800;
    color: white;
    box-shadow: 0 4px 16px rgba(255, 152, 0, 0.4);
  }

  @media (max-width: 768px) {
    padding: 14px 30px;
    font-size: 16px;
    align-self: flex-start;
    white-space: normal;
  }

  @media (max-width: 440px) {
    padding: 12px 20px;
    font-size: 14px;
  }
`

function DiscountCard() {
  return (
    <Section>
      <Container>
        <DiscountImage>
          <DiscountPercent>%</DiscountPercent>
          <DiscountText>DISCOUNT</DiscountText>
        </DiscountImage>
        <ContentContainer>
          <Headline1>Оформите нашу карту и получите скидку до 10% на наш товар</Headline1>
          <Headline2>Оформи нашу карту прямо сейчас и получи возможность получать кешбэк на каждый товар из новинок</Headline2>
          <CardButton>Оформить карту</CardButton>
        </ContentContainer>
      </Container>
    </Section>
  )
}

export default DiscountCard

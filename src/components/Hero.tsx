import styled from 'styled-components'

const HeroContainer = styled.section`
  position: relative;
  width: 100%;
  height: 600px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  font-family: 'Manrope', 'Montserrat', sans-serif;
  margin: 0;
  padding: 0;

  @media (max-width: 1024px) {
    height: 500px;
  }

  @media (max-width: 768px) {
    height: 400px;
  }

  @media (max-width: 440px) {
    height: 350px;
  }
`

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.3;
  background: linear-gradient(to right, rgba(0,0,0,0.2), transparent),
              url('/maxresdefault.jpg') center/cover;
  filter: blur(2px);
`

const Content = styled.div`
  position: relative;
  z-index: 1;
  max-width: 600px;
  width: 100%;
  padding: 0 20px;

  @media (max-width: 768px) {
    padding: 0 20px;
  }

  @media (max-width: 440px) {
    padding: 0 15px;
  }
`

const PromoBadge = styled.div`
  display: inline-block;
  background-color: #ff4081;
  color: white;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 20px;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(255, 64, 129, 0.4);

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 6px 12px;
    margin-bottom: 15px;
  }

  @media (max-width: 440px) {
    font-size: 11px;
    padding: 5px 10px;
    margin-bottom: 12px;
  }
`

const Title = styled.h1`
  color: white;
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 20px;
  line-height: 1.2;
  word-wrap: break-word;
  overflow-wrap: break-word;

  @media (max-width: 1024px) {
    font-size: 40px;
  }

  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 15px;
  }

  @media (max-width: 440px) {
    font-size: 24px;
    margin-bottom: 12px;
  }
`

const Subtitle = styled.p`
  color: white;
  font-size: 20px;
  margin-bottom: 10px;
  line-height: 1.6;

  @media (max-width: 1024px) {
    font-size: 18px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 440px) {
    font-size: 14px;
  }
`

function Hero() {
  return (
    <HeroContainer id="hero">
      <BackgroundImage />
      <Content>
        <PromoBadge>HOT PROMO</PromoBadge>
        <Title>Получи скидку 20% на товары со всего мира</Title>
        <Subtitle>Лучший сервис по продаже книг и комиксов</Subtitle>
      </Content>
    </HeroContainer>
  )
}

export default Hero

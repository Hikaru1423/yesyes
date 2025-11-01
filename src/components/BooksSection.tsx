import styled from 'styled-components'

const Section = styled.section`
  padding: 80px 60px;
  background-color: #ffffff;
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
  scroll-margin-top: 100px;
  font-family: 'Manrope', 'Montserrat', sans-serif;

  @media (max-width: 1024px) {
    padding: 60px 40px;
    scroll-margin-top: 80px;
  }

  @media (max-width: 768px) {
    padding: 40px 20px;
    scroll-margin-top: 60px;
  }

  @media (max-width: 440px) {
    padding: 30px 10px;
    scroll-margin-top: 50px;
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
    gap: 20px;
  }
`

const ImageContainer = styled.div`
  width: 100%;
  height: 400px;
  background: linear-gradient(135deg, #ff6b6b 0%, #ffd93d 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
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

const HeartBookshelf = styled.div`
  font-size: 200px;
  color: white;
  opacity: 0.9;

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

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (max-width: 440px) {
    gap: 20px;
  }
`

const Title = styled.h2`
  font-size: 42px;
  font-weight: bold;
  color: #333;
  line-height: 1.2;
  word-wrap: break-word;
  overflow-wrap: break-word;

  @media (max-width: 1024px) {
    font-size: 36px;
  }

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 440px) {
    font-size: 24px;
  }
`

const Description = styled.p`
  font-size: 16px;
  color: #666;
  line-height: 1.8;

  @media (max-width: 768px) {
    font-size: 15px;
  }

  @media (max-width: 440px) {
    font-size: 14px;
  }
`

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
    margin-top: 10px;
  }

  @media (max-width: 440px) {
    grid-template-columns: 1fr;
    gap: 20px;
    margin-top: 10px;
  }
`

const StatItem = styled.div`
  text-align: center;
`

const StatNumber = styled.div`
  font-size: 48px;
  font-weight: bold;
  color: #ff9800;
  margin-bottom: 10px;

  @media (max-width: 1024px) {
    font-size: 40px;
  }

  @media (max-width: 768px) {
    font-size: 36px;
    margin-bottom: 8px;
  }

  @media (max-width: 440px) {
    font-size: 32px;
    margin-bottom: 5px;
  }
`

const StatLabel = styled.div`
  font-size: 16px;
  color: #666;
  line-height: 1.4;
  word-wrap: break-word;
  overflow-wrap: break-word;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 440px) {
    font-size: 13px;
  }
`

interface BooksSectionProps {
  id?: string
}

function BooksSection({ id }: BooksSectionProps) {
  return (
    <Section id={id}>
      <Container>
        <ImageContainer>
          <HeartBookshelf>📚❤️</HeartBookshelf>
        </ImageContainer>
        <ContentContainer>
          <Title>Ваши любимые книги Здесь!</Title>
          <Description>
            Покупайте книги онлайн с нами и получайте эксклюзивные предложения и скидки. 
            Мы предлагаем широкий ассортимент книг и комиксов от лучших авторов со всего мира.
          </Description>
          <StatsContainer>
            <StatItem>
              <StatNumber>800+</StatNumber>
              <StatLabel>Книг листов</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>1K+</StatNumber>
              <StatLabel>зарегистрированых пользователей</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>50+</StatNumber>
              <StatLabel>разновидностей книг</StatLabel>
            </StatItem>
          </StatsContainer>
        </ContentContainer>
      </Container>
    </Section>
  )
}

export default BooksSection

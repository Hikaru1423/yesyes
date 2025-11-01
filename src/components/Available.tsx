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

const SectionTitle = styled.h2`
  font-size: 36px;
  font-weight: bold;
  color: #333;
  margin-bottom: 60px;
  position: relative;
  padding-bottom: 20px;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100px;
    height: 4px;
    background-color: #ff9800;
  }

  @media (max-width: 1024px) {
    font-size: 32px;
    margin-bottom: 50px;
  }

  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 40px;
    padding-bottom: 15px;

    &::after {
      width: 80px;
      height: 3px;
    }
  }

  @media (max-width: 440px) {
    font-size: 24px;
    margin-bottom: 30px;
    padding-bottom: 12px;

    &::after {
      width: 60px;
      height: 3px;
    }
  }
`

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 25px;
  }

  @media (max-width: 440px) {
    gap: 20px;
  }
`

const ProductCard = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
  }
`

const ProductImage = styled.div`
  width: 100%;
  height: 300px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  background-image: url('/yesyes/maxresdefault.jpg');
  background-size: cover;
  background-position: center;
  opacity: 0.8;

  @media (max-width: 768px) {
    height: 250px;
  }

  @media (max-width: 440px) {
    height: 200px;
  }
`

const ProductInfo = styled.div`
  padding: 20px;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 440px) {
    padding: 12px;
  }
`

const ProductTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #333;
  margin-bottom: 10px;
  word-wrap: break-word;
  overflow-wrap: break-word;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 440px) {
    font-size: 16px;
    margin-bottom: 8px;
  }
`

const ProductDescription = styled.p`
  color: #666;
  font-size: 14px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 440px) {
    font-size: 12px;
  }
`

const books = [
  { title: 'Вершина Поглощения', author: 'Небесная Буря', description: 'Путешествие молодого алхимика в поисках безмерной силы. Каждое сражение приближает его к небесным вратам.' },
  { title: 'Бессмертный Пик', author: 'Ветряной Рассекатель', description: 'Легенда о мастере, вознесшемся на пик бессмертия. Путь через тысячи миров и бесконечные испытания судьбы.' },
  { title: 'Путь Судьбы', author: 'Небожитель Инь', description: 'История низвергнутого небожителя, решившего переписать свою судьбу. Тайны небес и древние секреты разворачиваются в эпическом противостоянии.' }
]

interface AvailableProps {
  id?: string
}

function Available({ id }: AvailableProps) {
  return (
    <Section id={id}>
      <SectionTitle>Имееться</SectionTitle>
      <ProductGrid>
        {books.map((book, item) => (
          <ProductCard key={item}>
            <ProductImage />
            <ProductInfo>
              <ProductTitle>{book.title}</ProductTitle>
              <ProductDescription>
                {book.description}
              </ProductDescription>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductGrid>
    </Section>
  )
}

export default Available

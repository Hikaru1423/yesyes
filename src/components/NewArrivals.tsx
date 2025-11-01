import { useState, useEffect } from 'react'
import styled from 'styled-components'

const Section = styled.section`
  padding: 80px 60px;
  background-color: #f8f8f8;
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

const CarouselContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
`

const CarouselButton = styled.button`
  position: absolute;
  z-index: 2;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #ff9800;
    
    svg {
      fill: white;
    }
  }
  
  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
    
    &:hover {
      background-color: rgba(255, 255, 255, 0.9);
      
      svg {
        fill: #333;
      }
    }
  }
  
  &:first-of-type {
    left: 10px;
  }
  
  &:last-of-type {
    right: 10px;
  }
  
  svg {
    width: 24px;
    height: 24px;
    fill: #333;
    transition: fill 0.3s ease;
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    
    &:first-of-type {
      left: 5px;
    }
    
    &:last-of-type {
      right: 5px;
    }
    
    svg {
      width: 20px;
      height: 20px;
    }
  }

  @media (max-width: 440px) {
    width: 35px;
    height: 35px;
    
    &:first-of-type {
      left: 3px;
    }
    
    &:last-of-type {
      right: 3px;
    }
    
    svg {
      width: 18px;
      height: 18px;
    }
  }
`

const ProductListContainer = styled.div`
  overflow: hidden;
  width: 100%;
`

const ProductList = styled.div<{ $translateX: string }>`
  display: flex;
  gap: 30px;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateX(${props => props.$translateX});
  will-change: transform;

  @media (max-width: 768px) {
    gap: 15px;
  }

  @media (max-width: 440px) {
    gap: 10px;
  }
`

const ProductCard = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  overflow: hidden;
  background-color: white;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  min-width: calc(25% - 22.5px);
  flex-shrink: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
  }
  
  @media (max-width: 1200px) {
    min-width: calc(33.333% - 20px);
  }
  
  @media (max-width: 900px) {
    min-width: calc(50% - 15px);
  }

  @media (max-width: 600px) {
    min-width: calc(100% - 15px);
  }

  @media (max-width: 440px) {
    min-width: calc(100% - 10px);
  }
`

const ProductImage = styled.div`
  width: 100%;
  height: 250px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  background-image: url('/maxresdefault.jpg');
  background-size: cover;
  background-position: center;
  opacity: 0.8;

  @media (max-width: 768px) {
    height: 200px;
  }

  @media (max-width: 440px) {
    height: 180px;
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
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
  word-wrap: break-word;
  overflow-wrap: break-word;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 440px) {
    font-size: 14px;
  }
`

const ProductAuthor = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 12px;

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 440px) {
    font-size: 12px;
  }
`

const ProductRating = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 12px;
  
  svg {
    width: 16px;
    height: 16px;
    fill: #ff9800;
  }
  
  span {
    font-size: 14px;
    color: #666;
  }

  @media (max-width: 768px) {
    svg {
      width: 14px;
      height: 14px;
    }
    
    span {
      font-size: 13px;
    }
  }

  @media (max-width: 440px) {
    svg {
      width: 12px;
      height: 12px;
    }
    
    span {
      font-size: 12px;
    }
  }
`

const ProductPrice = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
`

const Price = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #333;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 440px) {
    font-size: 18px;
  }
`

const OldPrice = styled.span`
  font-size: 18px;
  color: #999;
  text-decoration: line-through;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 440px) {
    font-size: 14px;
  }
`

const BuyButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #ff9800;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(255, 152, 0, 0.3);
  
  &:hover {
    background-color: #f57c00;
    box-shadow: 0 4px 16px rgba(255, 152, 0, 0.5);
  }

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 14px;
  }

  @media (max-width: 440px) {
    padding: 8px;
    font-size: 13px;
  }
`

const newBooks = [
  { title: 'Рождение Божественного', author: 'Огненный Воин', rating: '4.9', price: '1099P', oldPrice: '1599P' },
  { title: 'Секрет Девяти Неб', author: 'Звездный Путешественник', rating: '4.7', price: '1299P', oldPrice: '1899P' },
  { title: 'Владыка Теней', author: 'Темное Имя', rating: '4.8', price: '999P', oldPrice: '1499P' },
  { title: 'Король Бессмертных', author: 'Вечный Император', rating: '5.0', price: '1199P', oldPrice: '1799P' },
  { title: 'Поход Шести Путей', author: 'Пустынный Демон', rating: '4.6', price: '899P', oldPrice: '1399P' },
  { title: 'Революция Реинкарнации', author: 'Небесный Художник', rating: '4.8', price: '1299P', oldPrice: '1999P' },
  { title: 'Запредельные Врата', author: 'Время Путешественник', rating: '4.7', price: '1099P', oldPrice: '1599P' },
  { title: 'Небесное Дао', author: 'Путь К Истине', rating: '4.9', price: '1399P', oldPrice: '2099P' }
]

function NewArrivals() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [visibleCards, setVisibleCards] = useState(4)

  useEffect(() => {
    const updateVisibleCards = () => {
      const width = window.innerWidth
      let cards = 4
      
      if (width <= 440) {
        cards = 1
      } else if (width <= 600) {
        cards = 1
      } else if (width <= 900) {
        cards = 2
      } else if (width <= 1200) {
        cards = 3
      } else {
        cards = 4
      }
      
      setVisibleCards(cards)
    }

    updateVisibleCards()
    window.addEventListener('resize', updateVisibleCards)
    return () => window.removeEventListener('resize', updateVisibleCards)
  }, [])

  const handlePrev = () => {
    if (currentIndex === 0 || isAnimating) return
    setIsAnimating(true)
    setCurrentIndex(prev => prev - 1)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const handleNext = () => {
    const maxIndex = newBooks.length - visibleCards
    if (currentIndex >= maxIndex || isAnimating) return
    setIsAnimating(true)
    setCurrentIndex(prev => prev + 1)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const translateX = `${-currentIndex * (100 / visibleCards)}%`

  return (
    <Section>
      <SectionTitle>Новинки</SectionTitle>
      <CarouselContainer>
        <ProductListContainer>
          <ProductList $translateX={translateX}>
            {newBooks.map((book, index) => (
              <ProductCard key={index}>
                <ProductImage />
                <ProductInfo>
                  <ProductTitle>{book.title}</ProductTitle>
                  <ProductAuthor>{book.author}</ProductAuthor>
                  <ProductRating>
                    <svg viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                    <span>{book.rating}</span>
                  </ProductRating>
                  <ProductPrice>
                    <Price>{book.price}</Price>
                    <OldPrice>{book.oldPrice}</OldPrice>
                  </ProductPrice>
                  <BuyButton>Купить</BuyButton>
                </ProductInfo>
              </ProductCard>
            ))}
          </ProductList>
        </ProductListContainer>
        <CarouselButton onClick={handlePrev} disabled={currentIndex === 0}>
          <svg viewBox="0 0 24 24">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
          </svg>
        </CarouselButton>
        <CarouselButton onClick={handleNext} disabled={currentIndex >= newBooks.length - visibleCards}>
          <svg viewBox="0 0 24 24">
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
          </svg>
        </CarouselButton>
      </CarouselContainer>
    </Section>
  )
}

export default NewArrivals

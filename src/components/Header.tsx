import styled from 'styled-components'

const HeaderContainer = styled.header`
  width: 100%;
  background-color: #ffffff;
  font-family: 'Manrope', 'Montserrat', sans-serif;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  position: sticky;
  top: 0;
  z-index: 100;
`

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 60px;
  border-bottom: 1px solid #e0e0e0;
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 1024px) {
    padding: 15px 30px;
  }

  @media (max-width: 768px) {
    padding: 15px 20px;
    flex-wrap: wrap;
  }

  @media (max-width: 440px) {
    padding: 12px 15px;
  }
`

const Logo = styled.div`
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

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 1024px) {
    gap: 15px;
  }

  @media (max-width: 768px) {
    gap: 10px;
  }

  @media (max-width: 440px) {
    gap: 5px;
  }
`

const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  @media (max-width: 1024px) {
    display: none;
  }
`

const SearchInput = styled.input`
  padding: 10px 40px 10px 15px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 14px;
  width: 250px;
  outline: none;
  
  &::placeholder {
    color: #999;
  }
  
  &:focus {
    border-color: #ff9800;
  }
`

const SearchIcon = styled.svg`
  position: absolute;
  right: 12px;
  width: 18px;
  height: 18px;
  fill: #999;
`

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 24px;
    height: 24px;
    fill: #333;
  }

  @media (max-width: 768px) {
    padding: 5px;

    svg {
      width: 20px;
      height: 20px;
    }
  }

  @media (max-width: 440px) {
    padding: 4px;

    svg {
      width: 18px;
      height: 18px;
    }
  }
`

const AuthButtons = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 1024px) {
    gap: 8px;
  }

  @media (max-width: 768px) {
    gap: 5px;
  }

  @media (max-width: 440px) {
    gap: 4px;
  }
`

const Button = styled.button<{ $primary?: boolean }>`
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  border: none;
  transition: all 0.3s ease;
  
  ${props => props.$primary 
    ? `
      background-color: #ff9800;
      color: white;
      box-shadow: 0 2px 8px rgba(255, 152, 0, 0.3);
      
      &:hover {
        background-color: #f57c00;
        box-shadow: 0 4px 12px rgba(255, 152, 0, 0.5);
      }
    `
    : `
      background-color: transparent;
      color: #333;
      border: 1px solid #e0e0e0;
      
      &:hover {
        background-color: #f5f5f5;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }
    `
  }

  @media (max-width: 1024px) {
    padding: 8px 15px;
    font-size: 13px;
  }

  @media (max-width: 768px) {
    padding: 8px 12px;
    font-size: 12px;
  }

  @media (max-width: 440px) {
    padding: 6px 10px;
    font-size: 11px;
  }
`

const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  padding: 15px 60px;
  border-bottom: 1px solid #e0e0e0;
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 1024px) {
    padding: 15px 30px;
  }

  @media (max-width: 768px) {
    padding: 12px 20px;
  }

  @media (max-width: 440px) {
    padding: 10px 15px;
  }
`

const NavLinks = styled.div`
  display: flex;
  gap: 40px;

  @media (max-width: 1024px) {
    gap: 30px;
  }

  @media (max-width: 768px) {
    gap: 20px;
  }

  @media (max-width: 440px) {
    gap: 15px;
  }
`

const NavLink = styled.a`
  color: #333;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  transition: color 0.3s ease;
  
  &:hover {
    color: #ff9800;
  }

  @media (max-width: 1024px) {
    font-size: 15px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 440px) {
    font-size: 13px;
  }
`

function Header() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <HeaderContainer>
      <TopBar>
        <Logo onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ cursor: 'pointer' }}>Mansoury.</Logo>
        <RightSection>
          <SearchContainer>
            <SearchInput type="text" placeholder="Поиск по названию" />
            <SearchIcon viewBox="0 0 24 24">
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            </SearchIcon>
          </SearchContainer>
          <IconButton>
            <svg viewBox="0 0 24 24">
              <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.15.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
            </svg>
          </IconButton>
          <IconButton>
            <svg viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </IconButton>
          <AuthButtons>
            <Button>Войти</Button>
            <Button $primary>Создать аккаунт</Button>
          </AuthButtons>
        </RightSection>
      </TopBar>
      <Navigation>
        <NavLinks>
          <NavLink href="#" onClick={(e) => handleNavClick(e, 'hero')}>Главная</NavLink>
          <NavLink href="#" onClick={(e) => handleNavClick(e, 'products')}>Продукт</NavLink>
          <NavLink href="#" onClick={(e) => handleNavClick(e, 'about')}>О нас</NavLink>
          <NavLink href="#" onClick={(e) => handleNavClick(e, 'contacts')}>Контакты</NavLink>
        </NavLinks>
      </Navigation>
    </HeaderContainer>
  )
}

export default Header

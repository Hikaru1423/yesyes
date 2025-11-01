import styled from 'styled-components'
import Header from './components/Header'
import Hero from './components/Hero'
import Available from './components/Available'
import NewArrivals from './components/NewArrivals'
import BooksSection from './components/BooksSection'
import DiscountCard from './components/DiscountCard'
import Footer from './components/Footer'

const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #ffffff;
  overflow-x: hidden;
`

function App() {
  return (
    <AppContainer>
      <Header />
      <Hero />
      <Available id="products" />
      <NewArrivals />
      <BooksSection id="about" />
      <DiscountCard />
      <Footer id="contacts" />
    </AppContainer>
  )
}

export default App

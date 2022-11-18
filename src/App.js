import Header from './components/Header'
import styled from "styled-components"
import Search from './components/Search'
import Latest from './components/Latest'
import Footer from './components/Footer'


const AppContainer = styled.section`
  height: 100%;
  background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
`

function App() {
  return (
    <AppContainer>
      <Header />
      <Search />
      <Latest />
      <Footer />
    </AppContainer>
  )
}

export default App
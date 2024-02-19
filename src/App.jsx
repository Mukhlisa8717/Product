import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import ForYou from './components/forYou/ForYou';
import Strategies from './components/strategies/Strategies';
import Price from './components/price/Price';
import Clients from './components/clients/Clients';
import Join from './components/join/Join';

const App = () => {
  return (
    <div>
      <Header />
      <main>
      <Hero />
      <ForYou />
      <Strategies />
      <Price />
      <Clients />
      <Join />
      </main>
    </div>
  )
}

export default App
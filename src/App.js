import './App.css';
import AdvantageSection from './components/AdvantageSection';
import Details from './components/Details';
import HeaderSection from './components/HeaderSection';
import PremiumSection from './components/PremiumSection';

function App() {
  return (
    <div className='outerDiv'>
      <HeaderSection />
      <AdvantageSection />
      <PremiumSection />
      <Details />
    </div>
  );
}

export default App;

import Header from './Header';
import '../style.css';
import OfferSection from './OfferSection';
import DescriptionSection from './DescriptionSection';
import RentalSection from './RentalSection';
import ServiceSection from './ServiceSectionList';


function App() {
  return (
    <div>
    <Header />
    <OfferSection />
    <DescriptionSection />
    <ServiceSection />
    <RentalSection />
    </div>
  );
}

export default App;

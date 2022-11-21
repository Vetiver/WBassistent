import Footer from "../../components/Footer/Footer";
import HowToUseSKUSearch from "../../components/HowToUseSKUSearch/HowToUseSKUSearch";
import Prices from "../../components/Prices/Prices";
import Questions from "../../components/Questions/Questions";
import SearchField from "../../components/SearchField/SearchField";
import SpecialOffers from "../../components/SpecialOffers/SpecialOffers";

function Homepage() {
  return (
    <div>
      <SearchField />
      <HowToUseSKUSearch />
      <Questions />
      <Footer />
    </div>
  );
}

export default Homepage;

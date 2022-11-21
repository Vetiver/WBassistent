import HowToUseSKUSearch from "../../components/HowToUseSKUSearch/HowToUseSKUSearch";
import Questions from "../../components/Questions/Questions";
import SearchField from "../../components/SearchField/SearchField";

function Homepage() {
  return (
    <div>
      <SearchField />
      <HowToUseSKUSearch />
      <Questions />
    </div>
  );
}

export default Homepage;

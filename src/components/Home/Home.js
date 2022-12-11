import Lists from "../Lists/Lists";
import SearchForm from "../SearchForm/SearchForm";
import Hero from "../Hero/Hero";
import { getAllLists } from "../../redux/store";


const Home = () => {

  return(
    <div>
      <Hero />
      <Lists />
    </div>
  )
};

export default Home;
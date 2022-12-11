import Lists from "../Lists/Lists";
import SearchForm from "../SearchForm/SearchForm";
import Hero from "../Hero/Hero";
import { getAllLists } from "../../redux/store";
import ListForm from "../ListForm/ListForm";


const Home = () => {

  return(
    <div>
      <Hero />
      <Lists />
      <ListForm />
    </div>
  )
};

export default Home;
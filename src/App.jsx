import Footer from "./components/footer";
import Header from "./components/header";
import SearchBar from "./components/searchBar";
import Stats from "./components/stats";

function App() {

  return (
    <div className='w-full h-screen'>
      <Header />
      <SearchBar />
      <Stats />
      <Footer />
    </div>
  );
}

export default App

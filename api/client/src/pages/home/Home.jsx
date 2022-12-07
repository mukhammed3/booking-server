import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import "./home.css";

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <Header />
        <div className="homeContainer">
          <h1 className="homeTitle">We have hotels in this cities</h1>
          <Featured />
          <h1 className="homeTitle">Browse by property type</h1>
          <PropertyList />
          <h1 className="homeTitle">Recently Added</h1>
          <FeaturedProperties />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;

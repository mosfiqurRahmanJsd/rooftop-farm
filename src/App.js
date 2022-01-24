
import Header from './components/Header/Header';
import Slider from './components/Slider/Slider';
import RooftopContainer from './components/RooftopContainer/RooftopContainer';
import ProductContainer from './components/ProductContainer/ProductContainer';
import ReviewContainer from './components/ReviewContainer/ReviewContainer';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <div className="App">
      <Header></Header>
      <Slider></Slider>
      <RooftopContainer></RooftopContainer>
      <ProductContainer></ProductContainer>
      <ReviewContainer></ReviewContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;

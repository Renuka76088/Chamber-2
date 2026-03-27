import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';

// Pages
import LandingPage from './Components/LandingPage';
import AboutUs from './Pages/AboutUs';
import ContactPage from './Pages/ContactPage';
import ProductsGallery from './Pages/ProductsGallery';
import Management from './Pages/Management';
import AssociatesMap from './Pages/AssociatesMap';
import TradeEnquiryForm from './Pages/TradeEnquiryForm';
import Products from './Pages/Products';
import EQuotation from './Pages/EQuotation';
import EAuction from './Pages/EAuction';
import TenderContract from './Pages/TenderContract';
import Career from './Pages/Career';
import Circular from './Pages/Circular';
import Blog from './Pages/Blog';
import CustomerReview from './Pages/CustomerReview';
import Appointment from './Pages/Appointment';
import MediaGallery from './Pages/MediaGallery';
import Chatbot from './Components/Chatbot';
import ScrollToTop from '../../ScrollToTop';

function App() {
  return (
    <BrowserRouter>
       <ScrollToTop />
      {/* Wrapper to ensure clean white background and consistent text color */}
      <div className="bg-white min-h-screen text-[#333333] font-sans selection:bg-[#B79A63] selection:text-white relative">
        <Header />
        
        <main className="min-h-[calc(100vh-theme('spacing.24'))]">
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/about' element={<AboutUs />} />
            <Route path='/contact' element={<ContactPage />} />
            
            {/* Pages dropdown routes */}
            <Route path='/products-gallery' element={<ProductsGallery />} />
            <Route path='/management' element={<Management />} />
            <Route path='/associates' element={<AssociatesMap />} />
            <Route path='/enquiry' element={<TradeEnquiryForm />} />
            
            {/* New Pages */}
            <Route path='/products' element={<Products />} />
            <Route path='/e-quotation' element={<EQuotation />} />
            <Route path='/e-auction' element={<EAuction />} />
            <Route path='/tender-contract' element={<TenderContract />} />
            <Route path='/career' element={<Career />} />
            <Route path='/circular' element={<Circular />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/customer-review' element={<CustomerReview />} />
            <Route path='/appointment' element={<Appointment />} />
            <Route path='/media-gallery' element={<MediaGallery />} />
          </Routes>
        </main>
        
        <Footer />
        
        {/* Global Chatbot for Parekh Silk Fabric */}
        <Chatbot />
      </div>
    </BrowserRouter>
  );
}

export default App;

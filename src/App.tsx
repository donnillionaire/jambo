
// // App.tsx
// import React from 'react';
// import { HashRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import HeroSection from './components/HeroSection';
// import FeaturedProperties from './components/FeaturedProperties';
// import PopularTowns from './components/PopularTowns';
// import EmailSignup from './components/EmailSignup';
// import FooterLinks from './components/FooterLinks';
// import SearchResultsPage from './components/SearchResultsPage';
// import PropertyDetailPage from './components/PropertyDetailPage';

// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen flex flex-col">
//         <Header />
//         <main className="flex-grow">
//           <Routes>
//             {/* Home page */}
//             <Route
//               path="/"
//               element={
//                 <>
//                   <HeroSection />
//                   <FeaturedProperties />
//                   <PopularTowns />
//                 </>
//               }
//             />
//             {/* Search results page */}
//             <Route path="/results" element={<SearchResultsPage />} />

//             <Route path="/property/:id" element={<PropertyDetailPage />} />

//           </Routes>
//         </main>
//         {/* <EmailSignup /> */}
//         <FooterLinks />
//       </div>
//     </Router>
//   );
// }

// export default App;



// App.tsx
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturedProperties from './components/FeaturedProperties';
import PopularTowns from './components/PopularTowns';
import FooterLinks from './components/FooterLinks';
import SearchResultsPage from './components/SearchResultsPage';
import PropertyDetailModal from './components/PropertyDetailModal'; // ✅ Import modal
import type { Property } from './types'; // ✅ Your Property type

function App() {
  // ✅ Modal state at top level
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openPropertyDetail = (property: Property) => {
    setSelectedProperty(property);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProperty(null);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            {/* Home page */}
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  {/* ✅ Pass handler to FeaturedProperties */}
                  <FeaturedProperties onPropertyClick={openPropertyDetail} />
                  <PopularTowns />
                </>
              }
            />
            {/* Search results page (also uses modal) */}

            <Route path="/results" element={<SearchResultsPage />} />
            {/* <Route
              path="/results"
              element={<SearchResultsPage onPropertyClick={openPropertyDetail} />}
            /> */}
            {/* ❌ Remove this if you're using modals instead of pages */}
            {/* <Route path="/property/:id" element={<PropertyDetailPage />} /> */}
          </Routes>
        </main>
        <FooterLinks />

        {/* ✅ Render modal at root level */}
        <PropertyDetailModal
          property={selectedProperty}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      </div>
    </Router>
  );
}

export default App;
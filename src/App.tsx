// import React from 'react';
// import Header from './components/Header';
// import HeroSection from './components/HeroSection';
// import FeaturedProperties from './components/FeaturedProperties';
// import PopularTowns from './components/PopularTowns';
// import EmailSignup from './components/EmailSignup';
// import FooterLinks from './components/FooterLinks';

// function App() {
//   return (
//     <div className="min-h-screen flex flex-col">
//       <Header />
//       <main className="flex-grow">
//         <HeroSection />
//         <FeaturedProperties />
//         <PopularTowns />
//         <FooterLinks />
//       </main>
//     </div>
//   );
// }

// export default App;


// App.tsx
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturedProperties from './components/FeaturedProperties';
import PopularTowns from './components/PopularTowns';
import EmailSignup from './components/EmailSignup';
import FooterLinks from './components/FooterLinks';
import SearchResultsPage from './components/SearchResultsPage';
import PropertyDetailPage from './components/PropertyDetailPage';

function App() {
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
                  <FeaturedProperties />
                  <PopularTowns />
                </>
              }
            />
            {/* Search results page */}
            <Route path="/results" element={<SearchResultsPage />} />

            <Route path="/property/:id" element={<PropertyDetailPage />} />

          </Routes>
        </main>
        {/* <EmailSignup /> */}
        <FooterLinks />
      </div>
    </Router>
  );
}

export default App;
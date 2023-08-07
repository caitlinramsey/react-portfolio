// import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './components/nav/Navigation';
import Footer from './components/footer/Footer'

// import Header from './components/header/Header'
// // import About from './components/about/About'
// // import Experience from './components/experience/Experience'
// // import Project from './components/project/Project'
// // import Services from './components/services/Services'
// // import Contact from './components/contact/Contact'
// import Footer from './components/footer/Footer'

// const App = () => {
//     return (
//         <>
//             <Header />
//             <Navigation />
//             <About />
//             <Experience />
//             <Project />
//             <Services />
//             <Contact />
//             <Footer />
//         </>
//     )
// }

function App() {
  return (
    <>
      <Navigation />
      <main className='mx-3'>
        <Outlet />
        <Footer />
      </main>
    </>
  );
}

export default App;
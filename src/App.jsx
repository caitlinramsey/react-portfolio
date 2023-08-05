import React from 'react'
import Header from './components/header/Header'
import Navigation from './components/nav/Navigation'
import About from './components/about/About'
import Experience from './components/experience/Experience'
// import Services from './components/services/Services'
// import Project from './components/project/Project'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
    return (
        <>
            <Header />
            <Navigation />
            <About />
            <Experience />
            {/* <Services /> */}
            {/* <Project /> */}
            <Contact />
            <Footer />
        </>
    )
}

export default App;
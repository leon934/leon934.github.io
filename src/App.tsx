import React from 'react';
import Navbar from './components/Navbar.tsx';
import Self from './components/self/Self.tsx';
import Project from './components/project-list/Project.tsx';
import Interest from './components/interests/Interest.tsx';
import Contact from './components/contact/Contact.tsx';
import Timeline from './components/timeline/Timeline';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />

      <div className="content">
        <Self />
        <Project />
        {/* <Timeline /> */}
        <Interest />
        <Contact />
      </div>
    </div>
  );
}

export default App;

import Navbar from './components/Navbar';
import Self from './components/self/Self';
import Project from './components/project-list/Project'
import Interest from './components/interests/Interest'
import Contact from './components/contact/Contact'
import Timeline from './components/timeline/Timeline'

function App() {

  return (
    <div className="App">
      <Navbar />

      <div className="content">
        <Self />
        <Project />
        {/* <Timeline /> */}
        <Interest />
        {/* <Contact /> */}
      </div>
    </div>
  );
}

export default App;

import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {

  return (
  <>
 
 <Navbar/> {/*comments*/ }
{ /* <Navbar title="TextUtils"/>*/}
<div className="container my-3">
    <TextForm heading="Message Box"/>
</div>
  </>
  );
}

export default App;

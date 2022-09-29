import './App.css';
import ShowTrain from './Pages/ShowTrain';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import 'animate.css';
import { useRef } from 'react';

function App() {

  const title = useRef();

  function animateIt() {

    title.current.classList.remove("animate__bounce");

      setTimeout(() => {
        title.current.classList.add("animate__bounce");
      }, 1)

    }


  return (
    <>
    <Header />

    <div className="App container">
      <h1 id="title" className='animate__animated animate__bounce' ref={title} onClick={() => animateIt()}>Title</h1>
      <p>Description</p>
      <ShowTrain />
      <div>Kviz</div>
    </div>
    </>
  );
}

export default App;



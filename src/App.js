import './App.css';
import ShowTrain from './Pages/ShowTrain';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Quiz from './Pages/Quiz';
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
      <h1 id="title" className='animate__animated animate__bounce text-center my-4' ref={title} onClick={() => animateIt()}>London Underground S7 and S8 Stock</h1>
      <p className="bg-light mb-4 animate__animated animate__fadeInBottomLeft">This article is about London Underground rolling stock introduced from 2010. For the 1930s stock, see London Underground S Stock (ex-Metropolitan Railway).
      The London Underground S7 and S8 Stock, commonly referred to as S Stock, is a type of passenger train running on the London Underground's subsurface lines since 2010. Manufactured by Bombardier Transportation's Derby Litchurch Lane Works, the S Stock was ordered to replace the A60, A62, C69, C77 and D78 stock on the Metropolitan, District, Hammersmith & City, and Circle lines, which all dated from the 1960s and 1970s. The order was for a total of 192 trains (1,403 cars), and consisted of two types, S7 Stock for the Circle, District and Hammersmith & City lines, and S8 Stock for the Metropolitan line, with differences in the arrangement of seating and number of cars. Both types have air-conditioning and low floors to ease accessibility for disabled people, and also have open gangways to allow passengers to move from one car to another whilst the train is moving.[3]
      </p>
      <ShowTrain className="mb-2" />
      <p className="bg-light mt-4 animate__animated animate__fadeInBottomLeft">The order was said to be the biggest single rolling-stock order in Britain[4] at, according to Transport for London, a cost of £1.5 billion.[5]

Passenger service began on the Metropolitan line in July 2010, the Hammersmith & City line in July 2012, and the Circle and District lines in September 2013. The S Stock completely replaced the A Stock on the Metropolitan line in September 2012, and the C Stock on the Circle and Hammersmith & City lines in February 2014, and on the Edgware Road branch of the District line in June 2014; it fully replaced the D Stock on the rest of the District line in April 2017.</p>
   
<p className="bg-light mt-4 animate__animated animate__fadeInBottomLeft">
     The S designation stands for sub-surface following the London Underground tradition of designating surface stock with a letter associated with its intended route—A Stock on the Metropolitan line to Amersham,[6] the C Stock on the Circle line,[7] and D Stock on the District line.[8]

Part of Bombardier's Movia family, the stock consists of 133 S7 seven-car trains for the Circle, District and Hammersmith & City lines, and 59 S8 eight-car trains for the Metropolitan line.[1] There were also three additional eight-car trains called an S7+1 in use on the Metropolitan Line while the eight-car S8 trains were returned for engineering modifications and ATC fitment. These trains were formed of a seven-car S7 and an additional car from another S7, forming an eight-car train. These trains, however, retained the all-longitudinal seating of the S7, and thus could be distinguished from the remaining S8s. Two of these trains were modified back to seven-car trains and transferred for service on the Circle, District and Hammersmith & City Lines in 2018.[9] The S8 Stock entered service between 2010 and 2012, operating all services by September 2012.

The S Stock has faster acceleration than previous trains, at 1.3 m/s2 (2.9 mph/s), but its top speed is 100 km/h (62 mph), 13 km/h (8 mph) slower than A Stock but faster than C and D Stocks. During the period of dual operation with both old and new trains, the stock had its performance capped to match that of the older trains in order to comply with signalling constraints and avoid bunching of the service. S8 stock trains seat 306 passengers compared with 448 for A Stock, a reduction of 32%, but can accommodate 25% more standing passengers (1,226 compared with 976) and have dedicated space for wheelchairs.[4]

As of 2017, the fleet is significantly more reliable than older trains, averaging around 110,000 km (68,000 mi) between failures[10][11] — around seven times further than A Stock and C Stock trains, and three times further than D Stock.[11]

The voltage has been increased from nominal 630 volts to 750 volts. This allows for better performance and also for the increased power demands of air-conditioned, fully motored-axle trains, and allow the trains to return energy to the network through regenerative braking.[2][12]

Currently, the S Stock is manually operated on most of the Metropolitan line and District lines, and part of the Hammersmith & City and Circle lines. The section between Latimer Road and Hammersmith was switched over to automatic operation on 10 March 2019,[13] while the sections between Latimer Road and Euston Square, Paddington and Edgware Road, and Finchley Road and Euston Square, were automated on 1 September 2019.
     </p>
     <Quiz />
     </div>
    </>
  );
}

export default App;


// You may serve it with a static server:

//   npm install -g serve
//   serve -s build
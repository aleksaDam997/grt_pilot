import React, { useEffect, useState, useRef } from 'react'
import './Quiz.css';


export default function Quiz(props) {

  const[question, setQuestion] = useState(["1. What S designation stands for?", "2. What is the S Stock top speed?", "3. What is S Stock passengers capacity?"])
  const[answer, setAnswer] = useState([{
    a: "Sub-surface",
    b: "Super",
    c: "Slow",
    d: "Service"
  },
  {
    a: "80 km/h (50 mph)",
    b: "90 km/h (56.25 mph)",
    c: "110 km/h (68.75 mph)",
    d: "100 km/h (62.5 mph)"
  },
  {
    a: "280",
    b: "306",
    c: "322",
    d: "401"
  }])

  const[isCorrect, setIsCorrect] = useState([{
    a: true,
    b: false,
    c: false,
    d: false
  },
  {
    a: false,
    b: false,
    c: false,
    d: true
  },
  {
    a: false,
    b: true,
    c: false,
    d: false
  }]);

  const[count, setCount] = useState(0);

  const ref = useRef({ a: undefined, b: undefined, c: undefined, d: undefined });

  const quiz = useRef(null);
  const stats = useRef(null)

  const [accuracy, setAccuracy] = useState(0);

  useEffect(() => {

  }, [question, answer, count]);

  function answeredQuestion(ans) {
    console.log(count)


    // }
    if(isCorrect[count][ans]){

      ref.current[ans].classList.add("bg-success")


      setTimeout(() => {
        ref.current[ans].classList.remove("bg-success");
      }, 1200)

      setAccuracy(accuracy + 1);

    }else {
      ref.current[ans].classList.add("bg-warning");

      if(isCorrect[count].a){
        ref.current.a.classList.add("bg-danger")

        setTimeout(() => {
          ref.current[ans].classList.remove("bg-warning");
          ref.current.a.classList.remove("bg-danger")
        }, 1200)
      }else if(isCorrect[count].b){
        ref.current.b.classList.add("bg-danger")

        setTimeout(() => {
          ref.current[ans].classList.remove("bg-warning");
          ref.current.b.classList.remove("bg-danger")
        }, 1200)
      }else if(isCorrect[count].c){
        ref.current.c.classList.add("bg-danger")

        setTimeout(() => {
          ref.current[ans].classList.remove("bg-warning");
          ref.current.c.classList.remove("bg-danger")
        }, 1200)
      }else if(isCorrect[count].d){
        ref.current.d.classList.add("bg-danger")

        setTimeout(() => {
          ref.current[ans].classList.remove("bg-warning");
          ref.current.d.classList.remove("bg-danger")
        }, 1200)
      }

    }

    setTimeout(() => {

        if(count >= question.length - 1) {

          console.log(1)
          quiz.current.classList.remove("grid-container");
          quiz.current.classList.add("d-none");

          stats.current.classList.remove("d-none");
          stats.current.classList.add("d-block");
        }

        if(count < 2)
        setCount(count + 1);
    }, 1200)
  }

  function testReset() {
    setCount(0);
    setAccuracy(0);

    stats.current.classList.remove("d-block");
    stats.current.classList.add("d-none");
    
    quiz.current.classList.remove("d-none");
    quiz.current.classList.add("grid-container");
    
  }

  return (
    <>
      <div ref={quiz} className="grid-container">
          <div className='question'>
            {question[count]}
          </div>
          <button ref={node => (ref.current.a = node)} className="answerA" onClick={() => answeredQuestion("a")}>
              {answer[count].a}
          </button>
          <button ref={node => (ref.current.b = node)} className="answerB" onClick={() => answeredQuestion("b")}> 
          {answer[count].b}
          </button>
          <button ref={node => (ref.current.c = node)} className="answerC" onClick={() => answeredQuestion("c")}>
          {answer[count].c}
          </button>
          <button ref={node => (ref.current.d = node)} className="answerD" onClick={() => answeredQuestion("d")}>
          {answer[count].d}
          </button>
      </div>
      <div ref={stats} className="d-none stats-container">
        <div className="row">
          <div className="col">
            <div className='row'><p className="text-center">Correct answers:</p></div>
            <div className='row'><p className="text-center">{accuracy} / {question.length}</p></div>
          </div>
          <div className="col">
          <div className='row'>
          <p className="text-center">Percentage:</p>
          </div>
            <div className='row'><p className="text-center">{accuracy / question.length * 100} %</p></div>
            
          </div>
          <div className="col">
          <div className='row'>
          <p className="text-center">Result:</p>
          </div>
            <div className='row'><p className="text-center">{accuracy / question.length * 100 > 51 ? "Passed" : "Failed"}</p></div>
            
          </div>
        </div>
        <div className="button-container">
          <button className='btn btn-lg w-100 btn-dark' onClick={() => testReset()}>Run test again</button>
        </div>
      </div>
    </>
  )
}

import { getQuestions } from "./useSlice";
import { useDispatch } from 'react-redux';
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MyTimer from "./MyTimer";
import { Navigate } from "react-router-dom";
import { useTimer } from 'react-timer-hook';

function App() {

  const ques = useSelector((state) => state.quiz.value);

  let isLoading = true;
  if (ques.questions.length > 0) {
    console.log("hit");
    isLoading = false
  }

  const [index, setIndex] = useState(0);
  const handleNextQ = () => {
    if (index < 9)
      setIndex(index + 1);
    else {
      console.log("Result");
    }
  }

  const time = new Date();
  time.setSeconds(time.getSeconds() + 50); // 50 sec timer
  console.log(time);
  const {
    seconds,
    restart,
  } = useTimer({
    time, onExpire: () => {

    }
  });

  return (
    <div className="App">

      <h1>App</h1>
      {
        isLoading ? <h1>Loading...</h1> : <div>
          <h1>{ques.questions[index].question}</h1>
          <h3>{ques.questions[index].correct_answer}</h3>

          <div><div style={{ textAlign: 'center' }}>
            <h1>Time left</h1>
            <div style={{ fontSize: '100px' }}>
              <span>{seconds}</span>
            </div>
            <button onClick={() => {
              handleNextQ();
            }}>Next</button>
          </div>
          </div>
          {/* <MyTimer expiryTimestamp = {time}></MyTimer> */}
        </div>
      }

    </div>
  );
}

export default App;

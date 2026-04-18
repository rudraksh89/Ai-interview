import React, { useState } from 'react'
import Step1SetUp from '../components/Step1SetUp';
import Step2Interview from '../components/Step2Interview';
import Step3Report from '../components/Step3Report';

const InterviewPage = () => {
  const[step,setstep] = useState(1);
  const[interviewdata,setinterviewdata] = useState(null);
  return (
    <div className='min-h-screen bg-gray-50'>
      {step === 1 && (
        <Step1SetUp onstart={(data)=>{setinterviewdata(data);
          setstep(2)
        }}/>
      )}

      {step === 2 && (
        <Step2Interview interviewdata={interviewdata} onFinish={(report)=>{setinterviewdata(report);
          setstep(3)
        }}/>
      )}


      {step===3 && (
        <Step3Report report={interviewdata}/>
      )}
      
    </div>
  )
}

export default InterviewPage

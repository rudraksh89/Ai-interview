import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { useSelector } from 'react-redux'
import { motion } from "motion/react"
import { BsRobot, BsMic, BsClock, BsBarChart, BsFileEarmarkText } from 'react-icons/bs'
import { HiSparkles } from 'react-icons/hi'
import Auth from './Auth'
import AuthModel from '../components/AuthModel'
import { useNavigate } from 'react-router-dom'
// import hrImg from "../assets/HR.png";
// import techImg from "../assets/tech.png"
// import confidenceImg from "../assets/confi.png";
// import creditImg from "../assets/credit.png"
// import evalImg from "../assets/ai-ans.png"
// import resumeImg from "../assets/resume.png"
// import pdfImg from "../assets/pdf,png"
// import analyticsImg from "../assetshistory.png"

const Home = () => {
  const { userData } = useSelector((state) => state.user)
  const [showAuth,setshowAuth] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />

      <div className='flex-1 px-6 py-20'>
        <div className='flex justify-center mb-6'>
          <div className='bg-green-50 text-green-600 text-sm px-4 py-1.5 rounded-full flex items-center gap-2'> {/* ✅ fixed: "bg-gray-10-" → "bg-green-50" */}
            <HiSparkles size={16} className='text-green-600'/> {/* ✅ fixed: removed invalid bg class from icon */}
            AI Powered Smart Interview Platform
          </div>
        </div>

        <div className='text-center mb-28'>
          <motion.h1
          
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='text-4xl md:text-6xl font-semibold leading-tight max-w-4xl mx-auto' 
          >
            Practice Interviews With
            <span className='bg-green-100 text-green-600 px-5 py-1 rounded-full inline-block'>
              AI Intelligence
            </span>
          </motion.h1>

          <motion.p 
          initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          className='text-gray-500 mt-6 max-w-2xl mx-auto text-lg'>
            Role-based mock interviews with smart follow-ups adaptive difficulty and real time performance evaluation.
          </motion.p>

          <div className='flex flex-wrap justify-center gap-4 mt-10'>
            <motion.div 
            onClick={()=>{
              if(!userData){
                setshowAuth(true);
                return;
              }
              navigate("/interview")
            }}
            whileHover={{opacity:0.9,scale:1.03}}
        whileTap={{opacity:1,scale:0.98}}
        className='bg-black text-white px-10 py-3 rounded-full hover:opacity-90 transition shadow-md'
            >
              Start Interview
            </motion.div>
            


            <motion.div 
            onClick={()=>{
              if(!userData){
                setshowAuth(true);
                return;
              }
              navigate("/history")
            }}
            whileHover={{opacity:0.9,scale:1.03}}
        whileTap={{opacity:1,scale:0.98}}
        className='border border-gray-300 px-10 py-3 rounded-full hover:bg-gray-100 transition'
            >
              History
            </motion.div>
          </div>
        </div>
        
        <div className='flex flex-col md:flex-row justify-center items-center gap-10 mb-28'>
  {[
    { icon: <BsRobot size={24} />, step: "STEP 1", title: "Role & Experience Selection", desc: "AI adjusts difficulty based on selected job role and experience level." },
    { icon: <BsMic size={24} />, step: "STEP 2", title: "Smart Voice Interview", desc: "Dynamic follow-up questions based on your answers in real time." },
    { icon: <BsClock size={24} />, step: "STEP 3", title: "Timer Based Simulation", desc: "Real interview pressure with time tracking on every question." },
  ].map((item, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={`
        relative bg-white rounded-3xl border-2 border-green-100
        p-10 w-80 max-w-[90%] shadow-md
        hover:border-green-500 hover:shadow-2xl
        transition-all duration-300
        ${index === 0 ? "rotate-[-4deg]" : ""}
        ${index === 1 ? "rotate-[3deg] md:-mt-6 shadow-xl" : ""}
        ${index === 2 ? "rotate-[-3deg]" : ""}
      `}
    >
      {/* Floating step badge */}
      <div className='absolute -top-4 left-1/2 -translate-x-1/2 bg-white border-2 border-green-500 text-green-600 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg'>
        {item.icon}
      </div>

      <div className='mt-8 text-center'>
        <p className='text-xs font-semibold text-gray-400 tracking-widest mb-2'>{item.step}</p>
        <h3 className='font-semibold text-gray-900 text-base mb-2'>{item.title}</h3>
        <p className='text-gray-500 text-sm leading-relaxed'>{item.desc}</p>
      </div>
    </motion.div>
  ))}
</div>


      <div className='mb-32'>
        <motion.h2 
        initial={{opacity:0,y:20}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.6}}
        className='text-4xl font-semibold text-center mb-16'
        >
          Advanced AI{" "}
          <span className='text-green-600'>Capabilities</span>
        </motion.h2>

        
      </div>
      </div>
      {showAuth && <AuthModel onclose={()=>setshowAuth(false)}/>}
    </div>
  )
}

export default Home
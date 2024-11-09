import React, { useEffect, useState } from 'react'
import myphoto from '../assets/pranav.jpg'
import { FaChevronRight } from "react-icons/fa";
import Skills from './Skills';
import backgroundImage from '/background.jpeg';
import data from './SkillData';
import { motion } from 'framer-motion';

export default function About() {

  const pageVariants = {
    initial: {
        opacity: 0,
        x: "-100vw",
    },
    in: {
        opacity: 1,
        x: 0,
    },
    out: {
        opacity: 0,
        x: "100vw",
    },
};

const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.3,
};


  return (
    <motion.div className='container-fluid mt-2'
    initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
    >
      {/* ABOUT Section */}
      <div className="container-fluid">
        <h6 className='text-white about'>ABOUT</h6>
        <h1 className='text-white' style={{ textAlign: 'start' }}>MORE ABOUT ME</h1>
        <div className='row mt-5'>
          <motion.div
            className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-center align-items-center'
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          >
            <img src={myphoto} className='center' alt='myPhoto' height={350} />
          </motion.div>
          <motion.div
            className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12'
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          >
            <h3 style={{ color: 'green', textAlign: 'start' }} className='mt-1'>Third-year at Pimpri Chinchwad College of Engineering</h3>
            <p className='italic text-white' style={{ color: 'white', fontStyle: 'italic', textAlign: 'start' }}>
              Passionate programmer who is keen on exploring opportunities.
            </p>
            <ul className='text-white navbar' style={{ listStyle: 'none' }}>
              <li className='nav-item'>
                <FaChevronRight style={{ color: 'green' }} />
                <strong>Degree:</strong>
                B.Tech (Pursuing)
              </li>
              <li className='nav-item'>
                <FaChevronRight style={{ color: 'green' }} />
                <strong>City:</strong>
                Pune, India
              </li>
              <li className='nav-item'>
                <FaChevronRight style={{ color: 'green' }} />
                <strong>Specialization:</strong>
                Information Technology
              </li>
            </ul>
            <p className='text-white' style={{ textAlign: 'start' }}>
              Hello! My name is Pranav Sandip Sutar, and I'm 20 years old. I am currently a student pursuing my education in BTech Information Technology at Pimpri Chinchwad College of Engineering Pune. I'm passionate about Coding, gaining knowledge, and I strive to make the most of every opportunity that comes my way.
              <br />
              I possess a range of skills that I have developed through my education and experiences. I am proficient in C programming, Python Programming, Java Programming, Data Structure, Web development, and I am always eager to learn and improve.
            </p>
          </motion.div>
        </div>
      </div>

      {/* SKILLS Section */}
      <motion.div
        className="container mt-5"
        initial={{ x: '100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
      >
        <h6 className='text-white about'>SKILLS</h6>
        <div className='row'>
          {
            data.map((ele, index) => {
              return (
                <Skills {...ele} key={index} />
              )
            })
          }
        </div>
      </motion.div>
    </motion.div>
  )
}

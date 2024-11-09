import React from 'react'
import Card from 'react-bootstrap/Card';
import {motion} from 'framer-motion'

export default function Achievements() {
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
            <motion.div className="container-fluid mt-3"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            >
                <h6 className='text-white about'>ACHIEVEMENTS/EXTRA CURRICULARS</h6>
                <motion.div className="row mt-3" 
                    initial={{ y: 60, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                >
                    <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12 text-white p-2'>
                        <Card bg={'dark'} className='pointer shadow-card'>
                            <Card.Img variant="top" src="./resource/bos.jpg" className='card-image' />
                            <Card.Body>
                                <Card.Title className='text-center text-light'>Best Outgoing Student</Card.Title>
                                <Card.Text className='text-center text-light'>
                                <em>Ashokrao Mane Polytechnic</em>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12 text-black p-2'>
                    <Card bg={'dark'} className='pointer shadow-card'>
                            <Card.Img variant="top" src="./resource/topper.jpg" className='card-image' />
                            <Card.Body>
                                <Card.Title className='text-center text-light'>Academic Topper</Card.Title>
                                <Card.Text className='text-center text-light'>
                                <em>Ashokrao Mane Polytechnic</em>
                                </Card.Text>
                            </Card.Body>
                    </Card>
                    </div>
                    <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12 text-black p-2'>
                    <Card bg={'dark'} className='pointer shadow-card'>
                            <Card.Img variant="top" src="./resource/nsse.jpg" className='card-image' />
                            <Card.Body>
                                <Card.Title className='text-center text-light'>State Rank 10</Card.Title>
                                <Card.Text className='text-center text-light'>
                                <em>National Scholar Search Examination,Pune</em>
                                </Card.Text>
                            </Card.Body>
                    </Card>
                    </div>
                    <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12 text-black p-2'>
                    <Card bg={'dark'} className='pointer shadow-card'>
                            <Card.Img variant="top" src="./10thtrophy.jpg" className='card-image' />
                            <Card.Body>
                                <Card.Title className='text-center text-light'>2nd Rank in 10th Standard</Card.Title>
                                <Card.Text className='text-center text-light'>
                                <em>Shri Nageshwar HighSchool,Rashiwade Bk!</em>
                                </Card.Text>
                            </Card.Body>
                    </Card>
                    </div>
                    <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12 text-black p-2'>
                    <Card bg={'dark'} className='pointer shadow-card'>
                            <Card.Img variant="top" src="./chemisttrophy.jpg" className='card-image' />
                            <Card.Body>
                                <Card.Title className='text-center text-light'>2nd Rank in District Level Essay Competation</Card.Title>
                                <Card.Text className='text-center text-light'>
                                <em>
                                    Facilitated by Chemist Group, Kolhapur
                                </em>
                                </Card.Text>
                            </Card.Body>
                    </Card>
                    </div>
                </motion.div>
            </motion.div>
    )
}

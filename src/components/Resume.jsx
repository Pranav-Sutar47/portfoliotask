import React from 'react'
import { BsBoxArrowUpRight } from "react-icons/bs";
import Card from 'react-bootstrap/Card';
import {motion} from 'framer-motion'

export default function Resume() {
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
            <motion.div className="container-fluid mt-2 bg-black"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            >
                <h6 className='text-white about'>RESUME</h6>
                <h1 className='text-white' style={{ textAlign: 'start' }}>CHECK OUT MY RESUME</h1>
                
                <motion.div className="row mt-3"
                    initial={{ y: 60, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                >
                    <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                        <h3 className='text-white text-start'>Summary</h3>
                        <div className='text-white text-start p-1'>
                            <h4 className='circle'>Pranav Sutar</h4>
                            <div className='borderLeft'><em>
                                Innovative and self-motivated computer engineering student with keen interest in programming and
                                developing technical solutions for betterment of society.
                            </em>
                                <ul>
                                    <li>Akurdi,Pune,India</li>
                                </ul>
                            </div>
                        </div>

                        <h3 className='text-white text-start mt-2'>Education</h3>
                        <div className='text-white text-start p-1'>
                            <h4 className='circle'>Bachelor of Engineering </h4>
                            <div className='borderLeft'>
                                <h6 className='allBorder'>2023-2026<sup> *</sup></h6>
                                <p><em>
                                    Pimpri Chinchwad College of Engineering, Pune, India
                                </em><br /><br />
                                    Specialization: Information Technology
                                    <br />
                                    CGPA: 7.8/10*
                                </p>
                            </div>
                            <h4 className='circle'>Diploma In Computer Engineering </h4>
                            <div className='borderLeft'>
                                <h6 className='allBorder'>2020-2023</h6>
                                <p><em>
                                    Ashokrao Mane Polytechnic, Kolhapur, India
                                </em><br /><br />
                                    Diploma in Computer Engineering
                                    <br />
                                    Percentage: 91.89%
                                </p>
                            </div>
                            <h4 className='circle'>Schooling </h4>
                            <div className='borderLeft'>
                                <h6 className='allBorder'>2020</h6>
                                <p><em>
                                    Shri Nageshwar HighSchool Rashiwade BK., Kolhapur, India
                                </em><br /><br />
                                    Maharashtra State Board Percentage:96%
                                </p>
                            </div>
                            <h3 className='text-white text-start mt-3'>Professional Experience</h3>
                            <div className='text-white text-start p-1'>
                                <h4 className='circle'>Microchip</h4>
                                <div className='borderLeft'>
                                    <h6 className='allBorder'>2024</h6>
                                    <em>
                                        Embedded System Developer Internshhip
                                    </em>
                                </div>
                            </div>
                            <div className='text-white text-start p-1'>
                                <h4 className='circle'>Revolution IT Solutions</h4>
                                <div className='borderLeft'>
                                    <h6 className='allBorder'>2022</h6>
                                    <em>
                                        Front End Developer Internship
                                    </em>
                                    <ul>
                                        <li>Developed an Ecommerce Website and Restaurant Website</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                        <h3 className='text-white text-start mt-3'>Projects</h3>
                        <Card
                        className='card-3d mt-2'
                        bg={'dark'}
                        text={'white'}
                        >
                            <Card.Body>
                                <Card.Title>IOT BASED RIVER WATER QUALITY MONITORING SYSTEM
                                    <a href='https://github.com/Pranav-Sutar47/' target='blank' className='nextPage'>
                                        <BsBoxArrowUpRight />
                                    </a>
                                </Card.Title>
                                <div>
                                    <h6 className='allBorder'>Third Year Mega Project(Diploma)</h6>
                                    <ul>
                                        <li>Real-Time Data Collection:Sensors deployed in the river measure various water quality parameters such as pH, temperature, turbidity.The data collected by these sensors is transmitted in real-time to a central server using IoT technology.</li>
                                        <li>
                                            IoT Integration:The system leverages IoT devices such as microcontrollers (Arduino) equipped with wireless communication modules (Wi-Fi Module).These devices send the collected data to a cloud-based platform for storage and analysis.
                                        </li>
                                        <li>
                                            Mobile App Interface:A user-friendly mobile app allows stakeholders (e.g., environmental agencies, District Collector) to access real-time water quality data.The app provides alerts and notifications for any significant changes or threshold breaches in water quality parameters.
                                        </li>
                                        <li>
                                            Data Analytics and Visualization:Advanced data analytics are applied to the collected data to detect trends, anomalies, and potential contamination events.
                                        </li>
                                    </ul>
                                </div>
                            </Card.Body>
                        </Card>

                        <Card className='mt-2 card-3d' bg={'dark'}
                        text={'white'}>
                            <Card.Body>
                                <Card.Title>PANDA NEWS
                                    <a href='https://github.com/Pranav-Sutar47/PandaNews' target='blank' className='nextPage'>
                                        <BsBoxArrowUpRight />
                                    </a>
                                </Card.Title>
                                <div>
                                    <ul>
                                        <li>News Monkey is a dynamic news application designed to keep users updated with the latest news worldwide. It is built using React.js and leverages the NewsAPI to fetch news articles. </li>
                                        <li>
                                            Customization: Users can customize their news feed based on their country of interest, ensuring they receive relevant news that matters most to them.
                                        </li>
                                        <li>
                                            User-Friendly Interface: The application is designed to be intuitive and easy to use, providing a seamless experience for browsing news.
                                        </li>
                                        <li>
                                            Responsive Design: The app is responsive and works well across different devices, including desktops, tablets, and smartphones.
                                        </li>
                                    </ul>
                                </div>
                            </Card.Body>
                        </Card>

                        <Card className='mt-2 card-3d' bg={'dark'}
                        text={'white'}>
                            <Card.Body>
                                <Card.Title>Task Vibe
                                    <a href='https://taskvibe.netlify.app/login' target='blank' className='nextPage'>
                                        <BsBoxArrowUpRight />
                                    </a>
                                </Card.Title>
                                <div>
                                    <ul>
                                        <li> A MERN stack application designed to help you organize your tasks efficiently and stay on top of your to-do list. This app allows users to create tasks they want to complete, update task details, mark tasks as completed, and remove tasks as needed. It's designed to keep your workflow organized and manageable.</li>
                                        <li>
                                        This application leverages the full-stack MERN framework, with React for a dynamic user interface, Node.js and Express.js for the backend server, and MongoDB for data storage. 
                                        </li>
                                        <li>
                                            User-Friendly Interface: The application is designed to be intuitive and easy to use, providing a seamless experience for using.
                                        </li>
                                        <li>
                                            Responsive Design: The app is responsive and works well across different devices, including desktops, tablets, and smartphones.
                                        </li>
                                    </ul>
                                </div>
                            </Card.Body>
                        </Card>

                        <Card className='mt-2 mb-3 card-3d' bg={'dark'}
                        text={'white'}>
                            <Card.Body>
                                <Card.Title>INSTA CAFE AND RESTAURANT<a href='https://github.com/Pranav-Sutar47/InstaCafeAndRestaurant' target='blank' className='nextPage'>
                            <BsBoxArrowUpRight />
                                </a>
                                </Card.Title>
                                <div>
                            <ul>
                                <li>Online Ordering System:The website allows customers to place orders online, streamlining the order-taking process for the cafe or restaurant.Customers can browse the menu, select items, and complete their orders through the website.</li>
                                <li>
                                    Menu Management:The website includes an admin panel where the restaurant can manage its menu.Items can be added, removed, or updated easily to reflect current offerings
                                </li>
                                <li>
                                    Responsive Design:The website is designed to be responsive, ensuring it works well on desktops, tablets, and smartphones.
                                </li>
                                <li>
                                    Order Notifications:The system sends email or SMS notifications to customers to confirm orders and provide updates.Restaurant staff also receive notifications for new orders.
                                </li>
                            </ul>
                        </div>
                            </Card.Body>
                        </Card>

                    </div>


                </motion.div>
            </motion.div>

        //</div>
    )
}


"use client";
import React, { useEffect, useState } from 'react'
import square1 from "../public/images/about/square1.png"
import squareShadow1 from "../public/images/about/squareShadow1.png"
import { projectsData } from '@/data/Data';
import { FaGithub } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Button from './ui/Button';
import ButtonURL from './ui/ButtonURL';

const Projects = () => {
  const [techStacks, setTechStacks] = useState([]);
  const [filterTeckStack, setFilterStack] = useState([])
  const [hoveredImageIndex, setHoveredImageIndex] = useState(null);
  const [value, setValue] = useState("All")
  const [shoeModal, setShowModal] = useState(false)
  const [modalData, setModalData] = useState([])
  const [projects, setProjects] = useState([])
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
})


    // passing project data to state
    useEffect(() => {
      if (projectsData) {
          setProjects(projectsData)
      }
  }, [projectsData])

  //filtering tectStack
  useEffect(() => {
    if (projectsData) {
      const extractedTechStacks = [...new Set(
        projects.flatMap(project => project.techStack.map(tech => tech.trim()))
      )];
      setTechStacks(["All", ...extractedTechStacks]);
    }

  }, [projects]);

  useEffect(() => {
    setFilterStack(projects)
}, [projects])

  // Prohject FIltering
  const handleProjectFilter = (item) => {
    setValue(item)
    if (item !== "All") {

      const filteredProjects = projectsData.filter(project =>
        project.techStack.some(stackItem => stackItem.trim() === item.trim())
      );
      setFilterStack(filteredProjects)
    }
    else if (item === "All") {
      setFilterStack(projectsData)
    }
  }

  //framer image animation
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"])

  const handleMouseMove = (e, index) => {
    setHoveredImageIndex(index);
    const rect = e.target.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / width - 0.5
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setHoveredImageIndex(null);
    x.set(0);
    y.set(0);
  };

  useEffect(() => {
    const mouseMove = (e) => {
        setMousePosition({
            x: e.clientX,
            y: e.clientY
        })
    }
    window.addEventListener("mousemove", mouseMove)
    return () => { window.addEventListener("mousemove", mouseMove) }
}, [])

  //text hide
  const truncateText = (text, wordsCount) => {
    const words = text.split(' ');
    if (words.length > wordsCount) {
      return words.slice(0, wordsCount).join(' ') + '...';
    }
    return text;
  };

  // modal
  const handleShowModal = (item) => {
    setModalData(item)
    setShowModal(true)
  }

  return (
    <div>
      <div className=' h-full pb-10' id="projects">
        <hr className="h-px  grbg-ay-900 bg-gradient-to-r from-[#0b011d]  via-[#3e2f5b] to-[#0b011d]  border-0 " />
        <div className='xl:px-[210px]  md:px-[140px]  sm:px-[100px] vsm:px-[12px] px-[7px]'>
          <div className='relative top-28  left-0 right-0 bottom-0 w-[100%] h-auto  xl:max-w-[1128px] lg:max-w-[1000px] md:max-w-  mr-auto ml-auto  '>

            <div className='absolute xl:left-32 left-0  bg-red500  '>
              <img className='md:w-full sm:w-20 w-16 '
                src={square1.src}
                alt="" />
              <div className='absolute top-0'>
                <img src={squareShadow1.src}
                  alt="" />
              </div>
            </div>
            <div className='absolute sm:top-20 top-10 xl:right-32 right-0 transform -rotate-90'>
              <img className='md:w-full sm:w-20 w-16'
                src={square1.src}
                alt="" />
              <div className='absolute top-0'>
                <img src={squareShadow1.src}
                  alt="" />
              </div>
            </div>
          </div>
          <div className='flex flex-col  justify-center items-center pt-10 '>
            <h2 className='bg-clip-text bg-gradient-to-br from-white via-[#bbb8c0] to-[#bbb8c0] text-transparent md:text-[88px] sm:text-[70px] vsm:text-[40px] text-[40px]  font-interV font-medium '>Projects</h2>
          </div>

          <div className='pt-16 flex items-center justify-center md:gap-8 gap-5 flex-wrap '>
            {
              techStacks.map((item, index) => (
                <ul className='fontManrope-medium text-white relative ' key={index}>
                  <li className={`cursor-pointer hover:scale-105 transition-all duration-150 md:text-base text-sm  ${value === item ? "text-[#6720a2]" : ""}`} onClick={() => handleProjectFilter(item)}>{item}</li>
                  <div className={`${value === item ? "h-[2px] bg-[#6720a2] mt-1" : ""}  `} ></div>
                </ul>
              ))
            }
          </div>
        {/* </div> */}


        <div className='pt-16  text-white'>
          <AnimatePresence>
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 md:gap-10 gap-14 px-1 group">
              {
                filterTeckStack && filterTeckStack.map((item, index) => (
                  <motion.div layout key={index}>
                    {
                      index % 2 === 0 && (
                        <div className="grid gap-4 cursor-pointer  relative" onClick={() => handleShowModal(item)} >
                          <div className='lg:p-8 md:p-7 sm:px-6 sm:py-5 px-5 py-4 rounded-2xl h-full  ' style={{ border: " 1px solid rgb(48, 45, 56)" }}
                            onMouseMove={(e) => handleMouseMove(e, index)}
                            onMouseLeave={handleMouseLeave}
                          >
                            <motion.img
                              className='rounded-xl '
                              src={item?.image.url.src}
                              alt=''
                              style={{
                                rotateX: hoveredImageIndex === index ? rotateX : 0,
                                rotateY: hoveredImageIndex === index ? rotateY : 0
                              }}
                              whileHover={{ scale: 1.04 }}
                            />
                          </div>
                          <p className='bg-clip-text  bg-gradient-to-br from-white via-[#bbb8c0] to-[#bbb8c0] md:text-2xl text-base fontManrope-medium tracking-wider'>{index + 1}. {item.title}</p>
                          <div
                            dangerouslySetInnerHTML={{ __html: truncateText(item.description || '', 15) }}
                            className='text-[#b5abcb] fontManrope-regular text-sm  tracking-wide leading-6 max-w-[500px] -mt-1 '
                          />
                        </div>
                      )
                    }
                    {
                      index % 2 === 1 && (
                        <div className="grid gap-4 md:mt-10 cursor-pointer " onClick={() => handleShowModal(item)}>
                          <div className='lg:p-8 md:p-7 sm:px-6 sm:py-5 px-5 py-4 rounded-2xl h-full  ' style={{ border: " 1px solid rgb(48, 45, 56)" }}
                            onMouseMove={(e) => handleMouseMove(e, index)}
                            onMouseLeave={handleMouseLeave}
                          >
                            <motion.img
                              className='rounded-xl'
                              src={item?.image.url.src}
                              alt=''
                              style={{
                                rotateX: hoveredImageIndex === index ? rotateX : 0,
                                rotateY: hoveredImageIndex === index ? rotateY : 0
                              }}
                              whileHover={{ scale: 1.04 }}
                            />
                          </div>
                          <p className='bg-clip-text  bg-gradient-to-br from-white via-[#bbb8c0] to-[#bbb8c0] md:text-2xl text-base fontManrope-medium tracking-wider'>{index + 1}. {item.title}</p>
                          <div
                            dangerouslySetInnerHTML={{ __html: truncateText(item.description || '', 15) }}
                            className='text-[#b5abcb] fontManrope-regular text-sm  tracking-wide leading-6 max-w-[500px] -mt-1  '
                          />
                        </div>
                      )}
                  </motion.div>
                ))
              }
            </motion.div>
          </AnimatePresence>
        </div>
        </div>
      </div >

      {
        shoeModal &&
        <div className=''  >
          <div className="hs-overlay size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto bg-black/50 w-full h-screen  " >
            <div className="mt-0 flex justify-center items-center h-full  ease-out transition-all sm:max-w-4xl sm:w-full m-3 sm:mx-auto  "  >
              <div className="max-h-full overflow-hidden relative  flex flex-col overflow-y-scroll bg-[#f5f5f7]  border shadow-sm rounded-xl pointer-events-auto h-[calc(100vh-5rem)]" >
                <div className='absolute sm:top-4 top-1.5 sm:right-4 right-2 md:hover:bg-gray-200 md:bg-gray-00 bg-gray-200  p-1 rounded-md text-black cursor-pointer'><IoMdClose size={26} onClick={() => setShowModal(false)} /></div>

                <div className=" md:p-16 p-6 ">
                  <div className="space-y4 flex flex-col justify-center items-center">
                    <div className='flex flex-col items-center gap-8 sm:pt-0 pt-5'>
                      <img className='md:h-[400px] w-[700px] object-contain' src={modalData?.image?.url.src} alt={modalData.title} />
                      <div className='flex gap-6 items-center justify-between w-full'>
                        {
                          modalData && modalData.liveurl ?
                            <ButtonURL modalData={modalData} /> : ""
                        }
                        {
                          modalData && modalData.githuburl ?
                            <a href={modalData?.githuburl} className=" group rounded-full px-2 py-2 overflow-hidde group bg-g[#e7e7e7]500  relative hover:bg-gradient-to-r hover:[#e7e7e7]  hover:ring-2 hover:ring-offset-2 hover:ring-[#e7e7e7] transition-all ease-out duration-300">
                              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                              <span className="relative"><FaGithub size={25} /></span>

                              <span className='group-hover:block hidden absolute -top-8 md:-right-10 -right-3 w-32 py-1.5 rounded-md text-center text-xs bg-black text-white fontManrope-bold'>View On Github</span>
                            </a> : ""
                        }
                      </div>
                    </div>
                    <p className='text-[#1d1d1f] text-center md:pt-10 pt-7  lg:text-4xl md:text-2xl text-xl   fontManrope-bold'>{modalData.title} </p>
                  </div>
                </div>
                <div className='bg-[#e7e7e7] w-full '>
                  <div className='text-center p-6'>
                    <p className=' fontManrope-medium md:text-xl'>Technologies Used</p>
                    <div className='flex items-center justify-center gap-3 pt-5'>
                      {
                        modalData?.techStack?.map((item, index) => (
                          <button className='bg-[#d3d3d3] text-[#000000] w-28  rounded-md py-2 text fontManrope-medium sm:text-sm text-xs ' key={index}>{item}</button>
                        ))
                      }
                    </div>
                    <p className='text-[#2e2e2e] fontManrope-regular text-[15px] px-5 tracking-wide leading-6 pt-10'>{modalData.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </div >

  )
}

export default Projects
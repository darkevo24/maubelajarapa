import logo from './logo.svg';
import './App.css';
import left_arrow from "./images/left24px.png"
import union from "./images/Union.png"
import drag from "./images/handle24px.png"
import edit from "./images/Edit.png"
import dot from "./images/dot.png"
import video from "./images/video.png"
import location from "./images/location.png"
import time from "./images/time.png"
import download from "./images/Download.png"
import ellipse from "./images/Ellipse.png"
import dot2 from "./images/dot2.png"
import React, { useState, useRef, useEffect } from 'react';

function App() {
  const session = [
    {
      name : "Session 1",
      data : [
        {
          judul : "Judul Video",
          tanggal : "24 Oktober 2021, 16:30",
          minute : "06:30 Min",
          download : "Downloadable",
          image : video,
          required : "Required",
          previewable : "Previewable"
        },
        {
          judul : "Judul Video",
          tanggal : "25 Oktober 2021, 16:30",
          minute : "06:30 Min",
          download : "Downloadable",
          image : video,
          required : "Required"
        },
        {
          judul : "Judul Onsite",
          tanggal : "26 Oktober 2021, 16:30",
          minute : "06:30 Min",
          download : "Downloadable",
          image : location,
          required : "Required"
        }
      ]
    },
    {
      name : "Session 2",
      data : [
        {
          judul : "Judul Video",
          tanggal : "24 Oktober 2021, 16:30",
          minute : "06:30 Min",
          download : "Downloadable",
          image : video,
          required : "Required",
          previewable : "Previewable"
        },
        {
          judul : "Judul Video",
          tanggal : "25 Oktober 2021, 16:30",
          minute : "06:30 Min",
          download : "Downloadable",
          image : video,
          required : "Required"
        },
        {
          judul : "Judul Onsite",
          tanggal : "26 Oktober 2021, 16:30",
          minute : "06:30 Min",
          download : "Downloadable",
          image : location,
          required : "Required"
        }
      ]
    }
  ];
  const dragItem = useRef();
  const dragOverItem = useRef();
  const [list, setList] = useState(session);
  const[name,setName] = useState("");
  const[index,setIndex] = useState(0);
  const[index2,setIndex2] = useState(0);
  const [judul,setJudul] = useState("");
  const [tanggal,setTanggal] = useState("");
  const [jam,setJam] = useState("");

  const dragItem2 = useRef();
  const dragOverItem2 = useRef();
 
  const dragStart = (e, position) => {
    dragItem.current = position;
  };
 
  const dragEnter = (e, position) => {
    dragOverItem.current = position;
  };
 
  const drop = (e) => {
    const copyListItems = [...list];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setList(copyListItems);
  };

  function Add(){
    const newArray = {
      name : "Session " + (list.length + 1),
      data : []
    }
    setList([...list,newArray])
  }

  function Edit(){
    document.getElementById("edit").classList.remove("hidden");
  }

  function Edit2(){
    const newList = list.map(function(item,id){
      if (id == index2){
        return {
          ...item,
          name : name
        }
      }
      else {
        return {
          ...item
        }
      }
    })
    setList(newList);
    document.getElementById("edit").classList.add("hidden");
  }

  function AddLesson(id){
    setIndex(id);
    document.getElementById("add").classList.remove("hidden"); 
  }

  function AddLesson2(){
    const newObj = {
      judul : judul,
      tanggal : tanggal,
      minute : jam,
      download : "Downloadable",
      image : video,
      required : "Required",
      previewable : "Previewable"
    };
    const newList = list.map(function(item,id){
      if (index == id ){
        return {
          ...item,
          data : [...item.data,newObj]
        }
      }
      else {
        return {
          ...item
        }
      }
    });
    setList(newList);
    document.getElementById("add").classList.add("hidden"); 
    setJam("");
    setTanggal("");
    setJudul("");
  }
  return (
    <div className=" overflow-hidden">
      <div className=' flex items-center p-10 shadow-lg'>
        <img className=' w-6 h-6 ml-4' src={left_arrow}></img>
        <div className=' border-[1px] border-[#BCC0D0] h-10 mx-6'>
        </div>
        <p className='text-[#252A3C] text-[18px] leading-[24px] font-[600] font-["Poppins"]'>Event</p>
      </div>

      <div className='flex flex-col items-start mt-3 p-7 relative'>
        <div className='flex items-center '>
        <p className='font-["SF Pro Display"] font-[500] text-[32px] leading-[32px]'>Belajar dan praktek cinematic videography</p>
        <p className='mt-2 font-["SF Pro Display"] font-[500] text-[12px] leading-[140%] text-[#8189A2] ml-10'>Last edited 18 October 2021 | 13:23</p>
        </div>
        <div className='cursor-pointer hover:opacity-80 absolute right-0 w-[130px] h-[44px] border-[1px] mr-7 border-[#6F32D2] flex items-center py-2 px-4 rounded-[8px]'>
          <img src={union}></img>
          <p className=' text-[#6F32D2] font-["Poppins"] font-[400] text-[16px] leading[24px] text-right ml-3'>Preview</p>
        </div>
        <div className='mt-12 cursor-pointer font-["SF Pro Display"] font-[500] text-[16px] leading-[140%] text-[#6F32D2] relativew-full'>
          <p className='text-left'>Curriculum</p>
          <div className='absolute border-[1px] border-[#BCC0D0] w-full mt-5'></div>
          <div className='absolute border-[1px] border-[#6F32D2] w-[95px] mt-5'></div>
        </div>
        <div className='border-[1px] border-[#DFE5EE] rounded-[8px] w-full p-6 flex items-center mt-16'>
          <p className='text-left font-["SF Pro Display"] tracking-[0.005em] font-[500] text-[16px] leading-[24px] text-[#252A3C]'>Event Schedule: 24 Oktober 2021, 16:30</p>
        </div>
        {list.map(function(item,index){
          let dragStart2 = (e, position) => {
            dragItem2.current = position;
          };
          
          let dragEnter2 = (e, position) => {
            dragOverItem2.current = position;
          };
          
          let drop2 = (e) => {
            const copyListItems2 = [...item.data];
            const dragItemContent2 = copyListItems2[dragItem2.current];
            copyListItems2.splice(dragItem2.current, 1);
            copyListItems2.splice(dragOverItem2.current, 0, dragItemContent2);
            dragItem2.current = null;
            dragOverItem2.current = null;
            item.data = copyListItems2;
          };
          return (
            <div        
            onDragStart={(e) => dragStart(e, index)}
            onDragEnter={(e) => dragEnter(e, index)}
            onDragEnd={drop}
            key={index}
            draggable 
            key={index} 
            className='py-4 px-6 border-[1px] border-[#DFE5EE] rounded-[8px] w-full mt-5'>
              <div className=' flex items-center relative w-full'>
                <img className='w-[22.97px] h-[24px]' src={drag}></img>
                <p className='ml-2 font-["SF Pro Display"] font-[500] text-[24px] leading-[32px] tracking-[0.02em]'>{item.name}</p>
                <img onClick={()=> {Edit();setIndex2(index)}}className='ml-2 w-[15px] h-[15px] cursor-pointer hover:opacity-80' src={edit}></img>
                <img className='absolute right-0' src={dot}></img>
              </div>
              <div className='ml-5'>
              {item.data && item.data.map(function(item,index2){
                return (
                    <div 
                    onDragStart={(e) => dragStart2(e, index2)}
                    onDragEnter={(e) => dragEnter2(e, index2)}
                    onDragEnd={drop2}
                    key={index2}
                    draggable
                    key={index2} 
                    className=' flex items-center mt-2 relative' >
                      <img className='w-[22.97px] h-[24px]' src={drag}></img>
                      <img className='w-12 h-12 ml-4' src={item.image}></img>
                      <p className='ml-4 font-["SF Pro Display"] font-[500] text-[16px] leading-[24px] text-[#252A3C]'>{item.judul}</p>
                      <p className='ml-4 font-["SF Pro Display"] font-[500] text-[16px] leading-[24px] text-[#7800EF]'>{item.required}</p>
                      {item.previewable && 
                      <div className='flex items-center'>
                      <img className='w-[6px] h-[6px] mx-6' src={ellipse}></img>
                      <p className='font-["SF Pro Display"] font-[500] text-[16px] leading-[24px] text-[#8189A2]'>{item.previewable}</p>
                      </div>
                      }
                      <div className='flex items-center absolute right-0'>
                      <img className='w-6 h-6' src={time}></img>
                      <p className='ml-2 font-["SF Pro Display"] font-[500] text-[16px] leading-[24px] tracking-[0.005em] text-[#252A3C]'>{item.tanggal}</p>
                      <img className='w-[6px] h-[6px] mx-4' src={ellipse}></img>
                      <img className=' w-6 h-6' src={time}></img>
                      <p className='ml-2 font-["SF Pro Display"] font-[500] text-[16px] leading-[24px] text-[#252A3C]'>{item.minute}</p>
                      <img className='w-[6px] h-[6px] mx-4' src={ellipse}></img>
                      <img className='ml-2 w-6 h-6' src={time}></img>
                      <p className=' font-["SF Pro Display"] font-[500] text-[16px] leading-[24px] text-[#252A3C]'>{item.download}</p>
                      <img className='ml-3 w-8 h-8' src={dot2}></img>
                      </div>
                    </div>
                )
              })}
              </div>
              <div onClick={()=>AddLesson(index)} className='mt-3 flex items-center'>
                <div className=' flex items-center justify-center p-0 w-[33px] h-[31.57px] hover:opacity-80 cursor-pointer bg-[#7800EF] rounded-[8px]'>
                  <p className='text-white text-2xl mb-1'>+</p>
                </div>
                <p className='ml-4 font-["SF Pro Display"] font-[500] text-[16px] leading-[24px] tracking-[0.005em] text-[#252A3C]'>Add Lesson Material</p>
              </div>
            </div>
          )
        })}
        <div onClick={Add} className='ml-auto mr-0 mt-6 w-[161px] h-[48px] cursor-pointer hover:opacity-80 text-white bg-[#7800EF] rounded-[8px] flex justify-center items-center'>
          <p className='text-2xl mr-3'>+</p>
          <p className='font-["SF Pro Display"] font-[500] text-[16px] leading-[140%]'>Add Session</p>
        </div>
      </div>
      <div id="add" className='flex items-center justify-center hidden'>
        <div className='text-white w-full flex flex-col p-10 w-5/12 items-start fixed bottom-[200px] bg-gray-400'>
          <p className='text-4xl mb-4'>Add Lesson material</p>
          <label className='flex items-center my-2'>
          <p>Judul</p>
          <input value={judul} onChange={(e)=>setJudul(e.target.value)} className='ml-4 text-black' type="text"></input>
          </label>
          <label className='flex items-center my-2'>
          <p>Tanggal</p>
          <input value={tanggal} onChange={(e)=>setTanggal(e.target.value)} className='ml-4 text-black' type="text"></input>
          </label>
          <label className='flex items-center my-2'>
          <p>jam</p>
          <input value={jam} onChange={(e)=>setJam(e.target.value)} className='ml-4 text-black' type="text"></input>
          </label>
          <div onClick={AddLesson2} className='mt-4 w-[300px] h-[48px] cursor-pointer hover:opacity-80 text-white bg-[#7800EF] rounded-[8px] flex justify-center items-center'>
          <p className='text-2xl mr-3'>+</p>
          <p className='font-["SF Pro Display"] font-[500] text-[16px] leading-[140%]'>Add Lesson Material</p>
        </div>

      </div>
    </div>

    <div id="edit" className='flex items-center justify-center hidden'>
        <div className='text-white w-full flex flex-col p-10 w-5/12 items-start fixed bottom-[250px] bg-gray-400'>
          <p className='text-4xl mb-4'>Edit Session Name</p>
          <label className='flex items-center my-2'>
          <p>Name</p>
          <input value={name} onChange={(e)=>setName(e.target.value)} className='ml-4 text-black' type="text"></input>
          </label>
          <div onClick={Edit2} className='mt-4 w-[300px] h-[48px] cursor-pointer hover:opacity-80 text-white bg-[#7800EF] rounded-[8px] flex justify-center items-center'>
          <p className='text-2xl mr-3'>+</p>
          <p className='font-["SF Pro Display"] font-[500] text-[16px] leading-[140%]'>Edit Session</p>
        </div>

      </div>
    </div>
    </div>
  );
}

export default App;

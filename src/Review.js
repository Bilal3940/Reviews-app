import React, { useState } from 'react';
import person from './data';
import {MdOutlineReviews} from 'react-icons/md'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import { Next } from 'react-bootstrap/esm/PageItem';
const Review = () => {
  
  
  const [index,setIndex] = useState(0);
  const {name,job,image,text} = person[index];
  const checkindex=(number)=>{
    if(number>person.length-1){
      return 0;
    }
    if(number<0){
      return person.length-1;
    }
    else{
      return number;
    }
  }
  const next=()=>{
    setIndex(checkindex(index+1));
  }
  const prev =()=>{
    setIndex(checkindex(index-1));
  }
  return (
  <article className='review'>
    <div className='img-container'>
      <img src={image} alt={name} className='person-img'/>
      <span className='qoute-icon'>
        <FaQuoteRight/>
      </span>
    </div>
    <h4 className='author'>{name}</h4>
    <p className='job'>{job}</p>
    <p className='info'>{text}</p>
    <div className='button-container'>
      <button className='prev-btn' onClick={prev}>
      <FaChevronLeft/>
      </button>
      <button className='next-btn'onClick={next}>
      <FaChevronRight/>
      </button>
    </div>
    </article>
  )
}
  

export default Review;
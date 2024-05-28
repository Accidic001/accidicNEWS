import React from 'react'
import { useState,useEffect } from 'react';
import './News.css'

function Entertainment() {
    const [newsList, setnewsList]= useState([]);
    useEffect(() => {
      fetch("https://newsapi.org/v2/top-headlines?country=ng&category=entertainment&apiKey=694f717d201f4055af499662b4a459f0")
      .then((response)=> response.json())
      .then((data)=>{
        setnewsList(data.articles);
      });
    },[]);

  return (
    <div className='container-News container-fluid '>
        <h2 className='text-primary intro'>Top 20 hottest News</h2>
      {Array.isArray(newsList)&&newsList?.map((val, key) => {
        return<div className='News' key={key}>
            <h3 className='text-danger text-center title pt-4'>{val.title}</h3>
            <img src={val.urlToImage} alt="url"  />
            <a href={val.url} className='btn btn-primary'>read more...</a>
            <div className="data mt-3">
             <p>Author : {val.author}</p>
            <p className='text-danger'>source : {val.source.id}</p>
            <p>{val.publishedAt}</p>
            </div>
            </div>;
      })}
    </div>
  )
}

export default Entertainment

"use client"
import Header from '../../components/Header.jsx'
import LeftPanel from '../../components/LeftPanel.jsx'
import Tweet from '../../components/Tweet.jsx'  
import Center from '../../components/Center.jsx';
import ExploreTweets from '../../components/ExploreTweets.jsx';
import { useEffect, useState } from 'react';

export default function Home() {
  const [tweets, setTweets] = useState([]);

  const getTweets = async() => {
    try {
      const response = await fetch("http://127.0.0.1:8000/tweets");
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setTweets(data);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error.message);
    }
  }

  useEffect(() => {
    getTweets();
  }, []);

  return (
    <>
      <Header/>
      <div className="layout">
        <div className='column'>
          <div className="row">
            <LeftPanel />
            <Tweet />
          </div>
        </div>
        <div className='column middle1'>
          <div className="row">
            <Center tweets={tweets} />
          </div>
        </div>
        <div className='column middle2'>
          <div className="row">
            <h1>Hello World</h1>
            <ExploreTweets />
          </div>
        </div>
      </div>
    </>
  )
}

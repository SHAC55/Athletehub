"use client"
import React from 'react'
import Nav from '../components/Nav'
import axios from 'axios'

const Stats = () => {
    const fetchapi = async() => {
        try {
            const response = await axios.get('https://cricbuzz-cricket.p.rapidapi.com/stats/v1/topstats/0', {
                headers: {
                    'x-rapidapi-key': 'c8898ea80bmshd1a2e398baf5ea2p12018bjsnf62d9d5525d0',
                    'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com'
                  }
            });
            const data = response.data
            console.log(data)
        } catch (error) {
          
        }
    }
  return (
    <>

    <div>

    <div>
      <Nav/>
    </div>

    <div>
        <button onClick={fetchapi}> CLICK</button>
    </div>

    </div>

    </>
  )

}

export default Stats

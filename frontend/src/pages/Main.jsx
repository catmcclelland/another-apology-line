import { useState, useEffect } from "react";
import axios from "axios";
import AudioSpectrum from 'react-audio-spectrum'
import styled from 'styled-components'

function Main() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.twilio.com/2010-04-01/Accounts/AC377baca68990d9898d47d970754fb0f6/Recordings.json`,
        {
          auth: {
            username: 'AC377baca68990d9898d47d970754fb0f6',
            password: '24dda8d54c67047a0200f266f21d4ee5',
          },
        }
      )
      .then((res) => {
        setData(res.data);
      });
  }, []);

  console.log(data)

  const { recordings } = data
  const sound = recordings && recordings.map(recording => (
    <div key={`${recording.media_url}.wav`}>
    <audio
      crossOrigin="anonymous"
      id={`${recording.media_url}.wav`}
      src={`${recording.media_url}.wav`}
      controls
    />

    <Visualizer>
      <AudioSpectrum
        id="audio-canvas"
        height={200}
        width={1000}
        audioId={`${recording.media_url}.wav`}
        capColor={'red'}
        capHeight={2}
        meterWidth={10}
        meterCount={512}
        meterColor={[
          { stop: 0, color: '#f00' },
          { stop: 0.5, color: '#0CD7FD' },
          { stop: 1, color: 'red' }
        ]}
        gap={1}
      />
    </Visualizer>
    </div>
  
  ))


  return <div>
     
     {sound}

  </div>;
}

const Visualizer = styled.div`
  display: flex;
  width: 100%;
  margin: auto;`

export default Main;

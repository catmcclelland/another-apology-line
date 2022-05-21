import { useState, useEffect } from "react";
import axios from "axios";
import AudioSpectrum from 'react-audio-spectrum'
import styled from 'styled-components'

function Main() {

  const [data, setData] = useState([]);

  const USER_NAME = process.env.REACT_APP_TWILIO_ACCOUNT
  const PASSWORD = process.env.REACT_APP_TWILIO_AUTH

  console.log(process.env.REACT_APP_TWILIO_ACCOUNT_SID)

  useEffect(() => {
    axios
      .get(
        `https://api.twilio.com/2010-04-01/Accounts/${USER_NAME}/Recordings.json`,
        {
          auth: {
            username: USER_NAME,
            password: PASSWORD,
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
          { stop: 0, color: 'black' },
          { stop: 0.5, color: 'black' },
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

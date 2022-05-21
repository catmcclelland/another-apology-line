import { useState, useEffect, useRef } from "react";
import axios from "axios";
import AudioSpectrum from "react-audio-spectrum";
import styled from "styled-components";
import { BsPlayCircle, BsStopCircle } from "react-icons/bs";
import TapeRecorder from "../images/taperecorder.gif";
import TapeRecorderPause from "../images/taperecorderpaused.jpg";
import answeringMachine from "../images/answering.mp3";

function Main() {
  const [data, setData] = useState(0);
  const { recordings } = data;
  const randomTrack = (Math.random() * (data && recordings.length - 1)).toFixed(
    0
  );
  const [playing, setPlaying] = useState(true);
  const [track, setTrack] = useState(randomTrack);

  const audioPlay = useRef();
  let answer = new Audio(answeringMachine);

  const TWILIO_USERNAME = process.env.REACT_APP_TWILIO_ACCOUNT;
  const TWILIO_AUTH = process.env.REACT_APP_TWILIO_AUTH;

  console.log(recordings)

  useEffect(() => {
    axios
      .get(
        `https://api.twilio.com/2010-04-01/Accounts/${TWILIO_USERNAME}/Recordings.json`,
        {
          auth: {
            username: TWILIO_USERNAME,
            password: TWILIO_AUTH,
          },
        }
      )
      .then((res) => {
        setData(res.data);
      });
  }, [TWILIO_USERNAME, TWILIO_AUTH]);

  const playSound = (e) => {
    setPlaying(!playing);
    if (playing) {
      answer.play();
      setTimeout(() => {
        audioPlay.current.play();
      }, 1000);
    } else {
      audioPlay.current.pause();
      setTrack(randomTrack);
    }
  };

  return (
    <>
      {recordings && (
        <div key={`${recordings[track].media_url}.wav`}>
          <audio
            crossOrigin="anonymous"
            id={`${recordings[track].media_url}.wav`}
            src={`${recordings[track].media_url}.wav`}
            ref={audioPlay}
            onEnded={() => {
              setPlaying(!playing);
              setTrack(randomTrack);
            }}
          />

          <Visualizer>
            <AudioSpectrum
              id="audio-canvas"
              height={400}
              width={'2000'}
              audioId={`${recordings[track].media_url}.wav`}
              capColor={"hotpink"}
              capHeight={0}
              meterWidth={9}
              meterCount={1000}
              meterColor={[{ stop: 0.3, color: "#ffffffcc" }]}
              gap={1}
            />
          </Visualizer>
        </div>
      )}
      {playing ? (
        <Background src={TapeRecorderPause} />
      ) : (
        <Background src={TapeRecorder} />
      )}
      <PlayButton>
        {playing ? (
          <BsPlayCircle size="300px" onClick={() => playSound()} />
        ) : (
          <BsStopCircle size="300px" onClick={() => playSound("id")} />
        )}
      </PlayButton>
    </>
  );
}

const Visualizer = styled.div`
  display: flex;
  position: absolute;
  bottom: 0px;
  left: 0px;
  z-index: 1;
`;

const PlayButton = styled.div`
  display: flex;
  margin: auto;
  cursor: pointer;
  color: white;
  opacity: 0.5;
  z-index: 10000;
  transition: 0.2s;
  &:hover {
    opacity: 0.8;
    transition: 0.2s;
  }
  @media (max-width: 500px) {
    width: 200px;
  }
`;

const Background = styled.img`
  position: absolute;
  margin-top: -1px;
  left: 0;
  width: 220%;
  margin: -3px;
  @media (min-width: 800px) {
    width: 100%;
  }
`;

export default Main;

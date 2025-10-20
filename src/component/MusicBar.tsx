import styled from "styled-components";
import { motion } from "framer-motion";
import stop from '../../src/source/webp/stop.webp'
import next from '../../src/source/webp/next.webp'
import square from '../../src/source/webp/square.webp'
import play from '../../src/source/webp/play.webp'
import { useState,useEffect, useRef } from "react";
import { sizes } from "../styles/BreakPoints";
import { bgmMap, tracks } from "../source/music";


const MusicBar: React.FC = () => {
  const [active, setActive] = useState(false);     // 재생 여부
  const [index, setIndex] = useState(0);           // 현재 트랙 인덱스
  const audioRef = useRef<HTMLAudioElement>(null);

  const current = tracks[index];

  const nextIndex = () => (index + 1) % tracks.length;
  const prevIndex = () => (index - 1 + tracks.length) % tracks.length;

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.src = current.src; // 트랙 바뀌면 src 갱신
    if (active) {
      audio
        .play()
        .catch(() => setActive(false)); // 자동재생 차단 등 예외 대비
    } else {
      audio.pause();
    }
    // 트랙 바뀔 때는 처음부터
    audio.currentTime = 0;
  }, [index, active, current.src]);

  const handleRemote = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    const type = target.getAttribute("data-type");
    switch (type) {
      case "play":
        setActive(true);
        break;
      case "stop":
        setActive(false);
        break;
      case "square": {
        // 현재 트랙 처음으로
        const audio = audioRef.current;
        if (audio) {
          audio.currentTime = 0;
          if (!active) setActive(true);
        }
        break;
      }
      case "next":
        setIndex(nextIndex());
        break;
      case "back":
        setIndex(prevIndex());
        break;
      default:
        break;
    }
  };

  return (
    <MusicBarContainer>
      <TitleBox>
        {current.artist} - {current.title}
      </TitleBox>

      <IconBox onClick={handleRemote}>
        <Icon data-type={!active ? "play" : "stop"} src={!active ? play : stop} alt="재생/일시정지" />
        <Icon data-type="square" src={square} alt="처음으로" />
        <Icon data-type="next" src={next} style={{ transform: "rotate(180deg)" }} alt="이전" />
        <Icon data-type="back" src={next} alt="다음" />
      </IconBox>

      <audio
        ref={audioRef}
        preload="none"
        onEnded={() => {
          // 트랙 끝나면 자동으로 다음
          setIndex(nextIndex());
          // active가 true이면 다음 곡도 이어서 재생됨 (useEffect에서 처리)
        }}
      />
    </MusicBarContainer>
  );
};

export default MusicBar

const MusicBarContainer = styled(motion.div)`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 8rem;
    height: 4rem;
    background-color: darkgray;
    right: 0.8%;
    top: 10%;
    font-size: 10px;
    border-radius: 4px;

    @media(max-width: ${sizes.laptop}){
        right: 0;
        width: 6rem;
        font-size: 8px;
    }
`

const TitleBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50%;
    width: 90%;
    border: 1px solid black;
    background-color: white;
    border-radius: 4px;
`

const IconBox = styled.div`
    display: flex;
    padding-top: 0.3rem;
    gap: 5px;
`

const Icon = styled.img`
    width: 15px;
    height: 15px;
    cursor: pointer;
`
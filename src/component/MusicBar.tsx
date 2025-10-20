import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import stop from "../source/webp/stop.webp";
import square from "../source/webp/square.webp";
import next from '../source/webp/next.webp'
import play from '../source/webp/play.webp'
import { bgmMap, tracks } from "../source/music";
import WarnModal from "./WarnModal";
import { sizes } from "../styles/BreakPoints";

const MusicBar = () => {
  const [active, setActive] = useState(false);       
  const [isOpen, setIsOpen] = useState(false);      
  const [hasShownModal, setHasShownModal] = useState(false);
  const [index, setIndex] = useState(0);             

  const audioRef = useRef<HTMLAudioElement>(null);
  const current = tracks[index];

  const handleRemote = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    const type = target.getAttribute("data-type");

    switch (type) {
      case "play":
        if (!hasShownModal) {
          setIsOpen(true);
        } else {
          setActive(true);
        }
        break;
      case "stop":
        setActive(false);
        break;
      case "square":
        if (audioRef.current) audioRef.current.currentTime = 0;
        break;
      case "next":
        setIndex((prev) => (prev + 1) % tracks.length);
        break;
      case "back":
        setIndex((prev) => (prev - 1 + tracks.length) % tracks.length);
        break;
      default:
        break;
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleConfirm = () => {
    setHasShownModal(true); // 이후엔 모달 안 뜸
    setIsOpen(false);
    setActive(true);        // 실제 재생 시작
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (active) audio.play().catch(() => setActive(false));
    else audio.pause();
  }, [active, index]);

  return (
    <MusicBarContainer>
      {/* ⚠️ 모달 */}
      <WarnModal visible={isOpen} close={handleClose} confirm={handleConfirm} />

      <TitleBox>
        {current.artist} - {current.title}
      </TitleBox>

      <IconBox onClick={handleRemote}>
        <Icon
          data-type={!active ? "play" : "stop"}
          src={!active ? play : stop}
          alt="재생/정지"
        />
        <Icon data-type="square" src={square} alt="처음으로" />
        <Icon
          data-type="next"
          src={next}
          style={{ transform: "rotate(180deg)" }}
          alt="이전"
        />
        <Icon data-type="back" src={next} alt="다음" />
      </IconBox>

      <audio ref={audioRef} src={current.src} onEnded={() => setIndex((i) => (i + 1) % tracks.length)} />
    </MusicBarContainer>
  );
};

export default MusicBar;

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

  @media (max-width: ${sizes.laptop}) {
    right: 0;
    width: 6rem;
    font-size: 8px;
  }
`;

const TitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50%;
  width: 90%;
  border: 1px solid black;
  background-color: white;
  border-radius: 4px;
  font-weight: 600;
`;

const IconBox = styled.div`
  display: flex;
  padding-top: 0.3rem;
  gap: 5px;
`;

const Icon = styled.img`
  width: 15px;
  height: 15px;
  cursor: pointer;
`;
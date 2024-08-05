import React, { useEffect, useState } from "react";
import axios from "axios";
import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Nav from "../components/Nav.jsx";
import "../styles/MyPage.css";
// 아이콘
import { IoIosInformationCircleOutline } from "react-icons/io";
import { BiStoreAlt } from "react-icons/bi";
import { LuSubtitles } from "react-icons/lu";
import { CiFolderOn } from "react-icons/ci";
import { GoDatabase } from "react-icons/go";
import BodyInfo from "./BodyInfo.jsx";
import { useNavigate } from "react-router-dom";

const MyPage = () => {
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const username = localStorage.getItem("username");
    const token = localStorage.getItem("token");

    if (token && username) {
      // API 호출을 통해 사용자 정보를 가져올 수도 있습니다.
      setUserInfo({ username });
    } else {
      navigate("/login");
    }
  }, [navigate]);

  if (!userInfo) {
    return <div>로그인 페이지로 이동합니다.</div>;
  }

  return (
    <div className="MyPage">
      <div className="profile-container">
        <h4 className="">{userInfo.username}</h4>
        <button>프로필 수정</button>
      </div>
      <div className="profile-item-container">
        <Container className="route-item-container">
          <Col>
            <span>🔥</span>소모칼로리 {userInfo.cal_sum || 0}
          </Col>
          <span className="line">|</span>
          <Col>
            <span>🌳</span>탄소 절감량 {userInfo.car_sum || 0}
          </Col>
          <span className="line">|</span>
          <Col>
            <span>💰</span>포인트 {userInfo.total_point || 0}
          </Col>
        </Container>
        <div className="profile-information-container">
          <h4>나의 정보/활동</h4>
          <Stack className="stack-container" gap={3}>
            <div className="p-2 with-border" onClick={BodyInfo}>
              <IoIosInformationCircleOutline className="p-icon" /> 키/몸무게
              정보
            </div>
            <div className="p-2 with-border">
              <BiStoreAlt className="p-icon" />
              나의 취향 저격 장소
            </div>
            <div className="p-2">
              <LuSubtitles className="p-icon" />
              작성한 댓글
            </div>
          </Stack>
        </div>
        <div className="profile-plogging-container">
          <h4>플로깅 내역</h4>
          <Stack className="stack-container" gap={3}>
            <div className="p-2 with-border">
              <CiFolderOn className="p-icon" />
              플로깅 갤러리
            </div>
            <div className="p-2">
              <GoDatabase className="p-icon" />
              월별 통계
            </div>
          </Stack>
        </div>
      </div>
      <Nav />
    </div>
  );
};

export default MyPage;

"use client";
import React, { useState } from "react";
import "@/components/Newscomponents/CustomerServiceForm";

function CustomerServiceForm() {
  const [showRegion, setShowRegion] = useState(false);
  const toggleRegion = () => setShowRegion(!showRegion);

  <div className="call">
    <label style={{ fontSize: "50px", color: "red" }}>온라인 고객센터</label>
  </div>;
  return (
    <div className="form-wrapper">
      <div className="call">
        <label style={{ fontSize: "50px", color: "red", border: "1px" }}>
          온라인 고객센터
        </label>
      </div>
      <br />
      <div className="t">
        <label>
          <p>
            서비스 및 고객 불편 사항 등을 남겨주시면
            <br />
            영업일 10일 이내로 답변드리도록 하겠습니다.
          </p>
        </label>
      </div>
      <br />
      <br />
      <div className="Item">
        <div className="label">고객명</div>
        <div className="area">
          <input type="text" id="name" maxLength="20" />
        </div>

        <label>연락처</label>
        <input type="text" id="number" />
        <br />
        <label>이메일</label>
        <input type="text" id="email" />
        <br />
        <label>상담 분류</label>
        <select id="choice1">
          <option value="1">매장 서비스</option>
          <option value="2">온라인 쇼핑</option>
        </select>
      </div>
      <br />
      <label>이용 매장명</label>
      <button type="button" onClick={toggleRegion}>
        🔍
      </button>
      {showRegion && (
        <div className="region-popup">
          <h3>지역 선택</h3>
          <ul>
            <li>서울</li>
            <li>대구</li>
            <li>부산</li>
          </ul>
        </div>
      )}
      <br />
      <label>이용 방법</label>
      <select id="vis">
        <option value="1">매장방문</option>
        <option value="2">포장</option>
        <option value="3">배달</option>
      </select>
      <br />
      <label>제품명</label>
      <input type="text" />
      <br />
      <label>문의 유형</label>
      <select id="an">
        <option value="1">레시피</option>
        <option value="2">위생</option>
        <option value="3">서비스</option>
        <option value="4">이물질</option>
        <option value="5">기프티콘</option>
        <option value="6">기타</option>
      </select>
      <br />
      <label>문의 내용</label>
      <input type="text" />
      <br />
      <label>고객 요청 사항</label>
      <input type="text" />
      <br />
      <label>비밀번호</label>
      <input type="text" id="password" />
      <br />
      <input type="submit" value="취소" />
      <input type="submit" value="확인" />
    </div>
  );
}

export default CustomerServiceForm;

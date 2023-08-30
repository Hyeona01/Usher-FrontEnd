// ReviewSection.jsx

import React, { forwardRef } from 'react'
import * as S from "../style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export const ReviewSection = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <S.ReviewSecWrap>
        <S.ReviewSec1>
          <S.TapTitle>관람 후기</S.TapTitle>
          {/* 페이지 연결하기 */}
          <S.ViewMore>관람 후기 더보기</S.ViewMore>
        </S.ReviewSec1>
        <S.ReviewSec2>
          <p>평점</p>
          <S.Star>
            <FontAwesomeIcon icon={faStar} />
            {/* 평점 불러오기 */}
            4.7
          </S.Star>
        </S.ReviewSec2>
        {/* 리뷰 불러오기 */}
        <S.ReviewSec3>
          <S.Reviews>
            <S.Profile src="/reviewprofile.png" />
            <S.ShortReview>사랑이 뭐길래 날 울려</S.ShortReview>
          </S.Reviews>
          <S.Reviews>
            <S.Profile src="/reviewprofile.png" />
            <S.ShortReview>사랑이 뭐길래 날 울려</S.ShortReview>
          </S.Reviews>
          <S.Reviews>
            <S.Profile src="/reviewprofile.png" />
            <S.ShortReview>사랑이 뭐길래 날 울려</S.ShortReview>
          </S.Reviews>
          <S.Reviews>
            <S.Profile src="/reviewprofile.png" />
            <S.ShortReview>사랑이 뭐길래 날 울려</S.ShortReview>
          </S.Reviews>
          <S.Reviews>
            <S.Profile src="/reviewprofile.png" />
            <S.ShortReview>사랑이 뭐길래 날 울려</S.ShortReview>
          </S.Reviews>
        </S.ReviewSec3>
      </S.ReviewSecWrap>
    </div>
  )
});
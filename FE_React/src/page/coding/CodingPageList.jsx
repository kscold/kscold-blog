import React, { useEffect, useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import CodingPageDetail from './CodingPageDetail';
import Cookies from 'js-cookie';
import { getCodingPostList } from '../../api';

const CodingPageList = () => {
  const { section0, section1, section2, section3, section4, id } = useParams();
  const [sectionData, setSectionData] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const isDetailPage = location.pathname.includes('/detail/');
  const selectedSidebarId = useSelector(
    (state) => state.coding.selectedSidebarId
  );
  const role = useSelector((state) => state.user.role);

  useEffect(() => {
    if (!selectedSidebarId) {
      setSectionData([]);
      return;
    }

    const fetchSectionData = async () => {
      try {
        const response = await getCodingPostList(selectedSidebarId);
        setSectionData(response.childrens);
      } catch (error) {
        console.error('coding post post 오류:', error);
        setSectionData([]);
      }
    };

    fetchSectionData();
  }, [selectedSidebarId]);

  // 디테일 페이지이면 id의 props를 넘겨줌
  if (isDetailPage) {
    return <CodingPageDetail id={id} />;
  }

  const navigateDetailPage = (codingPostId) => {
    navigate(`detail/${codingPostId}`);
  };

  const navigateUpdatePage = (codingPostId) => {
    navigate(`/coding/update/${codingPostId}`);
  };

  const deletePost = async (codingPostId) => {
    try {
      await axios.delete(`/api/coding/post/${codingPostId}`, {
        headers: {
          Authorization: `Bearer ${Cookies.get('authToken')}`,
        },
      });
      setSectionData((prevData) =>
        prevData.filter((item) => item.codingPostId !== codingPostId)
      );
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <div className="coding-page-list-container">
      <h2 className="coding-page-list-section-name">
        {section4 || section3 || section2 || section1 || section0} 포스트
      </h2>
      <ul className="coding-page-list">
        {sectionData.map((item) => (
          <li className="coding-page-list-item" key={item.codingPostId}>
            <span onClick={() => navigateDetailPage(item.codingPostId)}>
              {item.codingPostTitle}
            </span>
            {role === 'admin' && (
              <div className="admin-buttons">
                <button
                  className="coding-page-list-item-edit-button"
                  onClick={() => navigateUpdatePage(item.codingPostId)}
                >
                  수정
                </button>
                <button
                  className="coding-page-list-item-delete-button"
                  onClick={() => deletePost(item.codingPostId)}
                >
                  삭제
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CodingPageList;

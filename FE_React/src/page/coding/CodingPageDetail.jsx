import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { getCodingPost } from '../../api';
import { formatDate } from '../../components/functions/math';

const CodingPageDetail = ({ id }) => {
  const [detailData, setDetailData] = useState(null);
  const selectedSidebarId = useSelector(
    (state) => state.coding.selectedSidebarId
  );

  useEffect(() => {
    const fetchPostDetail = async () => {
      try {
        // const response = await axios.get(
        //   `/api/coding/post/${selectedSidebarId}/${id}`
        // );
        // const postData = response.data;

        const postData = await getCodingPost(selectedSidebarId, id);

        // API로 받아온 데이터를 상태에 저장
        setDetailData({
          codingPostTitle: postData.codingPostTitle,
          codingPostContent: postData.codingPostContent,
          createdAt: postData.createdAt,
          codingPostHashtags: postData.codingPostHashtags,
        });
      } catch (error) {
        console.error('coding post detail fetch 오류:', error);
        setDetailData({
          codingPostTitle: 'Not Found',
          codingPostContent: '해당 포스트를 찾을 수 없습니다.',
        });
      }
    };

    fetchPostDetail();
  }, [id, selectedSidebarId]);

  if (!detailData) {
    return (
      <div className="coding-page-detail-container">
        <p>로딩중...</p>
      </div>
    );
  }

  return (
    <div className="coding-page-detail-container">
      <h2 className="coding-page-detail-title">{detailData.codingPostTitle}</h2>
      <p className="coding-page-detail-createdat">
        {formatDate(detailData.createdAt)}
      </p>
      <div className="coding-page-detail-content">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '');
              return !inline && match ? (
                <SyntaxHighlighter
                  style={vscDarkPlus}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        >
          {detailData.codingPostContent}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default CodingPageDetail;

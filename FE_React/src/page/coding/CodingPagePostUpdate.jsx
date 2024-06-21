import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import QuillMarkdown from 'quilljs-markdown';
import { QuillDeltaToHtmlConverter } from 'quill-delta-to-html';
import { imageHandler, markdownOptions } from './quillSetting';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { useSelector } from 'react-redux';
import {
  getCodingPost,
  getCodingSidebarOptions,
  putCodingPost,
} from '../../api';

window.Quill = Quill;
const ImageResize = require('quill-image-resize-module').default;
Quill.register('modules/imageResize', ImageResize);

const CodingPagePostUpdate = () => {
  const selectedSidebarId = useSelector(
    (state) => state.coding.selectedSidebarId
  );
  const { postId } = useParams();
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    sidebarId: '',
  });
  const [quillContent, setQuillContent] = useState(null);
  const [sidebarOptions, setSidebarOptions] = useState([]);
  const navigate = useNavigate();
  const quillRef = useRef(null);

  useEffect(() => {
    const fetchPostData = async () => {
      const response = await getCodingPost(selectedSidebarId, postId);
      setFormData({
        title: response.codingPostTitle,
        content: response.codingPostContent,
        sidebarId: response.sidebarId,
      });
      setQuillContent(response.codingPostContent);
      if (quillRef.current) {
        const quill = quillRef.current.getEditor();
        quill.setContents(quill.clipboard.convert(response.codingPostContent));
      }
    };

    const fetchSidebarOptionsData = async () => {
      const options = await getCodingSidebarOptions();
      setSidebarOptions(options);
    };

    fetchPostData();
    fetchSidebarOptionsData();
  }, [selectedSidebarId, postId]);

  useEffect(() => {
    if (quillRef.current) {
      const quill = quillRef.current.getEditor();

      new QuillMarkdown(quill, markdownOptions);

      const handleTextChange = () => {
        const delta = quill.getContents();
        setQuillContent(delta);
        setFormData((prev) => ({
          ...prev,
          content: quill.root.innerHTML,
        }));
      };

      quill.on('text-change', handleTextChange);

      return () => {
        quill.off('text-change', handleTextChange);
      };
    }
  }, [quillRef]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleContentChange = (content, delta, source, editor) => {
    if (source === 'user') {
      setFormData((prev) => ({
        ...prev,
        content: editor.getHTML(),
      }));
      setQuillContent(editor.getContents());
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const postData = {
      title: formData.title,
      content: formData.content,
      sidebarId: formData.sidebarId,
    };

    const response = await putCodingPost(postId, postData);

    navigate(`${response.url}`);
  };

  const convertDeltaToMarkdown = (delta) => {
    const converter = new QuillDeltaToHtmlConverter(delta.ops, {});
    return converter.convert();
  };

  const memoizedModules = useMemo(
    () => ({
      toolbar: {
        container: [
          ['bold', 'italic', 'underline', 'strike'],
          [{ header: 1 }, { header: 2 }],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['link', 'image'],
          ['clean'],
        ],
        handlers: {
          image: () => imageHandler(quillRef),
        },
      },
      imageResize: {
        modules: ['Resize', 'DisplaySize', 'Toolbar'],
      },
    }),
    []
  );

  return (
    <div className="coding-page-post-create-container">
      <div className="coding-page-post-create-form-container">
        <h2>글 수정</h2>
        <form onSubmit={handleSubmit}>
          <div className="coding-page-post-create-form-group">
            <label htmlFor="title">제목</label>
            <input
              className="coding-page-post-create-form-input"
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="coding-page-post-create-form-group">
            <label htmlFor="content">내용</label>
            <ReactQuill
              ref={quillRef}
              theme="snow"
              id="content"
              name="content"
              value={formData.content}
              onChange={handleContentChange}
              modules={memoizedModules}
              formats={[
                'header',
                'font',
                'size',
                'bold',
                'italic',
                'underline',
                'strike',
                'blockquote',
                'list',
                'bullet',
                'indent',
                'link',
                'image',
                'video',
                'code-block',
              ]}
              required
            />
          </div>
          <div className="coding-page-post-create-form-group">
            <label htmlFor="sidebarId">사이드바 선택</label>
            <select
              className="coding-page-post-create-form-sidebar-select"
              id="sidebarId"
              name="sidebarId"
              value={formData.sidebarId}
              onChange={handleChange}
              required
            >
              <option value="">사이드바 선택</option>
              {Array.isArray(sidebarOptions) &&
                sidebarOptions.map((option) => (
                  <option key={option.sidebarId} value={option.sidebarId}>
                    {'-'.repeat(option.depth * 2) + ' ' + option.sidebarName}
                  </option>
                ))}
            </select>
            <button type="submit">글 수정 완료</button>
          </div>
        </form>
      </div>

      <div className="markdown-preview-container">
        <h2>미리보기</h2>
        <div className="markdown-preview">
          {quillContent && (
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
              children={convertDeltaToMarkdown(quillContent)}
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
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CodingPagePostUpdate;

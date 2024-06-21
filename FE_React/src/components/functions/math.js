export const flattenSidebarOptions = (options, depth = 0) => {
  let result = [];
  options.forEach((option) => {
    result.push({ ...option, depth });
    if (option.children && option.children.length > 0) {
      result = result.concat(flattenSidebarOptions(option.children, depth + 1));
    }
  });
  return result;
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${year}년 ${month}월 ${day}일 ${hours}시 ${minutes}분`;
};

import React, { useCallback } from "react";

interface IProps {
  title: number | string;
  pageItemStyle?: string;
  btnStyle?: string;
  onHandleChangePage: (event: any) => void | null;
  currentPage?: number;
}

const PaginationItem: React.FC<IProps> = ({
  title,
  pageItemStyle,
  btnStyle,
  onHandleChangePage,
  currentPage,
}) => {
  const changePage = useCallback(
    () => {
      onHandleChangePage(currentPage);
    },
    [currentPage, onHandleChangePage],
  );

  return (

    <li className={`page-item ${pageItemStyle}`}>
      <div className="page-link" role="presentation" onClick={changePage}>
        <div className={btnStyle}>{title}</div>
      </div>
    </li>
  );
};

export default PaginationItem;

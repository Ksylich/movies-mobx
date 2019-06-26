import React, { useCallback } from "react";

interface IProps {
  title: number | string;
  pageItemStyle?: string;
  btnStyle?: string;
  onHandleChangePage: (event: any) => void | null;
  currentPage?: number;
}

const PaginationItem = ({
  title,
  pageItemStyle,
  btnStyle,
  onHandleChangePage,
  currentPage,
}: IProps) => {
  const changePage = useCallback(
    () => {
      onHandleChangePage(currentPage);
    },
    [currentPage],
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
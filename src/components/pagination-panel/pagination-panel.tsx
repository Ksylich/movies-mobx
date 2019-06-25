import classNames from "classnames";
import { inject, observer } from "mobx-react";
import React, { Component, Fragment } from "react";

import { IMovieStore, MOVIES_STORE } from "../../mobx/stores/movies";
import PaginationItem from "../pagination-item";

import "./pagination-panel.css";

interface IProps {
  [MOVIES_STORE]?: IMovieStore;
}

@inject(MOVIES_STORE)
@observer
class PaginationPanel extends Component<IProps> {

  public renderPagBegin = () => {
    const { [MOVIES_STORE]: moviesStore } = this.props;
    const style = classNames({
      invisible: moviesStore!.currentPage === 1,
    });
    return (
      <Fragment>
        <PaginationItem
          title="First"
          btnStyle="active"
          onHandleChangePage={moviesStore!.changeCurrentPage}
          pageItemStyle={style}
          currentPage={1}
        />

        <PaginationItem
          title="Prev"
          onHandleChangePage={moviesStore!.changeCurrentPage}
          pageItemStyle={style}
          currentPage={moviesStore!.currentPage - 1}
        />
      </Fragment>
    );
  }

  public renderPages = () => {
    const { [MOVIES_STORE]: moviesStore } = this.props;
    const pageIndex = moviesStore!.currentPage - 1;

    const PAGES_ARR = Array.from({ length: moviesStore!.pagesCount }, (v, k) => k + 1);

    const prefPages = PAGES_ARR.slice(0, pageIndex);
    const afterPages = PAGES_ARR.slice(pageIndex + 1);
    const pageCount = 1;

    const pref = prefPages.length > pageCount ? prefPages.slice(-pageCount) : prefPages;
    const after = afterPages.length > pageCount
      ? afterPages.slice(0, pageCount)
      : afterPages;

    return (
      <Fragment>
        {prefPages.length > pageCount ? (
          <PaginationItem title="..." onHandleChangePage={() => {}} />
        ) : null}
        {this.renderPageNumbers(pref)}
        <PaginationItem
          key={`pagebutton-${moviesStore!.currentPage}`}
          title={moviesStore!.currentPage}
          btnStyle="active"
          onHandleChangePage={moviesStore!.changeCurrentPage}
          currentPage={moviesStore!.currentPage}
        />
        {this.renderPageNumbers(after)}
        {afterPages.length > pageCount ? (
          <PaginationItem title="..." onHandleChangePage={() => {}}/>
        ) : null}
      </Fragment>
    );
  }

  public renderPageNumbers = (pages: number[]) => (
    <Fragment>{pages.map(this.renderPageButton)}</Fragment>
  )

  public renderPageButton = (pageNumber: number) => {
    const { [MOVIES_STORE]: moviesStore } = this.props;
    return (
      <PaginationItem
        key={`pagebutton-${pageNumber}`}
        title={pageNumber}
        onHandleChangePage={moviesStore!.changeCurrentPage}
        currentPage={pageNumber}
      />
    );
  }

  public renderPagEnd = () => {
    const { [MOVIES_STORE]: moviesStore } = this.props;
    const style = classNames({
      invisible: moviesStore!.currentPage === moviesStore!.pagesCount,
    });

    return (
      <Fragment>
        <PaginationItem
          title="Next"
          onHandleChangePage={moviesStore!.changeCurrentPage}
          pageItemStyle={style}
          currentPage={moviesStore!.currentPage + 1}
        />

        <PaginationItem
          title="Last"
          btnStyle="active"
          onHandleChangePage={moviesStore!.changeCurrentPage}
          pageItemStyle={style}
          currentPage={moviesStore!.pagesCount}
        />
      </Fragment>
    );
  }

  public render() {
    return (
      <div className="pagination-panel">
        <nav className="aria-label">
          <ul className="pagination justify-content-center">
            {this.renderPagBegin()}
            {this.renderPages()}
            {this.renderPagEnd()}
          </ul>
        </nav>
      </div>
    );
  }
}

export default PaginationPanel;

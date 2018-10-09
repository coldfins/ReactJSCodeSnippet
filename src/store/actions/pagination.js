export const PAGE_CHANGE_ERROR = 'PAGE_CHANGE_ERROR';
export const PAGE_CHANGE_STARTED = 'PAGE_CHANGE_STARTED';
export const PAGE_CHANGE_SUCCESS = 'PAGE_CHANGE_SUCCESS';

const pageChangeError = () => ({
  type: PAGE_CHANGE_ERROR,
});

const pageChangeStarted = () => ({
  type: PAGE_CHANGE_STARTED,
});

const pageChangeSuccess = page => ({
  page,
  type: PAGE_CHANGE_SUCCESS,
});

export const changePage = (limit, page, fetch) => (
  (dispatch) => {
    dispatch(pageChangeStarted());
    fetch(limit, page)
      .then(() => dispatch(pageChangeSuccess(page)))
      .catch(() => dispatch(pageChangeError()));
  }
);

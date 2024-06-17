import { ReadonlyURLSearchParams } from "next/navigation";


const updatePageQueryString = (
  searchParams: ReadonlyURLSearchParams,
  pathname: string,
  page: number | null | string
) => {
  const newSearchParams = new URLSearchParams(searchParams.toString());

  if (page === null || page === '') {
    newSearchParams.delete('page');
  } else {
    newSearchParams.set('page', String(page));
  }

  return `${pathname}?${newSearchParams.toString()}`;
};

export default updatePageQueryString;
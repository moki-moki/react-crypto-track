const Pagination = ({ totalPost, postPerPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((num) => (
          <li className="pageNum" key={num} onClick={() => paginate(num)}>
            {num}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;

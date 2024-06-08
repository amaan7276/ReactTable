
import React from 'react';
import { useSelector } from 'react-redux';
import { useTable, useSortBy, usePagination, useGlobalFilter } from 'react-table';
import './Table.css';
import { downloadExcel } from '../utils/downloadExcel';
import { useNavigate } from 'react-router-dom';

const Table = () => {
  const data = useSelector((state) => state.table.filteredData);
  const columns = React.useMemo(() => [
    { Header: 'Account Name', accessor: 'name' },
    { Header: 'Email', accessor: 'email' },
    { Header: 'Phone No.', accessor: 'phone' },
    { Header: 'Website', accessor: 'website' },
    { Header: 'Industry', accessor: 'industry' },
    { Header: 'Account Status', accessor: 'status' },
    { Header: 'Remark', accessor: 'remark' },
  ], []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    nextPage,
    previousPage,
    setGlobalFilter,
    state: { pageIndex },
  } = useTable({ columns, data, initialState: { pageIndex: 0 } }, useGlobalFilter, useSortBy, usePagination);

  const navigate = useNavigate();

  return (
    <div className="table-container">
      <h2>Account Lists</h2>
      <button onClick={() => navigate('/form')}>Add Account</button>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setGlobalFilter(e.target.value || undefined)}
        style={{ marginBottom: '10px', marginTop: '10px', padding: '8px', width: '100%' }}
      />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </button>
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>
      </div>
      <button className="download-btn" onClick={() => downloadExcel(data)}>Download as Excel</button>
    </div>
  );
};

export default Table;

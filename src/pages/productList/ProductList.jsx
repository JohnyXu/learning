import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

import { Link } from 'react-router-dom';
import './productList.css';
import { useState } from 'react';
import { productRows } from '../../dummyData';

export default function ProductList() {
  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'product',
      headerName: 'Product',
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img src={params.row.img} alt="" className="productListImg" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: 'stock', headerName: 'Stock', width: 200 },
    { field: 'status', headerName: 'Status', width: 120 },
    { field: 'price', headerName: 'Price', width: 160 },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={'/product/' + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];
  return (
    <div className="productList">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        disableSelectionOnClick
        checkboxSelection
      />
    </div>
  );
}

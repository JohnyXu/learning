import { Link } from 'react-router-dom';
import React from 'react';
import './product.css';
import PublishIcon from '@material-ui/icons/Publish';
import Chart from '../../components/chart/Chart';
import { productData } from '../../dummyData';

export default function Product() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart data={productData} dataKey="Sales" title="Sales Performance" />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img
              src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="productInfoImg"
            />
            <span className="productName">Apple Airpods</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <div className="productInfoKey">id:</div>
              <div className="productInfoValue">123</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">sales:</div>
              <div className="productInfoValue">6123</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">active:</div>
              <div className="productInfoValue">yes</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">in stock:</div>
              <div className="productInfoValue">no</div>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" placeholder="Apple AirPod" />
            <label>In Stock</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img
                src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="productUploadImg"
              />
              <label htmlFor="file">
                <PublishIcon className="userUpdateIcon" />
              </label>
              <input type="file" id="file" style={{ display: 'none' }} />
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}

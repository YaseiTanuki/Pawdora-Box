import React from 'react';
import { useLocation } from 'react-router-dom';
import "./user.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faFileInvoice, faBell, faCog, faPenToSquare, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import user_icon from '../../../assets/img/user.svg'

const UserInfo = () => {
  const location = useLocation();
  const { user } = location.state || {};

  if (!user) {
    return <p>Không có thông tin người dùng.</p>;
  }

  return (
    <div className="user-info-container">
      <div className="left-column">
        <h2>Hồ sơ của tôi</h2>
        <ul>
          <li>
            <FontAwesomeIcon icon={faUser} /> Thông tin
          </li>
          <li>
            <FontAwesomeIcon icon={faFileInvoice} /> Đơn mua
          </li>
          <li>
            <FontAwesomeIcon icon={faBell} /> Thông báo
          </li>
          <li>
            <FontAwesomeIcon icon={faCog} /> Cài đặt
          </li>
        </ul>
        <div className='logout'>
        
        <a href="/">
        <FontAwesomeIcon icon={faRightFromBracket} className="rotate-icon" />
          Đăng xuất
        </a>
        </div>
      </div>
      <div className="right-column">
        <div className='header'>
          <img src={user_icon}/>
          <div className="profile-options">
          <h2>{user.fullName}</h2>
            <p><FontAwesomeIcon icon={faPenToSquare} className='iconPen' />Sửa hồ sơ</p>
          </div>
        </div>
        <div className="user-details">
          <table>
            <tr>
              <td colSpan={2}>
                Họ và tên 
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <div className='name'> <p>Trần Thị Hải</p></div> 
              </td>
            </tr>
            <tr>
              <td>
                Email
              </td>
              <td>
                Số điện thoại
              </td>
            </tr>
            <tr>
              <td>
                <div><p>{user.email}</p></div> 
              </td>
              <td>
                <div><p>038612****</p></div>
              </td>
            </tr>
            <tr>
              <td>
                Giới tính
              </td>
              <td>
                Ngày sinh
              </td>
            </tr>
            <tr>
              <td>
                <div><p>Nữ</p></div> 
              </td>
              <td>
                <div><p>18/03/2003</p></div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;

import React,{useEffect,useRef, useState } from "react";
import { history, Link, useRequest } from '@umijs/max';
import {jwtDecode} from 'jwt-decode';
import axios from "axios";
import { PlusOutlined,FilePdfOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns, ProDescriptionsItemProps } from '@ant-design/pro-components';
import {
  FooterToolbar,
  ModalForm,
  PageContainer,
  ProDescriptions,
  ProFormText,
  ProFormTextArea,
  ProTable,
} from '@ant-design/pro-components';
import {API_URL} from '../../../constants/constants';
import { Button, Drawer, Input, message } from 'antd';
import type { FormValueType } from './components/UpdateForm';
import type { TableListItem, TableListPagination } from './data';
import { addRule, removeRule, rule, updateRule } from './service';
import '@/utils/protable.css'; // Import the CSS file for row styling
/**
 * 添加节点
 *
 * @param fields
 */


const UserList: React.FC = () => {
  /** 新建窗口的弹窗 */
  const [createModalVisible, handleModalVisible] = useState<boolean>(false);
  /** 分布更新窗口的弹窗 */

  const [updateModalVisible, handleUpdateModalVisible] = useState<boolean>(false);
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const actionRef = useRef<ActionType>();
  const [currentRow, setCurrentRow] = useState<TableListItem>();
  const [selectedRowsState, setSelectedRows] = useState<TableListItem[]>([]);

  const rowClassName = (record, index) => {
    return index % 2 === 0 ? 'alternate-row-even' : 'alternate-row-odd';
  };


  /** 国际化配置 */
  
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);




  const isTokenExpired = (token:any) => {
    if (!token) return true;
    try {
      const decodedToken = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      return decodedToken.exp < currentTime;
    } catch (error) {
      console.error('Error decoding token:', error);
      return true;
    }
  };

  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      const token = (typeof window !== 'undefined') ? localStorage.getItem('accessToken') : null;
      if (isTokenExpired(token)) {
        localStorage.removeItem('accessToken');
        history.push({
          pathname: `/user/login`,
          
        });
      } else {

        fetchData({});


      }
    } else {
      history.push({
        pathname: `/user/login`,
        
      });
    }
  });

  const fetchData = async (params:any) => {
    try {
      const token = typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null;
      const config = {
        headers: { Authorization: `Bearer ${token}`,
                  'content-type': 'application/json',
                  'Accept': 'application/json' }
      };
      const response = await axios.get(API_URL+'api/test/clients', config);
      setData(response.data);
      setTotal(response.data.length());
    } catch (error) {
      console.error('Failed to fetch data:', error);
    } finally {
      setLoading(false);
    }

  };



  const columns = [
    
  {
    title: 'Auftraggeber (Kunde)',
  dataIndex: "client_name",

},
{
  title: 'Nutzername',
  dataIndex: "username",

},
{
  title: 'Email',
  dataIndex: "email",

},
{
  title: 'Auftraggeber (Kunde) Id',
  dataIndex: "client_id",

},
{
  title: 'Straße',
  dataIndex: "street",

},
{
  title: 'Adresse',
  dataIndex: "address",

},
{
  title: 'Webseite',
  dataIndex: "website",
  render: (text:any) => <a href={''} target="_blank">
      {text}</a>

},
{
  title: 'Kontakt 1',
  dataIndex: "contact_one",

},
{
  title: 'Kontakt 2',
  dataIndex: "contact_two",

}


  ];



  return (
    <PageContainer>
      <ProTable
          columns={columns}
          dataSource={data}
          rowKey="id"
          actionRef={actionRef}
          pagination={{
            total,
            pageSize: 10,
            showSizeChanger: true,
          }}
          loading={loading}
          request={(params, sorter, filter) => {
            const queryParams = {
              page: params.current,
              pageSize: params.pageSize,
              sortField: sorter.field,
              sortOrder: sorter.order,
              ...filter,
              search: params.keyword,
            };
            fetchData(queryParams);
            return Promise.resolve({
              data,
              success: true,
              total,
            });
          }}
          search={{
            layout: 'vertical',
          }}
          toolBarRender={() => [
            <Input.Search
              placeholder="Search..."
              onSearch={(value) => {
                actionRef.current.reload();
              }}
            />,
          ]}
          scroll={{ x: 'max-content' }} // Enable horizontal scroll
          rowClassName={rowClassName} // Apply row class names for alternating row colors
        />
    </PageContainer>
  );
};

export default UserList;

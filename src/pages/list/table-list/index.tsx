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
import UpdateForm from './components/UpdateForm';
import type { TableListItem, TableListPagination } from './data';
import { addRule, removeRule, rule, updateRule } from './service';
import '@/utils/protable.css'; // Import the CSS file for row styling
/**
 * 添加节点
 *
 * @param fields
 */





const handleAdd = async (fields: TableListItem) => {
  const hide = message.loading('正在添加');

  try {
    await addRule({ ...fields });
    hide();
    message.success('添加成功');
    return true;
  } catch (error) {
    hide();
    message.error('添加失败请重试！');
    return false;
  }
};
/**
 * 更新节点
 *
 * @param fields
 */

const handleUpdate = async (fields: FormValueType, currentRow?: TableListItem) => {
  const hide = message.loading('正在配置');

  try {
    await updateRule({
      ...currentRow,
      ...fields,
    });
    hide();
    message.success('配置成功');
    return true;
  } catch (error) {
    hide();
    message.error('配置失败请重试！');
    return false;
  }
};
/**
 * 删除节点
 *
 * @param selectedRows
 */

const handleRemove = async (selectedRows: TableListItem[]) => {
  const hide = message.loading('正在删除');
  if (!selectedRows) return true;

  try {
    await removeRule({
      key: selectedRows.map((row) => row.key),
    });
    hide();
    message.success('删除成功，即将刷新');
    return true;
  } catch (error) {
    hide();
    message.error('删除失败，请重试');
    return false;
  }
};

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
      const response = await axios.get(API_URL+'api/test/reports', config);
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
    title: 'Jahr',
    dataIndex: "cal_year",
  },
  {
    title: 'Auftraggeber (Kunde)',
    dataIndex: "client",
  },
  {

    title: 'Prüfdatum',
    dataIndex: "test_date",
  },
  {

    title: 'Nächster Prüftermin',
    dataIndex: "next_test_date",
  },
  {
    title: 'Geräteart',
    dataIndex: "application_type",
  },
  {
    title: 'Ident-. Nr',
    dataIndex: "identification_number",
  },
  {
    title: 'Prüfung nach',
    dataIndex: "test_according_to",
  },
  {

    title: 'Hersteller',
    dataIndex: "manufucturer",
  },
  {
    title: 'Abteilung',
    dataIndex: "department",
  },
  {
    title: 'Schutzleiterlänge (m)',
    dataIndex: "measuring_length",
  },
  {
    title: 'Messprofil',
    dataIndex: "profile",
  },
  {
    title: 'Inspektionsbericht',
    dataIndex: "report_namr",
    sorter: true,
    render: (text:any) => <a href={require("/Users/paul85alex/Downloads/TestMasterData/"+text)} target="_blank">
      <FilePdfOutlined style={{ fontSize: '16px', color: '#FF0000' }} />
      {"  Bericht"}</a>,
  },
  {

    title: 'Typ',
    dataIndex: "type_number",
  },
  {
    title: 'Seriennummer',
    dataIndex: "serial_number",
  },
  {
    title: 'Gerätetyp',
    dataIndex:  "device_type",
  },
  {
    title: 'Querschnitt (qmm)',
    dataIndex: "cross_section",

  },
  {
    title: 'Prüfer',
    dataIndex: "examiner",

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

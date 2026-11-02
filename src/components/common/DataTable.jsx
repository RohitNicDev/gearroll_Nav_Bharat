import { Table } from 'antd';

export default function DataTable({ columns = [], dataSource = [], rowKey = 'id', ...props }) {
  return <Table columns={columns} dataSource={dataSource} rowKey={rowKey} pagination={{ pageSize: 10, showSizeChanger: true, showTotal: (total) => `${total} items` }} scroll={{ x: true }} {...props} />;
}

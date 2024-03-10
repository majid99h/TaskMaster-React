import { useState, useEffect } from 'react';
import { Table, Button } from 'antd';
const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('https://taskmasterweb20240307114005.azurewebsites.net/api/project')
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error('Error fetching projects:', error));
  }, []);

  const columns = [
    {
      title: 'Project Id',
      dataIndex: 'projectID',
      key: 'projectID',
    },
    {
      title: 'Project Title',
      dataIndex: 'projectName',
      key: 'projectName',
    },
    {
      title: 'Created Date',
      dataIndex: 'createdDate',
      key: 'createdDate',
    },
  ];

  return (
    <>
      <Button type="primary">Create Porject</Button>
      <Table columns={columns} dataSource={projects} />
    </>
  );
};

export default ProjectList;

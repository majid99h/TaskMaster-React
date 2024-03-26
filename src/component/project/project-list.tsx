import { useState, useEffect } from "react";
import { Table, Button } from "antd";
import type { TableColumnsType } from "antd";
import { format } from "date-fns";
import { CheckCircleOutlined, FileDoneOutlined } from "@ant-design/icons";
import Project from "../../interface/project";
import { useNavigate } from "react-router-dom";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://taskmasterweb20240307114005.azurewebsites.net/api/project")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);
  interface DataType extends Project {
    key: React.Key;
    title: string;
  }
  function CreateProject(){
    navigate("create");
  }
  const columns: TableColumnsType<DataType> = [
    {
      title: "Project Id",
      dataIndex: "projectID",
    },
    {
      title: "Project Title",
      dataIndex: "projectName",
      sorter: {
        compare: (a: Project, b: Project) =>
          a.projectName.length - b.projectName.length,
      },
    },
    {
      title: "Start Date",
      dataIndex: "startDate",
      render: (startDate: Date) => {
        if (startDate) {
          return format(startDate, "MMMM dd, yyyy");
        } else {
          return "";
        }
      },
    },
    {
      title: "End Date",
      dataIndex: "endDate",
      render: (endDate: Date) => {
        if (endDate) {
          return format(endDate, "MMMM dd, yyyy");
        } else {
          return "";
        }
      },
    },
    {
      title: "Active",
      dataIndex: "isActive",
      render: (isActive: boolean) => {
        if (isActive) {
          return <CheckCircleOutlined />;
        } else {
          return <CheckCircleOutlined />;
        }
      },
    },
    {
      title: "Finish",
      dataIndex: "isCompleted",
      render: (isCompleted: boolean) => {
        if (isCompleted) {
          return <FileDoneOutlined />;
        } else {
          return <FileDoneOutlined />;
        }
      },
    },
  ];
 
  return (
    <>
      <Button type="primary" onClick={CreateProject}>Create Porject</Button>
      <Table columns={columns} dataSource={projects} rowKey="projectID" />
    </>
  );
};

export default ProjectList;

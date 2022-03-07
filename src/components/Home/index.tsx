import { Layout, Menu } from "antd";
import { FC, useState } from "react";
import { Grid } from "../Grid";
import { RegistrationForm } from "../RegistrationForm";

const { Header, Content, Sider } = Layout;

export const Home: FC = () => {
  const [selectedPage, setSelectedPage] = useState<string>("form");

  const selectPage = (x: any) => setSelectedPage(x.key);
  return (
    <Layout>
      <Header className="header">
        <div className="logo">
          <img
            src="https://storage.googleapis.com/fs.goswift.in/site/logo_v2.png"
            alt="Swift"
            height={50}
          />
        </div>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={[selectedPage]}
            defaultOpenKeys={[selectedPage]}
            style={{ height: "100%", borderRight: 0 }}
            onSelect={selectPage}
          >
            <Menu.Item key="form">Form</Menu.Item>
            <Menu.Item key="grid">Grid</Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          {selectedPage === "form" && (
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <RegistrationForm />
            </Content>
          )}

          {selectedPage === "grid" && (
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <Grid />
            </Content>
          )}
        </Layout>
      </Layout>
    </Layout>
  );
};

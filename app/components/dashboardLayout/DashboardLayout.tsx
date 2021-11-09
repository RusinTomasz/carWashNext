import React, {FC, useEffect, useState} from 'react';
import {Col, Layout, Menu, Row} from "antd";
import Link from "next/link";
const {Sider, Content} = Layout;
import {
    ArrowLeftOutlined,
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined
} from "@ant-design/icons";
import styled from "styled-components";
import {colors} from "../../styles/variables";
import fonts from "../../styles/shared/fonts";
import {useAppDispatch, useAppSelector} from "../../../store/hooks/storeHooks";
import {selectMenuSelectedKeys} from "../../../store/features/dashboard/dashboardSelectors";
import {setMenuSelectedKeys} from "../../../store/features/dashboard/dashboardSlice";
import 'antd/dist/antd.css';
import Router from "next/router";
import LoadingScreen from "../loadingScreen/LoadingScreen";
import LoadingSpinner from "../loaders/LoadingSpinner";
import useLoading from "../../hooks/useLoading";

const DashBoardHeader = styled(Row)`
  background-color: ${colors.blue};
  padding: 1rem 2.4rem;
`

const DashboardSider = styled(Sider)`
  padding-top: 1.5rem;
`
const DashboardContent = styled(Content)`
  padding: 1.5rem;
  background-color: white;
`

const BackToPage = styled.a`
  color: white;

`
const BackToPageText = styled.span`
  margin-left: 1rem;
  font-size: 21px;
  text-transform: uppercase;
  font-family: ${fonts.teko};
`


const DashboardLayout: FC = ({children}) => {

    const dispatch = useAppDispatch();
    const selectedMenuKeys = useAppSelector(selectMenuSelectedKeys);
    const loading = useLoading();

    return (
        <Layout>
            <DashBoardHeader>
                <Col span={24}>
                    <Link href="/" passHref><BackToPage><ArrowLeftOutlined/><BackToPageText>Powrót do
                        strony</BackToPageText></BackToPage></Link>
                </Col>
            </DashBoardHeader>
            <Layout>
                <DashboardSider theme="light">
                    <Menu theme="light" defaultSelectedKeys={selectedMenuKeys} mode="inline">

                        <Menu.Item key="1" icon={<PieChartOutlined/>}>
                            <Link href="/dashboard" passHref>
                                <a onClick={() => dispatch(setMenuSelectedKeys("1"))}>
                                    Podsumowanie
                                </a>
                            </Link>
                        </Menu.Item>

                        <Menu.Item key="2" icon={<DesktopOutlined/>}>
                            <Link href="/dashboard/contact-info" passHref>
                                <a onClick={() => dispatch(setMenuSelectedKeys("2"))}>
                                    Dane kontaktowe
                                </a>
                            </Link>
                        </Menu.Item>

                        <Menu.Item key="3" icon={<TeamOutlined/>}>
                            <Link href="/dashboard/about-company" passHref>
                                <a onClick={() => dispatch(setMenuSelectedKeys("3"))}>
                                    Opis firmy
                                </a>

                            </Link>
                        </Menu.Item>
                        <Menu.Item key="4" icon={<UserOutlined/>}>
                            <Link href="/dashboard/open-hours" passHref>
                                <a onClick={() => dispatch(setMenuSelectedKeys("4"))}>
                                    Godziny otwarcia
                                </a>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="5" icon={<FileOutlined/>}>
                            <Link href="/dashboard/gallery" passHref>
                                <a onClick={() => dispatch(setMenuSelectedKeys("5"))}>
                                    Galeria
                                </a>
                            </Link>
                        </Menu.Item>
                    </Menu>
                </DashboardSider>
                <DashboardContent> {loading ? <LoadingSpinner  borderSize={1}  size={50}/> : children}</DashboardContent>
            </Layout>
        </Layout>
    );
};

export default DashboardLayout;

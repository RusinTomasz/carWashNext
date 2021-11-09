import React, {useEffect} from 'react';
import DashboardLayout from "../../app/components/dashboardLayout/DashboardLayout";
import {useAppDispatch} from "../../store/hooks/storeHooks";
import {setCarWashesRelatedToOwner} from "../../store/features/dashboard/dashboardAsyncActions";
import {useSelector} from "react-redux";
import {selectOwnerCarWashes} from "../../store/features/dashboard/dashboardSelectors";


const Dashboard = () => {
    const dispatch = useAppDispatch();
    const carWashes = useSelector(selectOwnerCarWashes);

    useEffect(() => {
        dispatch(setCarWashesRelatedToOwner("http://localhost:1337/car-washes?users.id=1"));
    }, [])

    console.log(carWashes)

    return (
        <DashboardLayout><p>Hello Summary</p></DashboardLayout>
    );
};

export default Dashboard;

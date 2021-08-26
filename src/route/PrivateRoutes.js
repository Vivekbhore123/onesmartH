import React, { Suspense, lazy, useEffect } from 'react';
import {  Route, Switch, useLocation } from 'react-router-dom';
import SLUGS from 'resources/slugs';
import LoadingComponent from 'components/loading';

import { useSelector } from 'react-redux';

import AdminRoute from './auth/AdminRoutes';
import DoctorRoute from './auth/DoctorRoute';
import PatientRoute from './auth/PatientRoute';
import SubAdminRoute from './auth/SubAdminRoute';
import CommonProfRoute from './auth/CommonProfRoute';



// admin

import CustomersList from './admin/customers/List';
import CustomerNew from './admin/customers/New';
import CustomerShow from './admin/customers/Show';
import CustomerEdit from './admin/customers/Edit';

import DepartmentsList from './admin/departments/List';
import DepartmentShow from './admin/departments/Show';
import DepartmentEdit from './admin/departments/Edit';

import EmployeesList from './admin/employees/List';
import EmployeeNew from './admin/employees/New';
import EmployeeShow from './admin/employees/Show';
import EmployeeEdit from './admin/employees/Edit';


import DoctorsList from './admin/doctors/List';
import DoctorNew from './admin/doctors/New';
import DoctorShow from './admin/doctors/Show';
import DoctorEdit from './admin/doctors/Edit';

import TicketsList from './admin/tickets/List';
import TicketNew from './admin/tickets/New';
import TicketShow from './admin/tickets/Show';
import TicketEdit from './admin/tickets/Edit';

import Reports from './admin/tickets/Reports';
import Profile from './admin/profile/Profile';
import EditProfile from './admin/profile/EditProfile';
import CreateNewPassword from './admin/profile/createNewPassword';
import ChangePassword from './admin/profile/ChangePassword';

// admin


//subadmin


// import SubCustomersList from './subadmin/customers/List';
// import SubCustomerNew from './subadmin/customers/New';
// import SubCustomerShow from './subadmin/customers/Show';
// import SubCustomerEdit from './subadmin/customers/Edit';


// import SubTicketsList from './subadmin/tickets/List';
// import SubTicketNew from './subadmin/tickets/New';
// import SubTicketShow from './subadmin/tickets/Show';
// import SubTicketEdit from './subadmin/tickets/Edit';

import SubProfile from './subadmin/profile/Profile';
import SubCreateNewPassword from './subadmin/profile/Profile';
import SubChangePassword from './subadmin/profile/Profile';

//subadmin

//doctor
// import DocProfile from './doctor/profile/Profile';
// import DocCreateNewPassword from './doctor/profile/createNewPassword';
// import DocChangePassword from './doctor/profile/ChangePassword';


// import DocTicketsList from './doctor/tickets/List';
// import DocTicketNew from './doctor/tickets/New';
// import DocTicketShow from './doctor/tickets/Show';
// import DocTicketEdit from './doctor/tickets/Edit';


//doctor

//patient
// import PatProfile from './patient/profile/Profile';
// import PatCreateNewPassword from './patient/profile/createNewPassword';
import PatChangePassword from './patient/profile/ChangePassword';


// import PatTicketsList from './patient/tickets/List';
// import PatTicketNew from './patient/tickets/New';
// import PatTicketShow from './patient/tickets/Show';
// import PatTicketEdit from './patient/tickets/Edit';
// import NotFound from './user/NotFound';




//patient

const AdminDashboard = lazy(() => import('./admin/dashboard'));
const SubAdminDashboard = lazy(() => import('./subadmin/dashboard'));
const DoctorDashboard = lazy(() => import('./doctor/dashboard'));
const PatientDashboard = lazy(() => import('./patient/dashboard'));

// const PatientDashboard=()=>{
//     console.log('inside redirect testing ');

//     return(
//         <h1>hello patient</h1>
//     )
// }

function PrivateRoutes() {

    const user = useSelector(state => state.user)

    const { pathname } = useLocation();
    // eslint-disable-next-line no-unused-vars

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <Suspense fallback={<LoadingComponent loading />}>
            <Switch>
                {/* admin */}
                <AdminRoute exact path={SLUGS.admindashboard} component={AdminDashboard} />
                <AdminRoute exact path={SLUGS.adprofile} component={Profile} />
                <AdminRoute exact path={SLUGS.updateadprofile} component={EditProfile} />
                <AdminRoute path='/customers' component={CustomersList} exact={true} />
                <AdminRoute exact path='/customers/new' component={CustomerNew} />
                <AdminRoute exact path='/customers/edit/:id' component={CustomerEdit} />
                <AdminRoute exact path='/customers/:id' component={CustomerShow} />
                <AdminRoute path='/departments' component={DepartmentsList} exact={true} />
                <AdminRoute exact path='/departments/edit/:id' component={DepartmentEdit} />
                <AdminRoute exact path='/departments/:id' component={DepartmentShow} />

                <AdminRoute path='/employees' component={EmployeesList} exact={true} />
                <AdminRoute exact path='/employees/new' component={EmployeeNew} />
                <AdminRoute exact path='/employees/edit/:id' component={EmployeeEdit} />
                <AdminRoute exact path='/employees/:id' component={EmployeeShow} />

                <AdminRoute path='/doctors' component={DoctorsList} exact={true} />
                <AdminRoute exact path='/doctors/new' component={DoctorNew} />
                <AdminRoute exact path='/doctors/edit/:id' component={DoctorEdit} />
                <AdminRoute exact path='/doctors/:id' component={DoctorShow} />

                <AdminRoute path='/tickets' component={TicketsList} exact={true} />
                <AdminRoute exact path='/tickets/new' component={TicketNew} />
                <AdminRoute exact path='/tickets/edit/:id' component={TicketEdit} />
                <AdminRoute exact path='/tickets/:id' component={TicketShow} />
                <AdminRoute exact path='/reports' component={Reports} />
                <AdminRoute exact path='/createNewPassword/:token' component={CreateNewPassword} />
                <AdminRoute exact path='/updatePassword' component={ChangePassword} />

                {/* admin */}
                {/* subadmin */}
                <SubAdminRoute exact path={SLUGS.subadmindashboard} component={SubAdminDashboard} />
                <CommonProfRoute exact path={SLUGS.subprofile} component={SubProfile} />
                <SubAdminRoute path='/customers' component={CustomersList} exact={true} />
                <SubAdminRoute exact path='/customers/new' component={CustomerNew} />
                <SubAdminRoute exact path='/customers/edit/:id' component={CustomerEdit} />
                <SubAdminRoute exact path='/customers/:id' component={CustomerShow} />
                <SubAdminRoute path='/tickets' component={TicketsList} exact={true} />
                <SubAdminRoute exact path='/tickets/new' component={TicketNew} />
                <SubAdminRoute exact path='/tickets/edit/:id' component={TicketEdit} />
                <SubAdminRoute exact path='/tickets/:id' component={TicketShow} />
                <SubAdminRoute exact path='/subupdatePassword' component={SubChangePassword} />
                <AdminRoute
                    exact
                    path='/subcreateNewPassword/:token'
                    component={SubCreateNewPassword}
                />

                {/* subadmin */}
                {/* doctor */}
                <DoctorRoute exact path={SLUGS.admindashboard} component={DoctorDashboard} />
                <DoctorRoute exact path={SLUGS.adprofile} component={Profile} />
                <DoctorRoute path='/tickets' component={TicketsList} exact={true} />
                <DoctorRoute exact path='/tickets/new' component={TicketNew} />
                <DoctorRoute exact path='/tickets/edit/:id' component={TicketEdit} />
                <DoctorRoute exact path='/tickets/:id' component={TicketShow} />
                {/* doctor */}
                {/* patient */}
                <PatientRoute path='/patdashboard' exact component={PatientDashboard} />
                <PatientRoute exact path={SLUGS.adprofile} component={Profile} />

                <PatientRoute exact path='/patupdatePassword' component={PatChangePassword} />
                <PatientRoute path='/tickets' component={TicketsList} exact={true} />
                <PatientRoute exact path='/tickets/new' component={TicketNew} />
                <PatientRoute exact path='/tickets/edit/:id' component={TicketEdit} />
                <PatientRoute exact path='/tickets/:id' component={TicketShow} />
                {/* patient */}
                {/* <Route exact path={SLUGS.overviewTwo} render={() => <div>overviewTwo</div>} />
                <Route exact path={SLUGS.overviewThree} render={() => <div>overviewThree</div>} />
                <Route exact path={SLUGS.overview} render={() => <div>overview</div>} />
                <Route exact path={SLUGS.tickets} render={() => <div>tickets</div>} />
                <Route exact path={SLUGS.ideasTwo} render={() => <div>ideasTwo</div>} />
                <Route exact path={SLUGS.ideasThree} render={() => <div>ideasThree</div>} />
                <Route exact path={SLUGS.ideas} render={() => <div>ideas</div>} />
                <Route exact path={SLUGS.contacts} render={() => <div>contacts</div>} />
                <Route exact path={SLUGS.agents} render={() => <div>agents</div>} />
                <Route exact path={SLUGS.articles} render={() => <div>articles</div>} />
                <Route exact path={SLUGS.settings} render={() => <div>settings</div>} />
                <Route exact path={SLUGS.subscription} render={() => <div>subscription</div>} /> */}
                {/* <Route component={NotFound}></Route> */}

                {user.role === 1 && <Route component={AdminDashboard} />}
                {user.role === 2 && <Route component={PatientDashboard} />}
                {user.role === 3 && <Route component={SLUGS.admindashboard} />}
                {user.role === 4 && <Route component={PatientDashboard} />}
            </Switch>
        </Suspense>
    );
}

export default PrivateRoutes;

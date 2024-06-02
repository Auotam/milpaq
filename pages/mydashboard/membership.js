import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import useUserData from '@/utils/UseUserdata';
import Layout from '@/components/dashboard/layout';
import Wrapper from '@/layout/wrapper';
import SEO from '@/components/seo';
import DashboardMain from '@/components/dashboard';
import Membership from '@/components/dashboard/membership/membershippage';


const Dashboard = () => {
  
  // if (userData === null) {
  //   return <p>Loading user data...</p>;
  // }

  return (

    <Wrapper>
    <SEO pageTitle={'About'} />
    <Layout>
      <Membership />
    
  </Layout>
  </Wrapper>
    
  );
};

export default Dashboard;

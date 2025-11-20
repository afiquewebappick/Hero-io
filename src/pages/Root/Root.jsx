import React from 'react';
import Banner from '../../components/Banner/Banner';
import States from '../../components/States/States';
import Trending from '../../components/Trending.jsx/Trending';
import { useLoaderData } from "react-router";

const Root = () => {
    const { data: apps } = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <States></States>
            <Trending apps={apps}></Trending>
        </div>
    );
};

export default Root;
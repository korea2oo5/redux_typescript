import NoticeList from "../components/NoticeList";
import React from 'react';

type Props = {
    props: any[]
}

function NoticeContainers({props}:Props){
    return (
        <>
            <NoticeList props={props.props} />
    </>
)
};

export default NoticeContainers;
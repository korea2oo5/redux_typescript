import React from "react";
import Link from 'next/link';
import {useDispatch} from 'react-redux';
import { getNtc } from '../modules/notice'


type Props = {
    props: any[]
}

function NoticeList({props}: Props){

    const lists = props;

    const dispatch = useDispatch();

    return(
        <>
            <div>
                {lists && lists.map((list: { NTC_ID: string | number | undefined; NTC_TITLE: React.ReactNode; }) => (
                <Link href={{pathname:'noticeDetail', query: {id: list.NTC_ID}}}><li key={list.NTC_ID} onClick={() => dispatch(getNtc(list.NTC_ID))}>{list.NTC_TITLE}</li></Link>
            ))}
            </div>
        </>
    )
};

export default NoticeList;
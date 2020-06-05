// import React from 'react';
// import axios from 'axios';
// import NoticeContainers from "../containers/NoticeContainers";
//
// const Index = ({lists}) => {
//
//     return (
//         <>
//             <NoticeContainers props={lists}/>
//         </>
//     )
// };


import React from 'react'
import axios from 'axios';
import NoticeList from "../components/NoticeList";

// 배열이 가지는 항목의 값의 타입을 단언할 수 없다면 any를 사용
type Props = {
    lists: any[]
}

function Index({ lists }: Props) {
    // return (
    //     <>
    //         {lists && lists.map(list => (
    //             <li key={list.NTC_ID} >{list.NTC_TITLE}</li>
    //         ))}
    //     </>
    // )
    return (
        <>
            <NoticeList props={lists}/>
        </>
    )

}
Index.getInitialProps = async function() {
    const response = await axios.get('http://15.165.161.162:8086/api/web/notice/NoticeList?PAGE=1');
    return {
        lists : response.data.data[0].list
    }
}


export default Index
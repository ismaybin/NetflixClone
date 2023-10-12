import React from 'react'
import Main from '../Main'
import Row from '../Row'

import requests from '../../Request'

const Home = () => {
  return (
    <div>
        <Main/>
        <Row RowId = "1" title = 'UpComing' fetchURL = {requests.requestUpcoming} />
        <Row RowId = "2" title = 'Popular' fetchURL =   {requests.requestPopular} />
        <Row RowId = "3" title = 'Trending' fetchURL = {requests.requestTrending} />
        <Row RowId = "4" title = 'TopRated' fetchURL = {requests.requestTopRated} />
        <Row RowId = "5" title = 'Horror' fetchURL = {requests.requestHorror} />
    </div>
  )
}

export default Home

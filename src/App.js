import React from 'react';
import './App.css';
import Row from './Row';
import requests from './Requests';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <Row 
      title = "NETFLIX ORIGINALS" 
      fetchUrl = {requests.fetchNetflixOriginals} 
      isLargeRow = {true}
      />
      <Row title = "Trending Now" fetchUrl = {requests.fetchTrending}/>
      <Row title = "Top Rated" fetchUrl = {requests.fetchTopRated}/>
      <Row title = "Action Movies" fetchUrl = {requests.fetchActionMovies}/>
      <Row title = "Comedy Movies" fetchUrl = {requests.fetchComedyMovies}/>
      <Row title = "Romance Movies" fetchUrl = {requests.fetchRomanceMovies}/>
      <Row title = "Documentaries" fetchUrl = {requests.fetchDocumantaries}/> 
    </div>
  );
}

export default App;

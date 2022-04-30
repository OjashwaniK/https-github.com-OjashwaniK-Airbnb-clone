import React from "react";
import "./SearchPage.css";
import { Button } from "@mui/material";
import SearchResult from "./SearchResult";

function SearchPage() {
  return (
    <div className="searchpage">
      <div className="searchpage_info">
        <p>62 Stays &#8226; 26August to 30 August &#8226; 2 Guests</p>
        <h1>Stay Nearby</h1>
        <Button>Cancellation Flexibilty</Button>
        <Button>Type Of place</Button>
        <Button>Price</Button>
        <Button>Rooms and Beds</Button>
        <Button>More and Flats</Button>
      </div> 
      <SearchResult
      img='https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'
      location='Washington'
      title='Stay at this spacious Edwardian House'
      description='Air-conditioned rooms feature a spacious seating area and are equipped with a work desk, flat-screen satellite TV, minibar and electric kettle '
      star='4.7'
      price='$30/Night'
      total='$112 Total'
    />
       <SearchResult
      img='https://images.unsplash.com/photo-1505692952047-1a78307da8f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHw5OTU0Mzl8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60'
      location='DenMark'
      title='Stay at this spacious Edwardian House'
      description='Air-conditioned rooms feature a spacious seating area and are equipped with a work desk, flat-screen satellite TV, minibar and electric kettle '
      star='4.5'
      price='$40/Night'
      total='$162 Total'
    />
       <SearchResult
      img='https://images.unsplash.com/photo-1582582494705-f8ce0b0c24f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTF8OTk1NDM5fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
      location='NewYork'
      title='Stay at this spacious Edwardian House'
      description='Air-conditioned rooms feature a spacious seating area and are equipped with a work desk, flat-screen satellite TV, minibar and electric kettle '
      star='4.4'
      price='$35/Night'
      total='$152 Total'
    />
       <SearchResult
      img='https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OHw5OTU0Mzl8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60'
      location='Banglore'
      title='Stay at this spacious Edwardian House'
      description='Air-conditioned rooms feature a spacious seating area and are equipped with a work desk, flat-screen satellite TV, minibar and electric kettle '
      star='4.8'
      price='$20/Night'
      total='$102 Total'
    />
    </div>
  );
}

export default SearchPage;

import React from 'react';
import ReactDOM from 'react-dom';

import YTSearch from 'youtube-api-search';

//components
import SearchBar from './components/search_bar';

const youtubeApiKey='AIzaSyDs1V_kOuLm0iuSMGjcJcZyHBQFZI94vi4';

YTSearch({key: youtubeApiKey, term:'whitney'}, function(data){
    console.log(data);
});

const App =  ()=> {
    return (    
    <div>
        <SearchBar/>
    </div>
    );
}



const dapp=document.getElementById('app');

ReactDOM.render(<App/>,dapp);
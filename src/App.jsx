
//useState hook to manage state (episode list and selected episode)
import { useState } from 'react'
//import episode data from data.js, rename is episodeData
import { episodes as episodeData } from "./data";
//import EpisodeList component 
import EpisodeList from "./components/EpisodeList";
//import EpisodeDetail component
import EpisodeDetail from "./components/EpisodeDetail";
//import css styles from App.css
import './App.css'

function App () {
  //episodes is static
  const [episodes] = useState(episodeData);
  //selectedEpisode holds the currently selected episode object;starts as null
  //setSelectedEpisode is the function to update it
  const [selectedEpisode, setSelectedEpisode] =useState(null);


  return (
    //App's UI; onSelect updates the selected episode; EpisodeDetail displays the details of selected episode or ameesage if none is selected
    <div className="app">
      <hi>Dark Echoes</hi>
      <div className="content">
        <EpisodeList
          episodes = {episodes}
          onSelect= {setSelectedEpisode}
          selectedId= {selectedEpisode?.id}
        />
        <EpisodeDetail episode={selectedEpisode}/>      
    </div>
  </div>
  );
}

export default App

import { episodes } from "../data";
//this component receives episodes (a list of all episodes) onSelcet (call fucntion to notifiy the parent when an episode is clicked) SelectId (ID of the selected episode for styling) 
function EpisodeList({ episodes, onSelect, selectedId }) {
    return (
      //.map to loop through each episode and rendera list; key={ep.id} uniquely tracks eact list item for React
        <ul className="episode-list">
            {episodes.map((ep) => (
                <li
                  key={ep.id}
                  className={ep.id === selectedId ? "selected": ""}
                  onClick={() => onSelect(ep)}
                >
                  {ep.name}
                </li>
            ))}    
        </ul>
   );
}

export default EpisodeList;
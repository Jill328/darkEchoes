function EpisodeDetail ({ episode}) {
    if (!episode) {
        return <div className="episode-detail">Select an episode to learn more.</div>;
            
    }

    return (
        <div className="episode-detail">
            <h2>
                Episode {episode.number}: {episode.name}
            </h2>
            <p>{episode.description}</p>
        </div>
    )
}
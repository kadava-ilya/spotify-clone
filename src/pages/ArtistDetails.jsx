import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { Error, Loader, RelatedSongs, DetailsHeader } from '../components'

import { useGetArtistDetailsQuery } from "../redux/services/shazamCore";

const ArtistDetails = () => {
  const { id: artistId } = useParams()
  const { activeSong, isPlaying } = useSelector(state => state.player)
  const { data: artistData, isFetching: isFetchingArtistDetails, error } = useGetArtistDetailsQuery(artistId)

  console.log(artistData)

  if (isFetchingArtistDetails) {
    return <Loader title="Loading artist details..." />
  }

  if (error) return <Error />

  return (
    <div className="flex flex-col">
      <DetailsHeader
        artistId={artistId}
        artistData={artistData}
      />

      <RelatedSongs
        data={Object.values(artistData?.songs)}
        artistId={artistData}
        isPlaying={isPlaying}
        activeSong={activeSong}
      />
    </div>
  )
}

export default ArtistDetails;

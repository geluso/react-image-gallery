import React, { useState } from 'react'

import LoadedImage from '../LoadedImage/LoadedImage'

export default function(props) {
    const [loadingState, setLoadingState] = useState({isLoading: true, isLoaded: false, isCancelled: false})

    function contents() {
        if (props.results.length === 0) {
            return <div>Enter a search term above!</div>
        }

        return (
            <div>
                {props.results.map((result, index) => {
                    return <LoadedImage key={index} handleOnClick={() => props.saveImage(result)} src={result.previewURL} />
                })}
            </div>
        ) 
    }

    return (
      <div>
        <h2>Search Results</h2>
        {contents()}
      </div>
    )
}
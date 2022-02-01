import React, { useState } from 'react'
import styled from 'styled-components'

import loading from './loading.gif'

const LOADING = Symbol("LOADING")
const LOADED = Symbol("LOADED")

const PlaceholderImage = () => <img src={loading} />
const HiddenImage = styled.img`
    display: none;
`

const ImageContainer = styled.div`
    display: inline-block;
    width: 150px;
    height: 150px;

    overflow-x: hidden;
    overflow-y: hidden;

    img {
        min-width: 100%;
        height: 100%;
    }
`

export default function LoadedImage(props) {
    const [status, setStatus] = useState(LOADING)

    function reveal() {
        if (props.preventDelay) {
            setStatus(LOADED)
        } else {
            // add an extra betwee 1 and 4 second delay
            setTimeout(() => setStatus(LOADED), 1000 + 3000 * Math.random())
        }
    }

    return (
        <ImageContainer>
            <HiddenImage src={props.src} onLoad={reveal} />
            {status === LOADING
                ? <PlaceholderImage />
                : <img onClick={props.handleOnClick} src={props.src} />
            }
        </ImageContainer>
    )
}
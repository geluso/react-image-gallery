import React, { useEffect, useState } from 'react'

const BASE_URL = "https://pixabay.com/api"

const IDLE = Symbol("IDLE")
const LOADING = Symbol("LOADING")
const LOADED = Symbol("LOADED")
const CANCELLED = Symbol("CANCELLED")

export default function(props) {
    const [loadingState, setLoadingState] = useState(IDLE)

    useEffect(() => {
        return () => {
            setLoadingState(CANCELLED)
        }
    }, [])

    function handleSubmit(ev) {
        ev.preventDefault()

        setLoadingState(LOADING)

        const query = ev.target.elements.query.value
        console.log(query)

        const params = new URLSearchParams({
            key: "25504697-913a64c9962e1a83faade4d24",
            q: query
        })

        const url = new URL(BASE_URL)
        url.search = params.toString()

        fetch(url)
        .then(res => res.json())
        .then(({hits}) => {
            // add more manual delay to see more loading effects
            setTimeout(() => {
                if (loadingState === CANCELLED) return
                setLoadingState(LOADED)
                props.submitResults(hits)
            }, 750)
        })
    }

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input name="query" />
          <button type="submit">Search</button>
        </form>
      </div>
    )
}
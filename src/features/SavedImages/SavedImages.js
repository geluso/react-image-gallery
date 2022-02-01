import LoadedImage from '../LoadedImage/LoadedImage'

export default function(props) {
    function contents() {
        if (props.images.length === 0) {
            return <div>No images saved yet.</div>
        }

        return (
            <div>
                {props.images.map((image, index) => {
                    return <LoadedImage key={index} handleOnClick={() => props.removeImage(image)} src={image.previewURL} preventDelay={true} />
                })}
            </div>
        ) 
    }

    return (
      <div>
        <h2>Saved Images</h2>
        {contents()}
      </div>
    )
}
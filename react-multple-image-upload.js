import React, { Component } from 'react';
import Dropzone from 'react-dropzone'

const ImageUploadMultiple = ()=>{
    const [acceptedFiles, setAcceptedFiles] = React.useState([]);
    // state = {
    //     acceptedFiles: []
    // }
    const onDrop = (files) => {
        console.log(files);
        // this.setState({ acceptedFiles: this.state.acceptedFiles.concat(acceptedFiles) });
        // acceptedFiles.push(files);
        // setAcceptedFiles([acceptedFiles].concat(files));
        setAcceptedFiles(acceptedFiles => acceptedFiles.concat(files))
    }

    const removeImage = (lastModified) => {
        // const removedImages = this.state.acceptedFiles.filter(image => image.lastModified !== lastModified);
         const removedImages = acceptedFiles.filter(image => image.lastModified !== lastModified);
        console.log(removedImages, lastModified);
        // setAcceptedFiles(removedImages);
        setAcceptedFiles(removedImages)
        // this.setState({ acceptedFiles: removedImages });
    }
console.log('arr', acceptedFiles);
        const maxSize = 1048576;
        return (
            <div className="text-center mt-5">
                <Dropzone
                    onDrop={onDrop}
                    accept="image/png, image/jpeg, image/gif"
                    minSize={0}
                    maxSize={maxSize}
                    multiple>
                    {({ getRootProps, getInputProps, isDragActive, isDragReject, rejectedFiles }) => {
                        const isFileTooLarge = rejectedFiles.length > 0 && rejectedFiles[0].size > maxSize;
                        return (
                            <div {...getRootProps()}>
                                <input {...getInputProps()} />
                                {!isDragActive && 'Click here or drop a file to upload!'}
                                {isDragActive && !isDragReject && "Drop it like it's hot!"}
                                {isDragReject && "File type not accepted, sorry!"}
                                {isFileTooLarge && (
                                    <div className="text-danger mt-2">
                                        File is too large.
                </div>
                                )}
                            </div>
                        )
                    }
                    }
                </Dropzone>
                <div>
                    <ul className="list-group mt-2" style={{display: 'block'}}>
                        {acceptedFiles.length > 0 && acceptedFiles.map(acceptedFile => (
                            <div style={{display: 'inline-block'}} className="list-group-item list-group-item-success" key={acceptedFile.lastModified}>
                                {acceptedFile.name}
                                <button onClick={() => removeImage(acceptedFile.lastModified)}>X</button>
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
        );
    // }
}

export default ImageUploadMultiple;

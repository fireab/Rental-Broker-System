import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginImageResize from "filepond-plugin-image-resize";
import React, { useRef, useState } from 'react';
import { FilePond, registerPlugin } from "react-filepond";

import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import "filepond/dist/filepond.min.css";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview, FilePondPluginImageResize);

const ImageDrop = ({setImages,images}) => {
    // const pondRef = useRef(null);
   
    const handleInit = () => {
		// console.log("FilePond instance has initialized", pondRef.current);
	};

	const handleUpdateFiles = (fileItems) => {
		console.log(fileItems);
		setImages(fileItems.map((fileItem) => fileItem.file));
	};

    return (
        <FilePond
				// ref={pondRef}
				
				files={images}
				allowMultiple={true}
				maxFiles={8}
				// allowMultiple={true}
				// server="/api/posts/addpost"
				// oninit={handleInit}
				onupdatefiles={handleUpdateFiles}
				labelTapToRetry="" 
				className="flex  items-center justify-center w-full h-full bg-gray-100 border-2 border-gray-300 border-dashed rounded-md"
			/>
    );
}

export default ImageDrop;

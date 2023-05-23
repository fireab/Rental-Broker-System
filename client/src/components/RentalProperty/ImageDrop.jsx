import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginImageResize from "filepond-plugin-image-resize";
import React, { useRef, useState } from 'react';
import { FilePond, registerPlugin } from "react-filepond";

import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import "filepond/dist/filepond.min.css";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview, FilePondPluginImageResize);

const ImageDrop = () => {
    const pondRef = useRef(null);
    const [files, setFiles] = useState([
	]);
    const handleInit = () => {
		console.log("FilePond instance has initialized", pondRef.current);
	};

	const handleUpdateFiles = (fileItems) => {
		setFiles(fileItems.map((fileItem) => fileItem.file));
	};

    return (
        <FilePond
				ref={pondRef}
				files={files}
				maxFiles={8}
				allowMultiple={true}
				server="/api"
				oninit={handleInit}
				onupdatefiles={handleUpdateFiles}
				className="flex  items-center justify-center w-full h-full bg-gray-100 border-2 border-gray-300 border-dashed rounded-md"
			/>
    );
}

export default ImageDrop;

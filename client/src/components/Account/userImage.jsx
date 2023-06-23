import axios from "axios";
import FilePondPluginFilePoster from "filepond-plugin-file-poster";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginImageCrop from "filepond-plugin-image-crop";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginImageResize from "filepond-plugin-image-resize";
import { useEffect, useRef, useState } from "react";
// npm i filepond-plugin-file-validate-type filepond-plugin-image-transform filepond-plugin-image-exif-orientation filepond-plugin-image-preview filepond-plugin-image-crop filepond-plugin-image-resize  filepond-plugin-image-edit --save
import { FilePond, registerPlugin } from "react-filepond";

import "filepond-plugin-file-poster/dist/filepond-plugin-file-poster.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import "filepond/dist/filepond.min.css";

registerPlugin(FilePondPluginFileValidateType, FilePondPluginImagePreview, FilePondPluginFilePoster, FilePondPluginImageCrop, FilePondPluginImageResize);
// a example to upload profile image with crop and resize feature and preview image before upload to server

function UserImage({username}) {
	let pondRef = useRef(null);
	const [files, setFiles] = useState([
		{
			source: "12345",
			options: {
				type: "local",
				file: {
					name: "my-file.png",
					size: 3001025,
					type: "image/*",
				},
				metadata: {
                    // cat image
					poster: `/api/user/profileimage/${username}`,
				},
			},
		},
	]);

    const handleInit = () => {};

	return (
		<div className="App">
			<FilePond
				oninit={handleInit}
				acceptedFileTypes={["image/png", "image/jpeg", "image/jpg"]}
				files={files}
				allowMultiple={false}
				allowImagePreview
				stylePanelLayout={"compact circle"}
				imagePreviewHeight={170}
				imageCropAspectRatio={"1:1"}
                allowPaste={false}
                allowDrop={false}
			
				allowBrowse={false}
				allowRevert={false}
			
				name="image"
			
				server="/api/user/profileimage"
				styleLoadIndicatorPosition={"center bottom"}
			
			/>
		</div>
	);
}

export default UserImage;

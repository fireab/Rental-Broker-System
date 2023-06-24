import React, { useEffect, useState } from "react";

import SkeletonPage from "../../../components/common/skeleton.page";
import PropertyCard from "../../../components/RentalProperty/PropertyCard";
import { useRentalPosts } from "../../../hooks/rentalPost";

const SavedPropertyList = () => {
	const { savedPosts, refetchSavedPosts, isLoadingSavedPosts, isFetchingSavedPosts } = useRentalPosts();
	useEffect(() => {
		refetchSavedPosts();
	}, [refetchSavedPosts]);
	const [navClick, setNavClick] = useState();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [navClick]);

	return (
		<div>
			<div className="min-h-screen">
				{isLoadingSavedPosts || isFetchingSavedPosts || !savedPosts ? (
					<SkeletonPage page="rentals" />
				) : savedPosts.length > 0 ? (
					<div className="grid grid-cols-2 gap-4 p-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
						{savedPosts &&
							savedPosts.map((post, index) => {
								return <PropertyCard saved={true} key={post.Posts.id} propertyImages={post.Posts.propertyImages} propertyTitle={post.Posts.propertyTitle} propertyPrice={post.Posts.propertyPrice} propertyType={post.Posts.propertyType} propertyDescription={post.Posts.propertyDescription} propertyContact={post.Posts.propertyContact} propertyRegion={post.Posts.propertyRegion} propertyCity={post.Posts.propertyCity} propertyStreet={post.Posts.propertyStreet} maxLeaseLengthValue={post.Posts.maxLeaseLengthValue} maxLeaseLengthType={post.Posts.maxLeaseLengthType} minLeaseLengthValue={post.Posts.minLeaseLengthValue} minLeaseLengthType={post.Posts.minLeaseLengthType} propertyLeaseTerm={post.Posts.propertyLeaseTerm} authorId={post.Posts.authorId} isAvailable={post.Posts.isAvailable} propertyQuantity={post.Posts.propertyQuantity} savedBy={post.Posts.savedBy} postId={post.Posts.id} />;
							})}
					</div>
				) : (
					<div className="h-full w-full ">
						<h1 className="!font-bold text-sm text-center">Sorry, There is no saved post</h1>
					</div>
				)}
			</div>
		</div>
	);
};

export default SavedPropertyList;

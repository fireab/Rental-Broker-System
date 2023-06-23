import React from "react";
import { useSelector } from "react-redux";

import PropertyCard from "../../components/RentalProperty/PropertyCard";
import { useRentalPosts } from "../../hooks/rentalPost";

const PropertyListPage = (props) => {

	
	const username = props.username? props.username : "user";
	const { userPosts, refetchUserPosts, isLoadingUserPosts, isFetchingUserPosts } = useRentalPosts(username);
	React.useEffect(() => {
		refetchUserPosts();
	}, [refetchUserPosts]);


	return (
		<div>
			<div className="min-h-screen">
				{isLoadingUserPosts || isFetchingUserPosts || !userPosts ? (
					<div className="h-full w-full flex justify-center items-center">Loading...</div>
				) : userPosts.length > 0 ? (
					<div className="grid grid-cols-2 gap-4 p-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
						{userPosts &&
							userPosts.map((post, index) => {
								return <PropertyCard key={post.id} propertyImages={post.propertyImages} propertyTitle={post.propertyTitle} propertyPrice={post.propertyPrice} propertyType={post.propertyType} propertyDescription={post.propertyDescription} propertyContact={post.propertyContact} propertyRegion={post.propertyRegion} propertyCity={post.propertyCity} propertyStreet={post.propertyStreet} maxLeaseLengthValue={post.maxLeaseLengthValue} maxLeaseLengthType={post.maxLeaseLengthType} minLeaseLengthValue={post.minLeaseLengthValue} minLeaseLengthType={post.minLeaseLengthType} propertyLeaseTerm={post.propertyLeaseTerm} authorId={post.authorId} isAvailable={post.isAvailable} propertyQuantity={post.propertyQuantity} savedBy={post.savedBy} postId={post.id} />;
							})}
					</div>
				) : (
					<div className="h-full w-full ">
						<h1 className="!font-bold text-sm text-center">There is no post</h1>
					</div>
				)}
			</div>
		</div>
	);
};

export default PropertyListPage;

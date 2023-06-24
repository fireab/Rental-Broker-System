import { Button, FormControl, FormLabel, RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack, Text } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import { ScrollRestoration, useLocation, useNavigation } from "react-router-dom";
import { Search } from "tabler-icons-react";

import PropertyCard from "../../components/RentalProperty/PropertyCard";
import { useRentalPosts } from "../../hooks/rentalPost";
import capitalize from "../../utils/Capitalize";
import { cities, Price_Type, regions } from "../../utils/list";
import NumberWithCommas from "../../utils/numberWithCommas";
import InputField from "./../../components/Authentication/InputField";
import SkeletonPage from "./../../components/common/skeleton.page";
import InputFieldSelect from "./../../components/RentalProperty/InputField.select";

const SearchResultsPage = () => {
	const location = useLocation();
	const [navClick, setNavClick] = React.useState();

	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, [navClick]);

	const [param, setParam] = useState({
		searchWord: location.state.search,
		propertyType: "",
		region: "",
		city: "",
		maxPrice: 2000000,
		minPrice: 100,
		priceType: "days",
	});
	const { searchedPosts, isRefetchingSearchedPosts, refetchSearchedPosts, isLoadingSearchedPosts, errorSearchedPosts } = useRentalPosts(param);

	React.useEffect(() => {
		refetchSearchedPosts();
	}, [refetchSearchedPosts]);

	const Property_Type = [
		{
			name: "House",
			value: "House",
		},
		{
			name: "Room",
			value: "Room",
		},
		{
			name: "Construction Material",
			value: "Construction Material",
		},
		{
			name: "Land",
			value: "Land",
		},
		{
			name: "Apartment",
			value: "Apartment",
		},
		{
			name: "Clothing",
			value: "Clothing",
		},
		{
			name: "Electronics",
			value: "Electronics",
		},
		{
			name: "Furniture",
			value: "Furniture",
		},
		{
			name: "Kitchen Utensils",
			value: "Kitchen Utensils",
		},
		{
			name: "Sports Equipment",
			value: "Sports Equipment",
		},
		{
			name: "Motorcycle",
			value: "Motorcycle",
		},
		{
			name: "Video Games",
			value: "Video Games",
		},
		{
			name: "Party Supplies",
			value: "Party Supplies",
		},
		{
			name: "Outdoor Equipment",
			value: "Outdoor Equipment",
		},
		{
			name: "Computer",
			value: "Computer",
		},

		// materials that can be rented

		{
			name: "Books",
			value: "Books",
		},
		{
			name: "Bicycle",
			value: "Bicycle",
		},
		{
			name: "Services",
			value: "Services",
		},
		{
			name: "Sports Equipment",
			value: "Sports Equipment",
		},
		{
			name: "Vehicle",
			value: "Vehicle",
		},
		{
			name: "Other",
			value: "Other",
		},
	];
	return (
		<div>
			<div className="m-4 z-10">
				<Formik
					initialValues={{
						searchWord: location.state.search,
						propertyType: "",
						region: "",
						city: "",
						maxPrice: 2000000,
						minPrice: 100,
						price: [100, 2000000],
					}}
					onSubmit={async (values) => {
						const { searchWord, propertyType, region, city, maxPrice, minPrice, priceType } = values;

						const filter = {
							searchWord,
							propertyType,
							region,
							city,
							maxPrice,
							minPrice,
							priceType,
						};
						await setParam(filter);
						// alert(JSON.stringify(param, null, 2));

						refetchSearchedPosts();
					}}
				>
					{(formik) => (
						<Form>
							<div className="flex flex-col ">
								<div className="w-full md:w-96 flex space-x-2 items-end">
									<InputField
										name="searchWord"
										label="Search"
										placeholder="Search"
										rightButton={
											<Button type="submit" className="!bg-blue-600">
												<div className="flex space-x-2 items-center text-white p-2">
													<Search />
													<span>Search</span>
												</div>
											</Button>
										}
									/>
								</div>
								<div className="flex flex-col md:flex-row flex-1 items-center p-x-4 p-2">
									<InputFieldSelect size="sm" name="propertyType" label="Property Type" options={Property_Type} placeholder="Select Property Type" />
									<InputFieldSelect
										size="sm"
										name="region"
										label="Region"
										options={regions}
										placeholder="Select Region"
										onChange={(e) => {
											formik.setFieldValue("region", e.target.value);
											formik.setFieldValue("city", e.target.value == "" ? "" : cities[e.target.value][0].value);
										}}
									/>
									<InputFieldSelect size="sm" name="city" label="City" options={cities[formik.values.propertyRegion] ? cities[formik.values.propertyRegion] : Object.values(cities).reduce((acc, curr) => acc.concat(curr), [])} placeholder="Select City" />
									<FormControl className="px-10 py-4">
										<FormLabel fontSize={"sm"}>
											<span className="whitespace-nowrap">{capitalize("Choose the Price Range")}</span>
										</FormLabel>
										<RangeSlider
											onChange={(values) => {
												formik.setFieldValue("maxPrice", values[1]);
												formik.setFieldValue("minPrice", values[0]);
											}}
											min={100}
											max={20000}
											step={50}
											name="price"
											colorScheme="pink"
											defaultValue={[100, 20000]}
										>
											<RangeSliderTrack>
												<RangeSliderFilledTrack />
											</RangeSliderTrack>
											<RangeSliderThumb boxSize={4} index={0} />
											<RangeSliderThumb boxSize={4} index={1} />
										</RangeSlider>
										<div>
											<Text mt={4} className="text-sm font-bold">
												<span className="font-medium">Price range:</span>
												{NumberWithCommas(formik.values.minPrice)} birr - {NumberWithCommas(formik.values.maxPrice)} birr
											</Text>
										</div>
									</FormControl>
									<InputFieldSelect size="sm" name="propertyPrice" label="property Price" options={Price_Type} />
								</div>
							</div>
						</Form>
					)}
				</Formik>
			</div>
			{isLoadingSearchedPosts || isRefetchingSearchedPosts || !searchedPosts ? (
				<SkeletonPage page="rentals" />
			) : searchedPosts.length === 0 ? (
				<div className="flex flex-col items-center justify-center h-[50vh]">
					<div className="text-2xl font-bold">No results found</div>
					<div className="text-lg font-bold">Try different keywords</div>
				</div>
			) : (
				<div className="grid grid-cols-2 gap-4 p-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
					{searchedPosts?.map((post, index) => (
						<PropertyCard key={post.id} propertyImages={post.propertyImages} propertyTitle={post.propertyTitle} propertyPrice={post.propertyPrice} propertyType={post.propertyType} propertyDescription={post.propertyDescription} propertyContact={post.propertyContact} propertyRegion={post.propertyRegion} propertyCity={post.propertyCity} propertyStreet={post.propertyStreet} maxLeaseLengthValue={post.maxLeaseLengthValue} maxLeaseLengthType={post.maxLeaseLengthType} minLeaseLengthValue={post.minLeaseLengthValue} minLeaseLengthType={post.minLeaseLengthType} propertyLeaseTerm={post.propertyLeaseTerm} authorId={post.authorId} isAvailable={post.isAvailable} propertyQuantity={post.propertyQuantity} savedBy={post.savedBy} postId={post.id} />
					))}
				</div>
			)}
		</div>
	);
};

export default SearchResultsPage;

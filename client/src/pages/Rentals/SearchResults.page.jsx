import { Button, FormControl, FormLabel, RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack, Text } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import { useLocation, useNavigation } from "react-router-dom";
import { Search } from "tabler-icons-react";

import PropertyCard from "../../components/RentalProperty/PropertyCard";
import { useRentalPosts } from "../../hooks/rentalPost";
import capitalize from "../../utils/Capitalize";
import { cities, Price_Type, regions } from "../../utils/list";
import NumberWithCommas from "../../utils/numberWithCommas";
import InputField from "./../../components/Authentication/InputField";
import InputFieldSelect from "./../../components/RentalProperty/InputField.select";

const SearchResultsPage = () => {
	const location = useLocation();

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
	// const { searchWord, Property_Type, region, city, minPrice, maxPrice } = location.state;

	// if (isLoadingSearchedPosts || refetchSearchedPosts || !searchedPosts) {
	// 	return <div>Loading...</div>;
	// }

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
	window.scrollTo(0, 0);
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
						console.log(values);
					}}
				>
					{(formik) => (
						<Form>
							<div className="flex flex-col ">
								<div className="w-full md:w-96 flex space-x-2 items-end">
									<InputField name="searchWord" label="Search" placeholder="Search" />
									<Button type="submit" className="!bg-blue-600">
										<div className="flex space-x-2 items-center text-white p-2">
											<Search />
											<span>Search</span>
										</div>
									</Button>
								</div>
								<div className="flex flex-col md:flex-row flex-1 items-center space-x-4 p-x-4 p-2">
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
									<FormControl>
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
									<InputFieldSelect size="sm" name="propertyPrice" label="property Price" options={Price_Type} placeholder="Pricing type" />
								</div>
							</div>
						</Form>
					)}
				</Formik>
			</div>
			{!(isLoadingSearchedPosts || refetchSearchedPosts || !searchedPosts) ? (
				<h1>Loading</h1>
			) : (
				<div className="grid grid-cols-2 gap-4 p-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
					{searchedPosts?.map((post, index) => (
						<PropertyCard key={post.id} propertyImages={post.propertyImages} propertyTitle={post.propertyTitle} propertyPrice={post.propertyPrice} propertyType={post.propertyType} propertyDescription={post.propertyDescription} propertyContact={post.propertyContact} propertyRegion={post.propertyRegion} propertyCity={post.propertyCity} propertyStreet={post.propertyStreet} maxLeaseLengthValue={post.maxLeaseLengthValue} maxLeaseLengthType={post.maxLeaseLengthType} minLeaseLengthValue={post.minLeaseLengthValue} minLeaseLengthType={post.minLeaseLengthType} propertyLeaseTerm={post.propertyLeaseTerm} authorId={post.authorId} isAvailable={post.isAvailable} propertyQuantity={post.propertyQuantity} savedBy={post.savedBy} postId={post.id} />
					))}
					{/* <PropertyCard image="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" title="Property 1" price="1000" />  */}
				</div>
			)}
		</div>
	);
};

export default SearchResultsPage;

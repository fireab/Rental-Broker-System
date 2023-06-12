import React from "react";
import InputFieldSelect from "./../../components/RentalProperty/InputField.select";
import { Form, Formik } from "formik";
import { cities, regions } from "../../utils/list";
import { Button, FormControl, FormLabel, RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack } from "@chakra-ui/react";
import capitalize from "../../utils/Capitalize";
import PropertyCard from "../../components/RentalProperty/PropertyCard";
import InputField from "./../../components/Authentication/InputField";
import { Search } from "tabler-icons-react";

const SearchResultsPage = () => {
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
						searchWord: "",
						Property_Type: "",
						region: "",
						city: "",
						minPrice: "",
						maxPrice: "",
					}}
					onSubmit={(values) => {
						console.log(values);
					}}
				>
					{(formik) => (
						<Form>
							<div className="flex flex-col ">
								<div className="w-full md:w-96 flex space-x-2 items-end">
									<InputField name="searchWord" label="Search" placeholder="Search" />
									<Button className="!bg-blue-600">
										<div className="flex space-x-2 items-center text-white p-2">
											<Search />
											<span>Search</span>
										</div>
									</Button>
								</div>
								<div className="flex flex-col md:flex-row flex-1 items-center space-x-4 p-x-4 p-2">
									<InputFieldSelect size="sm" name="Property_Type" label="Property Type" options={Property_Type} placeholder="Select Property Type" />
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
										<RangeSlider aria-label={["min", "max"]} colorScheme="pink" defaultValue={[0, 100]}>
											<RangeSliderTrack>
												<RangeSliderFilledTrack />
											</RangeSliderTrack>
											<RangeSliderThumb boxSize={4} index={0} />
											<RangeSliderThumb boxSize={4} index={1} />
										</RangeSlider>
									</FormControl>
								</div>
							</div>
						</Form>
					)}
				</Formik>
			</div>
			<div className="">
				<div className="grid grid-cols-2 gap-4 p-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
					<PropertyCard image="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" title="Property 1" price="1000" />
					<PropertyCard image="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" title="Property 1" price="1000" />
					<PropertyCard image="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" title="Property 1" price="1000" />
					<PropertyCard image="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" title="Property 1" price="1000" />
					<PropertyCard image="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" title="Property 1" price="1000" />
					<PropertyCard image="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" title="Property 1" price="1000" />
					<PropertyCard image="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" title="Property 1" price="1000" />
					<PropertyCard image="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" title="Property 1" price="1000" />
					<PropertyCard image="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" title="Property 1" price="1000" />
					<PropertyCard image="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" title="Property 1" price="1000" />
					<PropertyCard image="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" title="Property 1" price="1000" />
					<PropertyCard image="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" title="Property 1" price="1000" />
					<PropertyCard image="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" title="Property 1" price="1000" />
					<PropertyCard image="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" title="Property 1" price="1000" />
					<PropertyCard image="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" title="Property 1" price="1000" />
					<PropertyCard image="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" title="Property 1" price="1000" />
					<PropertyCard image="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" title="Property 1" price="1000" />
					<PropertyCard image="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" title="Property 1" price="1000" />
				</div>
			</div>
		</div>
	);
};

export default SearchResultsPage;

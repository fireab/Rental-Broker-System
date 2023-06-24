import { Button, Card, CardBody, Image, Link, Skeleton } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { ScrollRestoration } from "react-router-dom";

import SkeletonPage from "../../../components/common/skeleton.page";
import { useUser } from "../../../hooks/user";
import FollowCard from "./../../../components/Account/follow.card";

const FollowersPage = () => {
	const [navClick, setNavClick] = React.useState();

	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, [navClick]);
	const { followers, refetchFollowers, isFollowersLoading, isFollowersFetching } = useUser("user");
	useEffect(() => {
		refetchFollowers();
	}, [refetchFollowers]);

	return (
		<div className="flex justify-center p-2">
			<div className="flex flex-col w-2/3 space-y-4">
				{isFollowersLoading || isFollowersFetching || !followers ? (
					[1, 2, 3, 4, 5].map((item, index) => (
						<div key={index} direction={{ base: "column", sm: "row" }} overflow="hidden">
							<Skeleton className="flex ">
								<Skeleton objectFit="cover" overflow="hidden" rounded={"full"} className="h-24 w-24" src="https://cdn.britannica.com/84/73184-050-05ED59CB/Sunflower-field-Fargo-North-Dakota.jpg" alt="" />
							</Skeleton>
							<Skeleton className="flex justify-between ">
								<div className="flex flex-col justify-between items-start">
									<div>
										<span className="font-bold text-xl">Dilamo Wondimu</span>
										<div className="flex items-center whitespace-nowrap">
											<Skeleton className="text-xs whitespace-pre">4.5 </Skeleton>

											<Skeleton className="text-xs whitespace-pre ">(20) </Skeleton>

											<Skeleton className="text-xs whitespace-pre ">| </Skeleton>

											<Skeleton className="text-xs whitespace-pre ">Add Review </Skeleton>

											<Skeleton className="text-xs whitespace-pre ">| </Skeleton>

											<Skeleton className="text-xs whitespace-pre ">See Reviews </Skeleton>

											<Skeleton className="text-xs whitespace-pre ">| </Skeleton>

											<Skeleton className="text-xs whitespace-pre ">See Reviews </Skeleton>

											<Skeleton className="text-xs whitespace-pre ">| </Skeleton>

											<Skeleton className="text-xs whitespace-pre ">See Reviews </Skeleton>

											<Skeleton className="text-xs whitespace-pre ">| </Skeleton>

											<Skeleton className="text-xs whitespace-pre ">See Reviews </Skeleton>

											<Skeleton className="text-xs whitespace-pre ">| </Skeleton>

											<Skeleton className="text-xs whitespace-pre ">See Reviews </Skeleton>

											<Skeleton className="text-xs whitespace-pre ">| </Skeleton>
										</div>
									</div>
									<Link>
										<div>
											<Skeleton className="hover:text-blue-600">View Profile</Skeleton>
										</div>
									</Link>
								</div>
								<div className="flex flex-col justify-center">
									<Skeleton colorScheme="blue">Follow</Skeleton>
								</div>
							</Skeleton>
						</div>
					))
				) : followers.followers.length > 0 ? (
					<div className="min-h-[50vh]">
						{followers.followers.map((user, index) => (
							<FollowCard key={user.id} user={user} />
						))}
					</div>
				) : (
					<div className="flex flex-col items-center justify-center min-h-[50vh]">
						<div className="text-2xl font-bold">No Followers</div>
						<div className="text-lg font-bold">
							<Link href="/rentals" className="text-blue-600 hover:underline">
								Go to Home
							</Link>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default FollowersPage;

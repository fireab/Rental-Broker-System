import { Box, Card, Skeleton, Stack } from "@chakra-ui/react";
import React from "react";

const SkeletonCard = () => {
	return (
		<Card className=" !shadow-xs overflow-clip" rounded={"2xl"} backgroundColor={"whiteAlpha.500"}>
			<Box rounded={"2xl"}>
				<Stack>
					<Skeleton className="h-40 rounded-2xl" />
					<div className="p-2 flex flex-col space-y-1">
						<div className="flex justify-between">
							<Skeleton className="h-3 p-1" width={"60%"} />
							<Skeleton className="h-3 p-1" width={"20%"} />
						</div>
						<Skeleton className="h-3" width={"30%"} />
						<Skeleton className="h-3" width={"30%"} />
						<Skeleton className="h-3" width={"50%"} />
					</div>
				</Stack>
			</Box>
		</Card>
	);
};

export default SkeletonCard;

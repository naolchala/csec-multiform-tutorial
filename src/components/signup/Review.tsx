import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useSignupInfo } from "@/store/signupInfo";
import { useStepper } from "@/store/stepperCount";
import { toast } from "sonner";

export const ReviewInformation = () => {
	const { back } = useStepper();
	const { credentials, personalInformation, handleInformation } =
		useSignupInfo();
	return (
		<Card>
			<CardHeader>
				<CardTitle>Review Your Information</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="flex flex-col gap-1">
					<h3 className="font-semibold">Personal Information</h3>
					<p>
						Name: {personalInformation.firstName}{" "}
						{personalInformation.lastName}
					</p>
					<p>email: {personalInformation.email} </p>
					<p>phone Number: {personalInformation.phoneNumber} </p>
				</div>
				<hr className="my-3"></hr>
				<div className="flex flex-col gap-1">
					<h3 className="font-semibold">Handle Information</h3>
					<p>leetcode: {handleInformation.leetcode} </p>
					<p>codeforces: {handleInformation.codeforces} </p>
					<p>github: {handleInformation.github} </p>
				</div>
				<Button
					className="w-full mt-10"
					onClick={() => {
						toast("Submitting to the backend");
					}}
				>
					Submit Application
				</Button>
				<Button
					onClick={back}
					className="w-full mt-2"
					variant={"outline"}
				>
					Go Back
				</Button>
			</CardContent>
		</Card>
	);
};

import FormInput from "@/components/FormInput/FormInput";
import { handleValidation } from "@/components/signup/signup.validation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useSignupInfo } from "@/store/signupInfo";
import { useStepper } from "@/store/stepperCount";
import { useFormik } from "formik";

const HandlesInformation = () => {
	const { setHandleInformation, handleInformation } = useSignupInfo();
	const { next, back } = useStepper();
	const formik = useFormik({
		initialValues: {
			leetcode: handleInformation.leetcode,
			codeforces: handleInformation.codeforces,
			github: handleInformation.github,
		},
		validationSchema: handleValidation,
		onSubmit: (values) => {
			setHandleInformation(values);
			next();
		},
	});

	return (
		<Card>
			<CardHeader>
				<CardTitle>Handle Information</CardTitle>
			</CardHeader>
			<CardContent>
				<form onSubmit={formik.handleSubmit}>
					<div className="flex flex-col gap-6">
						<FormInput
							formik={formik}
							name="leetcode"
							label="Leetcode"
						/>
						<FormInput
							formik={formik}
							name="codeforces"
							label="Codeforces"
						/>
						<FormInput
							formik={formik}
							name="github"
							label="Github"
						/>
						<Button type="submit" className="w-full mt-10">
							Continue
						</Button>

						<Button
							type="button"
							onClick={back}
							className="w-full"
							variant={"outline"}
						>
							Back
						</Button>
					</div>
				</form>
			</CardContent>
		</Card>
	);
};

export default HandlesInformation;

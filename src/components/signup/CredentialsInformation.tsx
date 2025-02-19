import FormInput from "@/components/FormInput/FormInput";
import { credentialsValidation } from "@/components/signup/signup.validation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useSignupInfo } from "@/store/signupInfo";
import { useStepper } from "@/store/stepperCount";
import { useFormik } from "formik";

const CredentialsInformation = () => {
	const { credentials, setCredentialsInformation } = useSignupInfo();
	const { next, back } = useStepper();
	const formik = useFormik({
		initialValues: credentials,
		validationSchema: credentialsValidation,
		onSubmit: (values) => {
			setCredentialsInformation(values);
			next();
		},
	});

	return (
		<Card>
			<CardHeader>
				<CardTitle>Credential Information</CardTitle>
			</CardHeader>
			<CardContent>
				<form onSubmit={formik.handleSubmit}>
					<div className="flex flex-col gap-6">
						<FormInput
							formik={formik}
							name="username"
							label="Username"
						/>
						<FormInput
							formik={formik}
							name="password"
							type="password"
						/>
						<FormInput
							formik={formik}
							name="confirmPassword"
							type="password"
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

export default CredentialsInformation;

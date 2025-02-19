import FormInput from "@/components/FormInput/FormInput";
import { personalInfoValidation } from "@/components/signup/signup.validation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useSignupInfo } from "@/store/signupInfo";
import { useStepper } from "@/store/stepperCount";
import { useFormik } from "formik";

const PersonalInformation = () => {
	const { personalInformation, setPersonalInformation } = useSignupInfo();
	const { next } = useStepper();
	const formik = useFormik({
		initialValues: personalInformation,
		onSubmit: (values) => {
			setPersonalInformation(values);
			next();
		},
		validationSchema: personalInfoValidation,
	});
	const { handleSubmit } = formik;

	return (
		<Card>
			<CardHeader>
				<CardTitle>Personal Information</CardTitle>
			</CardHeader>
			<CardContent>
				<form onSubmit={handleSubmit}>
					<div className="flex flex-col gap-6">
						<div className="flex flex-row gap-3">
							<FormInput
								formik={formik}
								name="firstName"
								type="text"
							/>
							<FormInput formik={formik} name="lastName" />
						</div>
						<FormInput formik={formik} name="email" type="email" />
						<FormInput formik={formik} name="phoneNumber" />
						<Button type="submit" className="w-full mt-10">
							Continue
						</Button>
					</div>
				</form>
			</CardContent>
		</Card>
	);
};

export default PersonalInformation;

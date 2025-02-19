import CredentialsInformation from "@/components/signup/CredentialsInformation";
import HandlesInformation from "@/components/signup/HandlesInformation";
import PersonalInformation from "@/components/signup/PersonalInformations";
import { ReviewInformation } from "@/components/signup/Review";
import { cn } from "@/lib/utils";
import { useStepper } from "@/store/stepperCount";

const steps = [
	<PersonalInformation />,
	<HandlesInformation />,
	<CredentialsInformation />,
	<ReviewInformation />,
];

function App() {
	const { count, next, back } = useStepper();
	return (
		<div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10">
			<div className="w-full max-w-md">
				<div className={cn("flex flex-col gap-6", "")}>
					<div className="flex flex-col gap-6">
						<div className="flex flex-col items-center gap-2">
							<a
								href="#"
								className="flex flex-col items-center gap-2 font-medium"
							>
								<div className="flex h-8 w-8 items-center justify-center rounded-md"></div>
								<span className="sr-only">Acme Inc.</span>
							</a>
							<h1 className="text-xl font-bold">
								Welcome to CSEC ASTU.
							</h1>
							<div className="text-center text-sm">
								Please fill out the following information
							</div>
						</div>
					</div>
					{steps[count]}
				</div>
			</div>
		</div>
	);
}

export default App;

import React, { useState, useCallback } from "react";
import {
  Stepper,
  Step,
  Button,
  Typography,
  Card,
  Avatar,
} from "@material-tailwind/react";
import logo from "../assets/logo.png";
import {
  CogIcon,
  UserIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/outline";
import ApplicationSummary from "./ApplicationSummary";
import ApplicantPersonalInfo from "../components/ApplicantPersonalInfo";
import ApplicantReferenceForm from "../components/ApplicantReferenceForm";
import ApplicantAcademicForm from "../components/ApplicantAcademicForm";

const ApplicationForm = () => {
  const [references, setreferences] = useState(
    { pastors_reference:[], employer_references:[] }
  );
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);
  const [displaySummary, setdisplaySummary] = useState(false);

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);
  const handleDisplaySummary = () => setdisplaySummary(true);

   
  const handleReferences = (reference_data) => {
  console.log(reference_data);

    setreferences(prevState => {
      if (reference_data.pastors_reference) {
       const data = references.pastors_reference.concat(reference_data.pastors_reference)
        return {
          ...prevState,
          pastors_reference:data
        }
      }else{
        const data = references.employer_references.concat(reference_data.employer_references)
        return {
          ...prevState,
          employer_references:data
        }
      }
      // return new Map(prevState).set(name, checked);
    });
  };


  return (
    <div className="m-3">
      <Card className=" border-black border-t-2  h-auto m-auto sm:w-full lg:w-4/5 md:w-4/5">
        <img src={logo} alt="logo-ct" className="w-16 h-16 mx-auto py-2" />
        <hr />
        <Typography className="font-bold mt-5 p-3 text-lg ">APPLICATION FORM</Typography>
        <div className="w-[90%] mx-auto py-2 px-4">
          {!displaySummary && (
            <Stepper
              activeStep={activeStep}
              isLastStep={(value) => setIsLastStep(value)}
              isFirstStep={(value) => setIsFirstStep(value)}
            >
              <Step onClick={() => setActiveStep(0)}>
                <UserIcon className="h-5 w-5" />
                <div className="absolute -bottom-[4.5rem] w-max text-center hidden lg:block md:block sm:hidden">
                  <Typography
                    variant="h7"
                    color={activeStep === 0 ? "blue" : "blue-gray"}
                  >
                    Personal Details
                  </Typography>
                </div>
              </Step>
              <Step onClick={() => setActiveStep(1)}>
                <CogIcon className="h-5 w-5" />
                <div className="absolute -bottom-[4.5rem] w-max text-center hidden lg:block md:block sm:hidden ">
                  <Typography
                    variant="h7"
                    color={activeStep === 1 ? "blue" : "blue-gray"}
                  >
                    References
                  </Typography>
                </div>
              </Step>
              <Step onClick={() => setActiveStep(2)}>
                <BuildingLibraryIcon className="h-5 w-5" />
                <div className="absolute -bottom-[4.5rem] w-max text-center hidden lg:block md:block sm:hidden">
                  <Typography
                    variant="h7"
                    color={activeStep === 2 ? "blue" : "blue-gray"}
                  >
                    Academic Information
                  </Typography>
                </div>
              </Step>
            </Stepper>
          )}
          <div className="mt-20 mx-auto  ">
            {(displaySummary && (
              //<div className="flex flex-col justify-between absolute top-40 w-[450px] md:static mb-40 rounded-2xl mx-8 px-16 pt-10 pb-16 bg-white md:px-0 md:py-5 md:mx-28 md:w-100 md:my-2">
              <>
                <ApplicationSummary />
              </>
              //</div>
            )) || (
              // <div className="flex flex-col justify-between absolute top-40 w-[450px] md:static mb-40 rounded-2xl mx-8 px-16 pt-10 pb-16 bg-white md:px-0 md:py-5 md:mx-28 md:w-100 md:my-2">
              <>
                <div>
                  {
                    (activeStep === 0 && (
                      <ApplicantPersonalInfo
                      // onChangeYourInfo={changeYourInfo}
                      // yourInfo={yourInfo}
                      // currentStep={stepNumber}
                      // isEmpty={isEmpty}
                      />
                    )) ||
                      (activeStep === 1 && (
                        <ApplicantReferenceForm
                        onAddReferences={handleReferences}
                        // onChangeYourInfo={changeYourInfo}
                        // yourInfo={yourInfo}
                        // currentStep={stepNumber}
                        // isEmpty={isEmpty}
                        />
                      )) ||
                      (activeStep === 2 && (
                        <ApplicantAcademicForm
                        
                        />
                      ))
                    //    ||
                    //   (stepNumber === 4 && (
                    //     <Summary
                    //       selectedPlan={plan}
                    //       selectedAddons={addons}
                    //       currentStep={stepNumber}
                    //       planDuration={planDuration}
                    //       planDurationName={planDurationName}
                    //       onChangeClick={changeClick}
                    //     />
                    //   ))
                  }
                </div>
                <div className="flex justify-between fixed px-16 bottom-0 left-0 w-full bg-white p-5 md:static md:p-0  items-center w-[700px]]">
                  {/* {stepNumber != 1 && (
              <div
                onClick={prevStep}
                className={`font-medium text-[#9699ab] cursor-pointer transition duration-100 hover:text-[#02295a] ${goBackVisible}`}
              >
                Go back
              </div>
            )} */}
                </div>
              </>
              // </div>
            )}
          </div>
          <div className="mt-32 flex justify-between">
            <Button onClick={handlePrev} disabled={isFirstStep}>
              Prev
            </Button>
            {isLastStep ? (
              <Button onClick={handleDisplaySummary}>Application summary</Button>
            ) : (
              <Button onClick={handleNext} disabled={isLastStep}>
                Next
              </Button>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ApplicationForm;

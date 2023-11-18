import { ReactNode, useState } from 'react';

export function UseForm(steps: ReactNode[]) {
  const [currentStep, setCurrentStep] = useState(0);

  function changeStep(i: number, e?: any) {
    if (e) e.preventDefault();

    if (i < 0 || i >= steps.length) return;

    setCurrentStep(i);
  }

  return {
    currentStep,
    currentComponnent: steps[currentStep],
    changeStep,
    isLastStep: currentStep + 1 === steps.length ? true : false,
    isFirstStep: currentStep === 0 ? true : false,
  };
}

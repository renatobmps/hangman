'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import './loading.css'
import Step1 from '../media/step_1.svg';
import Step2 from '../media/step_2.svg';
import Step3 from '../media/step_3.svg';
import Step4 from '../media/step_4.svg';
import Step5 from '../media/step_5.svg';
import Step6 from '../media/step_6.svg';
import Step7 from '../media/step_7.svg';
import Step8 from '../media/step_8.svg';
import { ILoading } from "../hints.interfaces";
import { DEFAULT_LOADING_DELAY } from "../hints.constants";

const Loading = ({ delay_ms = DEFAULT_LOADING_DELAY }: ILoading) => {
  const [step, setStep] = useState(Step1);

  useEffect(() => {
    setTimeout(() => {
      setStep(step => {
        if (step.src === Step1.src) return Step2;
        if (step.src === Step2.src) return Step3;
        if (step.src === Step3.src) return Step4;
        if (step.src === Step4.src) return Step5;
        if (step.src === Step5.src) return Step6;
        if (step.src === Step6.src) return Step7;
        if (step.src === Step7.src) return Step8;

        return Step1;
      });
    }, delay_ms);
  }, [step]);

  return (
    <Image alt="loading" className="hints__loading" height={step.height} src={step.src} width={step.width} />
  )
}

export default Loading;

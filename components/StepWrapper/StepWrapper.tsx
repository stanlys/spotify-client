import { Card, Container, Grid, Step, StepLabel, Stepper } from "@mui/material";
import React, { ReactElement } from "react";

interface StepWrapperProps {
  activeStep: number;
  children: ReactElement;
}

const steps = ["Track information", "Upload Poster", "Upload Track"];

const StepWrapper: React.FC<StepWrapperProps> = ({ activeStep, children }) => {
  return (
    <Container>
      <Stepper activeStep={activeStep}>
        {steps.map((step, index) => (
          <Step key={index} completed={activeStep > index}>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Grid container justifyContent={"center"} sx={{ mt: 7, height: 300 }}>
        <Card sx={{ width: "100%" }}>{children}</Card>
      </Grid>
    </Container>
  );
};

export default StepWrapper;

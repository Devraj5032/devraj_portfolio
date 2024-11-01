import React from "react";

import Zoom from "react-reveal/Zoom";
import Tilt from "react-tilt";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import StepIcon from "@mui/material/StepIcon";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";

export default function Experience() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Container
      maxWidth={false}
      sx={{
        minHeight: "100vh",
        background: "#101010",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        px: "15%",
        py:4
      }}
    >
      <Zoom>
        <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
          <Typography
            sx={{
              fontFamily: "'Fredoka One', sans-serif",
              fontSize: "53px",
              color: "#84fff1",
            }}
          >
            Experience
          </Typography>
          <Typography
            sx={{
              fontFamily: "'Fredoka One', sans-serif",
              fontSize: "53px",
              color: "#fff",
            }}
          ></Typography>
        </Stack>
      </Zoom>
      <Zoom>
        <Box sx={{ maxWidth: 400 }}>
          <Stepper orientation="vertical">
            {steps.map((step, index) => (
              <Step index={-1} active={true} key={step.label} >
                <StepLabel sx={{fontFamily: "'Open Sans', sans-serif",}} icon={<WorkOutlineIcon />}>{step.label}
                <Typography sx={{color:"#9D9D9D",fontSize:"12px",fontFamily: "'Open Sans', sans-serif",fontWeight:"bold"}}>{step.duration}</Typography>
                <Typography sx={{color:"#9D9D9D",fontSize:"12px",fontFamily: "'Open Sans', sans-serif",fontWeight:"bold"}}>{step.company} - ({step.location})</Typography>
                </StepLabel>
                <StepContent >
                  <Typography sx={{color:"#9D9D9D",fontSize:"14px",fontFamily: "'Open Sans', sans-serif",}}>
                    {step.description}
                    <br />
                    {step.description2}
                  </Typography>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length && (
            <Paper square elevation={0} sx={{ p: 3 }}>
              <Typography>
                All steps completed - you&apos;re finished
              </Typography>
              <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                Reset
              </Button>
            </Paper>
          )}
        </Box>
      </Zoom>
    </Container>
  );
}

const steps = [
  {
    label: "Full Stack Developer",
    company: "Green Quest Consulting",
    duration: "01/2024 – present",
    location: "India (Remote)",
    description:
      "• Made scalable backend using TypeScript and MySQL.",
    description2:
      "• Responsible for making frontend using Next.js and Tailwind CSS",
  },
  {
    label: "Web Developer",
    company: "The Opus Way",
    duration: "05/2021 – 11/2023",
    location: "kolkata, India",
    description:
      "• Responsible for managing backend and frontend infrastructure built on Express, React.js and MongoDB at its core.",
    description2:
      "• Was leading a team of developers and was responsible for quality code.",
  },
  {
    label: "Web Developer Intern",
    company: "Rudrayati Technologies",
    duration: "09/2020 – 04/2021",
    location: "Jamshedpur, India",
    description:
      "• Developed the entire frontend (React.js and Material UI) for the organization's web application, ensuring a smooth and user-friendly interface.",
    description2:
      "• Collaborated with backend developers to integrate frontend components, streamlining the development process.",
  },
];

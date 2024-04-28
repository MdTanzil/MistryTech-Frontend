import { Button, Typography } from "@mui/material";
import Img from "../../assets/images/meeting.jpg";

const MeetingRequest = () => {
  return (
    <div className="container mx-auto mt-10 mb-10 px-4 sm:px-6 lg:px-8 min-h-[70vh] flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="md:order-2">
          <img src={Img} alt="" className="w-full h-[400px] p-4 rounded-xl" />
        </div>
        <div className="text-center md:text-left">
          <Typography
            variant="h3"
            className="text-center barlow  text-5xl"
            color="black"
            gutterBottom
            sx={{ fontWeight: 500, fontSize: 30 }}
          >
            We are waiting for you!
          </Typography>
          <Typography
            variant="subtitle1"
            className="text-justify barlow"
            color="gray"
            gutterBottom
          >
            We are a leading provider of high-quality office furniture and are
            excited to help you create a professional and comfortable work
            environment for your team. If you would like to schedule a meeting
            to discuss your furniture needs in more detail, please fill out the
            form below. Our team will get back to you as soon as possible to
            schedule a consultation. We look forward to the opportunity to work
            with you and create a space that meets the unique needs of your
            business. Thank you for considering us for your office furniture
            needs.
          </Typography>

          <Button
            variant="contained"
            size="large"
            sx={{
              marginTop: 2,
            }}
          >
            Request A Meeting
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MeetingRequest;

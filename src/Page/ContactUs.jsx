import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { MuiTelInput } from "mui-tel-input";
import { useState } from "react";
import { FaFacebookSquare, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { SlSocialPintarest } from "react-icons/sl";
const ContactUs = () => {
  const [value, setValue] = useState("");
  const handleChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <div className="container mx-auto my-10">
      <Typography
        variant="h5"
        className="text-center barlow font-bold"
        color="black"
      >
        {" "}
        Contact us{" "}
      </Typography>
      <Typography
        variant="subtitle1"
        className="text-center barlow"
        color="gray"
      >
        {" "}
        If you’ve got great products your making or looking to work with us then
        drop us a line.
      </Typography>
      <Container className="grid mt-8 grid-cols-12 gap-4 min-h-[80vh]">
        {/* First Column (Order 2 on Mobile) */}
        <div className="lg:col-span-8 lg:order-1 col-span-12">
          <form action="">
            <div>
              <Box component="div" className="flex mt-5 justify-between">
                <TextField
                  id="name"
                  label="Name"
                  className="border-none outline-none w-1/2"
                  variant="filled"
                  sx={{ mr: 2 }}
                  name="name"
                />
                <TextField
                  id="email"
                  label="Email"
                  className="border-none outline-none w-1/2"
                  variant="filled"
                />
              </Box>
            </div>
            <div className="mt-5">
              <MuiTelInput
                fullWidth
                value={value}
                label="Phone Number"
                onChange={handleChange}
                placeholder="017....."
              />
            </div>
            <div className="mt-5">
              <TextareaAutosize
                aria-label="minimum height"
                minRows={8}
                placeholder="Message"
                className="w-full p-2"
                sx={{
                  border: "2px solid black", // Add border
                  borderRadius: "4px", // Optional: Add border radius for rounded corners
                }}
              />
            </div>
            <div className="flex items-center my-4">
              <Checkbox />
              <Typography variant="subtitle1">
                I agree to the terms and conditions.
              </Typography>
            </div>
            <div>
              <Button variant="contained" disabled>
                Submit Now
              </Button>
            </div>
          </form>
        </div>
        {/* Second Column (Order 1 on Mobile) */}
        <div className="lg:col-span-4 lg:order-2 col-span-12 p-1 lg:p-4 md:space-y-0 lg:space-y-5 flex  justify-between lg:justify-center flex-col items-start lg:flex-row gap-4">
          <div className="flex-grow">
            <Typography variant="h6" color="initial">
              Address
            </Typography>
            <Typography variant="subtitle1" color="initial">
              House 25, Road 3/E, Sector 09, Uttara 1230 Dhaka, Dhaka Division,
              Bangladesh
            </Typography>
          </div>
          <div>
            <Typography variant="h6" color="initial">
              Information
            </Typography>
            <Typography variant="subtitle1" color="initial">
              Call: 01999099000
              <span style={{ display: "block" }}>
                Email: info@mistrytech.com.bd
              </span>
            </Typography>
            <div className="mt-5">
              <Typography variant="h6" color="initial">
                Business Hours
              </Typography>
              <Typography variant="subtitle1" color="initial">
                Everyday 09:00 AM to 09.00 PM
              </Typography>
            </div>
          </div>

          <div>
            <Typography variant="h6" color="initial">
              Social Media
            </Typography>
            <Stack direction="row" className="">
              <div className="flex  justify-center">
                <FaLinkedin className="text-2xl m-1 scale-125" />
                <FaFacebookSquare className="text-2xl m-1 scale-125" />
                <FaInstagram className="text-2xl m-1 scale-125" />
                <SlSocialPintarest className="text-2xl m-1 scale-125" />
                <FaTiktok className="text-2xl m-1 scale-125" />
              </div>
            </Stack>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default ContactUs;

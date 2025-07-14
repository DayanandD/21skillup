import { Typography, Divider, Box } from "@mui/material";

const Footer = () => (
  <Box sx={{ mt: 4 }}>
    <Divider />
    <Typography variant="body2" align="center" color="text.secondary" sx={{ mt: 2 }}>
      © {new Date().getFullYear()} Dayanand's LMS. All rights reserved.
    </Typography>
  </Box>
);

export default Footer;

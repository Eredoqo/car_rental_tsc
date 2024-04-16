import { Avatar, Box, Button, Card, Typography } from "@mui/material";

export default function ProfileCard() {
  return (
    <>
      <Card sx={{ borderRadius: "20px" }}>
        <Box
          sx={{
            mt: 2,
            display: "flex",
            flexDirection: "column",
            padding: "20px",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            width: "280px",
          }}
        >
          <Avatar
            sx={{ width: "85px", height: "85px" }}
            src="https://randomuser.me/api/portraits/men/1.jpg"
          />
          <Typography variant="h6">Admin Name</Typography>
          <Typography variant="subtitle1" color="grey">
            adminemail@test.com
          </Typography>
          <Button
            sx={{
              mt: 1,
              width: "100%",
              border: " 1px solid grey",
              borderRadius: "10px",
            }}
            variant="outlined"
          >
            <Typography sx={{ p: 1, fontSize: "14px", color: "grey" }}>
              Edit Profile
            </Typography>
          </Button>
        </Box>
      </Card>
    </>
  );
}

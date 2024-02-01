import React from "react";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { Link } from "@mui/material";
import { Stack } from "@mui/material";
import { InputLabel } from "@mui/material";
import { Input } from "@mui/material";
import { Box } from "@mui/material";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import CloseIcon from "@mui/icons-material/Close";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
export default function Modal() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fff",
        rowGap: "24px",
        padding: "20px",
        width: "100%",
        lineHeight: "normal",
        boxSizing: "border-box",
        maxWidth: "500px",
        boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.15)",
        borderRadius: "8px",
      }}
    >
      <Button
        disableRipple
        style={{
          backgroundColor: "transparent",
          "&:hover": {
            backgroundColor: "transparent",
          },
        }}
        sx={{
          padding: "0px",
          backgroundColor: "transparent",
          alignSelf: "flex-end",
        }}
      >
        <CloseIcon />
      </Button>
      <Typography
        sx={{ "@media(max-width:479px)": { fontSize: "18px" } }}
        variant="h6"
      >
        Create Organization
      </Typography>
      <Stack
        sx={{
          alignItems: "flex-start",
          marginTop: "20px",
          "@media(max-width:479px)": { marginTop: "14px" },
        }}
        gap="20px"
        direction="column"
      >
        <Stack gap="20px" direction="row">
          <Button
            style={{
              backgroundColor: "#999999ff",
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
            sx={{
              height: "fit-content",
              "@media(max-width:479px)": { transform: "scale(0.7)" },
            }}
          >
            <DriveFolderUploadIcon />
          </Button>
          <Stack
            sx={{ "@media(max-width:479px)": { rowGap: "4px" } }}
            gap="10"
            direction="column"
          >
            <Typography
              sx={{ "@media(max-width:479px)": { fontSize: "14px" } }}
              variant="subtitle"
            >
              Profile image
            </Typography>
            <Link
              sx={{
                color: "#6C47FF",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: "600",
                "@media(max-width:479px)": { fontSize: "12px" },
              }}
              variant="subtitle"
              href="#"
              target="_self"
            >
              Upload image
            </Link>
          </Stack>
        </Stack>
        <Stack gap="20px" direction="column" width="100%">
          <Stack gap="10px" direction="column">
            <InputLabel
              sx={{
                fontWeight: "600",
                "@media(max-width:479px)": { fontSize: "14px" },
              }}
              name="label"
              htmlFor="name"
            >
              Organization name
            </InputLabel>
            <Input
              sx={{
                border: "1px solid #999999",
                borderRadius: "4px",
                width: "100%",
                "@media(max-width:479px)": { padding: "7px", fontSize: "14px" },
              }}
              type="text"
              name="input"
              id="name"
              disableUnderline
            ></Input>
          </Stack>
          <Stack
            sx={{ alignItems: "flex-start" }}
            gap="10px"
            direction="column"
          >
            <Box sx={{ opacity: "0.9" }}>
              <InputLabel
                sx={{
                  fontWeight: "600",
                  "@media(max-width:479px)": { fontSize: "14px" },
                }}
                name="label"
                htmlFor="url"
              >
                Slug URL
              </InputLabel>
              <ContactSupportIcon />
            </Box>
            <Input
              sx={{
                border: "1px solid #999999",
                borderRadius: "4px",
                width: "100%",

                "@media(max-width:479px)": { padding: "7px", fontSize: "14px" },
              }}
              disableUnderline
              type="text"
              name="input"
              id="url"
            ></Input>
          </Stack>
          <Button
            style={{
              backgroundColor: "#6C47FF",
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
            sx={{
              padding: "8px",
              letterSpacing: "0.8px",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "600",
              lineHeight: "normal",
              alignSelf: "flex-end",
              fontSize: "15px",
              color: "#fff",
              "@media(max-width:479px)": {
                alignSelf: "center",
                transform: "scale(0.9)",
              },
            }}
          >
            CREATE ORGANIZATION
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}

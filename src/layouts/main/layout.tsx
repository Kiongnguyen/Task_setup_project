import Box from "@mui/material/Box";

type Props = {
  children: React.ReactNode;
};

export default function MainLayout({children}: Props){
  return(
    <Box>
      {children}
    </Box>
  )
}
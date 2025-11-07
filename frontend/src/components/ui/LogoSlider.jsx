import { Box } from '@mui/material'

// Opcion opcionalas de logos e iconos para 
const logos = [
    "public/logos/css.svg",
    "public/logos/javascript.svg",
    "public/logos/react.svg"
]

const LogoSlider = () => {
    return (
        <Box 
            sx={{
                overflow: "hidden",
                whiteSpace: "nowrap",
                width: "100%",
                py: 2,
                position: "relative",
                backgroundColor: "transparent",
            }}
        >

        <Box
            sx={{
                display: "inline-flex",
                animation: "scroll 20s linear infinite",
                "@keyframes scroll": {
                "0%": { transform: "translateX(0)" },
                "100%": { transform: "translateX(-50%)" },
                },
            }}
        >

        {[...logos, ...logos].map((src, i) => (
          <Box
            key={i}
            component="img"
            src={src}
            alt={`Logo ${i}`}
            sx={{
              height: 40,
              mx: 4,
              opacity: 0.8,
              transition: "opacity 0.3s",
              "&:hover": { opacity: 1 },
            }}
          />
        ))}
      </Box>
    </Box>
    )
}


export default LogoSlider;
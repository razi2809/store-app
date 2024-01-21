import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IProduct } from "../../@types/product";
import { IOrder } from "../../@types/order";
type Categories = "product-information" | "settings";
interface Props {
  categories: Categories[];
  activeSection: Categories;
  setActiveSection: React.Dispatch<React.SetStateAction<Categories>>;
}

const CategoriesDisplayForProduct: React.FC<Props> = ({
  categories,
  activeSection,
  setActiveSection,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        bgcolor: "secondary.main",
        p: 2,
        position: "sticky",
        top: "4em",
        zIndex: 3,
      }}
    >
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        {categories.map((category) => {
          return (
            <Box key={category} sx={{ display: "flex" }}>
              <Link to={`#${category}`} style={{ textDecoration: "none" }}>
                <Box
                  sx={{
                    mr: 2,
                    borderRadius: 20,
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    position: "relative",
                    cursor: "pointer",
                  }}
                  onClick={() => setActiveSection(category)}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: "black",
                      p: 1,
                      ":hover": {
                        color: "white",
                      },
                    }}
                  >
                    {category}
                  </Typography>
                  {activeSection === category && (
                    <motion.span
                      style={{
                        position: "absolute",
                        top: 50,
                        height: "2px",
                        width: "100%",
                        backgroundColor: "black",
                      }}
                      layoutId="activeSectionProfilPage"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    >
                      {" "}
                    </motion.span>
                  )}
                </Box>
              </Link>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default CategoriesDisplayForProduct;

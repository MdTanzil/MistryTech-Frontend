import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import {
  Box,
  Collapse,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const categories = [
  {
    name: "Office Furniture",
    label: "Office Furniture",
    route: "/office-furniture",
    subcategories: [
      {
        name: "CEO Desk",
        label: "CEO Desk",
        route: "/office-furniture/ceo-desk",
      },
      {
        name: "Chair",
        label: "Chair",
        route: "/office-furniture/ceo-desk/chair",
        subcategories: [],
      },
      {
        name: "Coffee Table",
        label: "Coffee Table",
        route: "/office-furniture/ceo-desk/coffee-table",
        subcategories: [],
      },
      {
        name: "Conference Table",
        label: "Conference Table",
        route: "/office-furniture/ceo-desk/conference-table",
        subcategories: [],
      },
      {
        name: "Executive Desk",
        label: "Executive Desk",
        route: "/office-furniture/ceo-desk/executive-desk",
        subcategories: [],
      },
      {
        name: "Reception Desk",
        label: "Reception Desk",
        route: "/office-furniture/ceo-desk/reception-desk",
        subcategories: [],
      },
      {
        name: "Sofa",
        label: "Sofa",
        route: "/office-furniture/ceo-desk/sofa",
        subcategories: [],
      },
      {
        name: "Storage",
        label: "Storage",
        route: "/office-furniture/ceo-desk/storage",
        subcategories: [],
      },
      {
        name: "Workstation",
        label: "Workstation",
        route: "/office-furniture/ceo-desk/workstation",
        subcategories: [],
      },
    ],
  },
  {
    name: "Garments Furniture",
    label: "Garments Furniture",
    route: "/garments-furniture",
    subcategories: [
      {
        name: "Display Rack",
        label: "Display Rack",
        route: "/garments-furniture/display-rack",
        subcategories: [],
      },
      {
        name: "Storage Rack",
        label: "Storage Rack",
        route: "/garments-furniture/storage-rack",
        subcategories: [],
      },
      {
        name: "Trolley",
        label: "Trolley",
        route: "/garments-furniture/trolley",
        subcategories: [],
      },
    ],
  },
  {
    name: "Home Furniture",
    label: "Home Furniture",
    route: "/home-furniture",
    subcategories: [
      {
        name: "Beds",
        label: "Beds",
        route: "/home-furniture/beds",
        subcategories: [],
      },
      {
        name: "Wardrobe",
        label: "Wardrobe",
        route: "/home-furniture/wardrobe",
        subcategories: [],
      },
      {
        name: "Dressing Table",
        label: "Dressing Table",
        route: "/home-furniture/dressing-table",
        subcategories: [],
      },
      {
        name: "Dining Table",
        label: "Dining Table",
        route: "/home-furniture/dining-table",
        subcategories: [],
      },
      {
        name: "Study Table",
        label: "Study Table",
        route: "/home-furniture/study-table",
        subcategories: [],
      },
      {
        name: "Coffee Table",
        label: "Coffee Table",
        route: "/home-furniture/coffee-table",
        subcategories: [],
      },
      {
        name: "Sofa",
        label: "Sofa",
        route: "/home-furniture/sofa",
        subcategories: [],
      },
      {
        name: "Showcase/TV unit",
        label: "Showcase/TV unit",
        route: "/home-furniture/showcase-tv-unit",
        subcategories: [],
      },
      {
        name: "Chair",
        label: "Chair",
        route: "/home-furniture/chair",
        subcategories: [],
      },
    ],
  },
  {
    name: "School Furniture",
    label: "School Furniture",
    route: "/school-furniture",
    subcategories: [
      {
        name: "Bench Set",
        label: "Bench Set",
        route: "/school-furniture/bench-set",
        subcategories: [],
      },
      {
        name: "Desk",
        label: "Desk",
        route: "/school-furniture/desk",
        subcategories: [],
      },
      {
        name: "Teacher's Desk",
        label: "Teacher's Desk",
        route: "/school-furniture/teacher-desk",
        subcategories: [],
      },
      {
        name: "Chair",
        label: "Chair",
        route: "/school-furniture/chair",
        subcategories: [],
      },
      {
        name: "Storage",
        label: "Storage",
        route: "/school-furniture/storage",
        subcategories: [],
      },
    ],
  },
  {
    name: "Restaurant Furniture",
    label: "Restaurant Furniture",
    route: "/restaurant-furniture",
    subcategories: [
      {
        name: "Sofa",
        label: "Sofa",
        route: "/restaurant-furniture/sofa",
        subcategories: [],
      },
      {
        name: "Chair",
        label: "Chair",
        route: "/restaurant-furniture/chair",
        subcategories: [],
      },
      {
        name: "Table",
        label: "Table",
        route: "/restaurant-furniture/table",
        subcategories: [],
      },
      {
        name: "Deli Table",
        label: "Deli Table",
        route: "/restaurant-furniture/deli-table",
        subcategories: [],
      },
    ],
  },
];

const NavMenu = () => {
  const [openCategories, setOpenCategories] = useState({});

  const toggleCategory = (index, event) => {
    // Preventing the event from propagating to the parent ListItemButton
    event.stopPropagation();

    setOpenCategories((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <Box sx={{ width: 250 }}>
      <List>
        {categories.map((category, index) => (
          <React.Fragment key={index}>
            <ListItemButton onClick={(event) => toggleCategory(index, event)}>
              <ListItemText
                primary={category.label}
                className={openCategories[index] ? `text-secondary rounded-md` : ``}
              />
              {openCategories[index] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openCategories[index]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {category.subcategories.map((subcategory, subIndex) => (
                  <ListItemButton
                    key={subIndex}
                    sx={{ pl: 4 }}
                    component={RouterLink}
                    to={subcategory.route}
                  >
                    <ListItemText
                      className="transition duration-700 hover:ml-2"
                      primary={subcategory.label}
                    />
                  </ListItemButton>
                ))}
              </List>
            </Collapse>
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default NavMenu;

//Aadithya - Yasir - Shabanya - Ashwanth - Tech Titans

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Collapse from "@mui/material/Collapse";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Icon from "@mui/material/Icon";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";

// Custom styles for the sidenavItem
import { item, itemIcon, itemText, itemIconBox } from "examples/Sidenav/styles/sidenavItem";

// Argon Dashboard 2 MUI context
import { useArgonController } from "context";

function SidenavItem({ icon, name, active, open, ...rest }) {
  const [controller] = useArgonController();
  const { miniSidenav, darkSidenav, sidenavColor } = controller;

  return (
    <>
      <ListItem component="li">
        <ArgonBox
          {...rest}
          sx={(theme) => item(theme, { active, darkSidenav, sidenavColor, miniSidenav })}
        >
          <ListItemIcon sx={(theme) => itemIconBox(theme, { active, darkSidenav, sidenavColor })}>
            {typeof icon === "string" ? (
              <Icon sx={(theme) => itemIcon(theme, { active })}>{icon}</Icon>
            ) : (
              icon
            )}
          </ListItemIcon>

          <ListItemText
            primary={name}
            sx={(theme) => itemText(theme, { miniSidenav, darkSidenav, active })}
          />
        </ArgonBox>
      </ListItem>
    </>
  );
}

// Setting default values for the props of SidenavItem
SidenavItem.defaultProps = {
  color: "info",
  active: false,
  open: false,
};

// Typechecking props for the SidenavItem
SidenavItem.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  icon: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  active: PropTypes.bool,
  open: PropTypes.bool,
};

export default SidenavItem;

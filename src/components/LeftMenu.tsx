import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import ResizeBar from "./ResizeBar";

export default function LeftMenu() {
  const [menuWidth, setMenuWidth] = useState(150);
  const onMousedown = () => {
    const startDragging = (ev: MouseEvent) => {
      setMenuWidth(ev.clientX);
    };
    const stopDragging = () => {
      document.removeEventListener("mousemove", startDragging);
      document.removeEventListener("mouseup", stopDragging);
    };
    document.addEventListener("mousemove", startDragging);
    document.addEventListener("mouseup", stopDragging);
  };

  return (
    <List
      sx={{
        width: menuWidth,
        height: "100%",
        bgcolor: "background.paper",
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="Menu One" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Menu Two" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Menu Three" />
      </ListItemButton>
      <ResizeBar on_mousedown={onMousedown} className="right-0" />
    </List>
  );
}

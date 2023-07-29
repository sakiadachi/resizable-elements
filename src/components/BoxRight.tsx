import Box from "@mui/material/Box";
import { useState } from "react";
import ResizeBar from "./ResizeBar";
import { List, ListItem, ListItemText } from "@mui/material";
import React from "react";

export default function BoxRight() {
  const [menuWidth, setMenuWidth] = useState(300);
  const onMousedown = () => {
    const startDragging = (ev: MouseEvent) => {
      setMenuWidth(window.innerWidth - ev.clientX);
    };
    const stopDragging = () => {
      document.removeEventListener("mousemove", startDragging);
      document.removeEventListener("mouseup", stopDragging);
    };
    document.addEventListener("mousemove", startDragging);
    document.addEventListener("mouseup", stopDragging);
  };

  function generate(element: React.ReactElement) {
    return [0, 1, 2].map((value) =>
      React.cloneElement(element, {
        key: value,
      })
    );
  }

  return (
    <Box sx={{ width: menuWidth, position: "relative" }}>
      <List>
        {generate(
          <ListItem>
            <ListItemText primary="Item" />
          </ListItem>
        )}
      </List>
      <ResizeBar on_mousedown={onMousedown} className="left-0" />
    </Box>
  );
}

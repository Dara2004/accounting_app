import {
  ButtonBase,
  ClickAwayListener,
  Grow,
  MenuList,
  Paper,
  Popper,
} from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import { useRouter } from "next/router";
import React from "react";

export interface DropDownMenuItem {
  href: string;
  text: string;
}

interface DropDownMenuProps {
  menuItems: DropDownMenuItem[];
  title: string;
  reportActive: Function;
}

export function DropDownMenu(props: DropDownMenuProps) {
  const router = useRouter();

  const handleToggle = () => {
    props.reportActive(false);
    setOpen((prevOpen) => !prevOpen);
  };

  const menuItems = props.menuItems.map(
    (menuItem: DropDownMenuItem, index: number) => {
      return (
        <MenuItem
          key={index}
          onClick={() => {
            handleToggle();
            router.push(menuItem.href);
          }}
        >
          {menuItem.text}
        </MenuItem>
      );
    }
  );
  const [open, setOpen] = React.useState(false);

  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleClose = (event: React.MouseEvent<EventTarget>) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <>
      <ButtonBase
        className={open ? "btnBaseClicked" : ""}
        ref={anchorRef}
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <Typography className={open ? "menuBtnClicked" : "menuBtnNotClicked"}>
          {props.title}
        </Typography>
      </ButtonBase>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper
              elevation={3}
              style={{
                backgroundColor: "#5DCBAF",
                color: "white",
              }}
            >
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="menu-list-grow"
                  onKeyDown={handleListKeyDown}
                >
                  {menuItems}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
}

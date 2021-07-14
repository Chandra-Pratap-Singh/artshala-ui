import { createStyles, makeStyles } from "@material-ui/core";
import React from "react";

type Props = {
  size?: "sm" | "md" | "lg";
};
// props.size === "lg" ? "80%" : props.size === "md" ? "60%" : "600px";

const useStyle = makeStyles((theme) =>
  createStyles({
    root: (props: Props) => ({
      [theme.breakpoints.down("md")]: {
        width: "100%",
        padding: theme.spacing(1),
      },
      [theme.breakpoints.between("md", "lg")]: {
        width:
          props.size === "lg" ? "80%" : props.size === "md" ? "60%" : "600px",
        padding: theme.spacing(2),
      },
      [theme.breakpoints.between("lg", "xl")]: {
        width:
          props.size === "lg"
            ? "60%"
            : props.size === "md"
            ? "960px"
            : "600px",
        maxWidth: "1500px",
        padding: theme.spacing(3),
      },
    }),
  })
);

// props.size === "lg" ? "60%" : props.size === "md" ? "1280px" : "600px",
const ResponsiveWidth: React.FC<Props> = ({ children, size = "lg" }) => {
  const classes = useStyle({ size });
  return <div className={classes.root}>{children}</div>;
};

export default ResponsiveWidth;

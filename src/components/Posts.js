import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { SocialIcon } from "react-social-icons";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function ImgMediaCard({
  image,
  title,
  description,
  href1,
  href,
}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Coding"
          height="140"
          image={image}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body1" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <SocialIcon
          url={href1}
          className="mr-4"
          target="_blank"
          fgColor="#fff"
          style={{ height: 35, width: 35 }}
        />
        <Button href={href} size="small" color="primary">
          Heroku Closed: Press GitHub Icon to left
        </Button>
      </CardActions>
    </Card>
  );
}

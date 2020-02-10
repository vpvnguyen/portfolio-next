import React from 'react';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

export default function ExampleCard() {
    // project expand descriton
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            <Card className="root">
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" className="avatar">
                            R
          </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="Vincent's awesome project 1"
                    subheader={Date()}
                />
                <CardMedia
                    className="media"
                    image="/static/images/cards/paella.jpg"
                    title="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        This shall be my project description
        </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">

                        <FavoriteIcon onClick={favorite} />

                    </IconButton>
                    <IconButton aria-label="share">

                        <ShareIcon onClick={share} />

                    </IconButton>
                    <IconButton
                        className={clsx("expand", {
                            ["expandOpen"]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>more:</Typography>
                        <Typography paragraph>
                            submenu
          </Typography>
                        <Typography>
                            submenu footer
          </Typography>
                    </CardContent>
                </Collapse>
            </Card>
            <style jsx>{`
              root: {
                max-width: 345;
              },
              media: {
                height: 0;
                padding-top: '56.25%';
              },
              expand: {
                transform: 'rotate(0deg)';
                margin-left: 'auto';
                transition: theme.transitions.create('transform', {
                  duration: theme.transitions.duration.shortest,
                });
              },
              expandOpen: {
                transform: 'rotate(180deg)';
              },
              avatar: {
                background-color: red[500 ];
              },
        `}</style>
        </>
    );
};

const favorite = () => {
    alert('favorite project')
};

const share = () => {
    alert('share me')
}
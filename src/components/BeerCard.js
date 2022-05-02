import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function BeerCard({image, title,description}) {
  return (
    <Card sx={{ maxWidth: 450, height: 550}}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
      <CardMedia
        style={{
            width: "auto",
            maxHeight: "200px",
            display: "inline-flex",
            }}
        component="img"
        // height="800"
        image={image}
        alt="green iguana"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
            {description}
        </Typography>
      </CardContent>

    </Card>
  )
}

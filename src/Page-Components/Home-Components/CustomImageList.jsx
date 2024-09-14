import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

const itemData = [
  {
    img: 'https://images.pexels.com/photos/3861463/pexels-photo-3861463.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    title: 'Arjun Sharma',
    author: 'Software Engineer at NASA',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.pexels.com/photos/3861463/pexels-photo-3861463.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    title: 'Sneha Gupta',
    author: 'Data Scientist at Google',
  },
  {
    img: 'https://images.pexels.com/photos/3861463/pexels-photo-3861463.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    title: 'Rajesh Kumar',
    author: 'Product Manager at Microsoft',
  },
  {
    img: 'https://images.unsplash.com/photo-1523908511403-7fc7b25592f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmVzaW9uYWxzfGVufDB8fDB8fHww',
    title: 'Priya Verma',
    author: 'UX Designer at Zomato',
    cols: 2,
  },
  {
    img: 'https://images.pexels.com/photos/1467074/pexels-photo-1467074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    title: 'Amitabh Singh',
    author: 'System Analyst at Flipkart',
    cols: 2,
  },
  {
    img: 'https://images.pexels.com/photos/1181404/pexels-photo-1181404.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    title: 'Lakshmi Nair',
    author: 'Network Engineer',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.pexels.com/photos/3861463/pexels-photo-3861463.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    title: 'Manoj Patel',
    author: 'Database Administrator',
  },
  {
    img: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    title: 'Kavita Rao',
    author: 'DevOps Engineer',
  },
  {
    img: 'https://images.pexels.com/photos/3861463/pexels-photo-3861463.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    title: 'Suresh Iyer',
    author: 'Cyber Security Analyst',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.pexels.com/photos/3183199/pexels-photo-3183199.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    title: 'Pooja Desai',
    author: 'Technical Support Specialist',
  },
  {
    img: 'https://images.pexels.com/photos/3861463/pexels-photo-3861463.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    title: 'Vikas Mehta',
    author: 'Cloud Architect',
  },
  {
    img: 'https://images.pexels.com/photos/3183199/pexels-photo-3183199.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    title: 'Neha Agrawal',
    author: 'IT Consultant',
    cols: 2,
  },
];

export default function TitlebarImageList() {
  return (
    <ImageList sx={{ width: 500, height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
        {/* <ListSubheader component="div">December</ListSubheader> */}
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}


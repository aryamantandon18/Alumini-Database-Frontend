
import React from 'react';
import CardComponent from './CardComponent';
import LandingPage from './LandingPage';

const albums = [
  {
    id: '1',
    imageUrl: 'https://vaave.s3.amazonaws.com/album_photos/851f5ac9941d720844d143ed9cfcf60a_6b651b68d450b4f9e9a7a101c1a032ae_thumb.jpeg',
    title: 'Farewell 2022',
    date: '5 photos',
  },
  {
    id: '2',
    imageUrl: 'https://vaave.s3.amazonaws.com/album_photos/851f5ac9941d720844d143ed9cfcf60a_9836c504f7cbc04624fe0a58a94d17c8_thumb.jpeg',
    title: 'Alumni Meet 22',
    date: '8 photos',
  },
  // {
  //   id: '3',
  //   imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
  //   title: 'Mentorship session by Raj Mehta',
  //   date: '5 photos',
  // },
  // {
  //   id: '4',
  //   imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
  //   title: 'UI/UX Review Check',
  //   date: '8 photos',
  // },
  // Add more album objects with unique ids and photos arrays here
];

export default function Albums() {
  return (
    <div>
    <LandingPage/>
    <div className="max-w-7xl mx-auto grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {albums.map((album) => (
        <CardComponent key={album.id} {...album} />
      ))}
    </div>
    </div>
  );
}

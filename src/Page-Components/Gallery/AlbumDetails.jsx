import React, { useState } from 'react';

import { useParams } from 'react-router-dom';
import LandingPage from './LandingPage';
import Modal from 'react-modal';


const albums = [
  {
    id: '1',
    imageUrl: 'https://vaave.s3.amazonaws.com/album_photos/851f5ac9941d720844d143ed9cfcf60a_7d13e50503cafe759315c685831e1bf7_thumb.jpeg',
    title: 'Alumni Reuniun 24',
    date: '5 photos',
    photos: [
      'https://vaave.s3.amazonaws.com/album_photos/851f5ac9941d720844d143ed9cfcf60a_1a4416fe45651d8a380266ff55dd1eaf_thumb.jpeg',
      'https://vaave.s3.amazonaws.com/album_photos/851f5ac9941d720844d143ed9cfcf60a_de02ffdff1236a0944a39ca0159b8f6d_thumb.jpeg',
      'https://vaave.s3.amazonaws.com/album_photos/851f5ac9941d720844d143ed9cfcf60a_444a28a49e5052017aab4dd9e641d869_thumb.jpeg',
      'https://vaave.s3.amazonaws.com/album_photos/851f5ac9941d720844d143ed9cfcf60a_6f5c5392b9aa1cfa5639ed14a9834d5b_thumb.jpeg',
      'https://vaave.s3.amazonaws.com/album_photos/851f5ac9941d720844d143ed9cfcf60a_c5b6372ee39fe9873256b2bce5b83e1b_thumb.jpeg',
    ],
  },
  {
    id: '2',
    imageUrl: 'https://images.unsplash.com/photo-1565372529359-bf8b5c8bb5d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
    title: 'Alumni reunion 22',
    date: '8 photos',
    photos: [
      'https://vaave.s3.amazonaws.com/album_photos/851f5ac9941d720844d143ed9cfcf60a_0d6e5b6bb11eab7230237b8538b69f88_thumb.jpeg',
      'https://vaave.s3.amazonaws.com/album_photos/851f5ac9941d720844d143ed9cfcf60a_9836c504f7cbc04624fe0a58a94d17c8_thumb.jpeg',
      'https://vaave.s3.amazonaws.com/album_photos/851f5ac9941d720844d143ed9cfcf60a_3c2212d22b296dffa63cbfd952d140a0_thumb.jpeg',
      'https://vaave.s3.amazonaws.com/album_photos/851f5ac9941d720844d143ed9cfcf60a_cef1fdd1625535562c50e4f98505f879_thumb.jpeg',
      'https://vaave.s3.amazonaws.com/album_photos/851f5ac9941d720844d143ed9cfcf60a_9f6703df103b631d8fe2044e91cf8156_thumb.jpeg',
      'https://vaave.s3.amazonaws.com/album_photos/851f5ac9941d720844d143ed9cfcf60a_c0153a57134dcab0da3ab9fb44956cd7_thumb.jpeg',
      'https://vaave.s3.amazonaws.com/album_photos/851f5ac9941d720844d143ed9cfcf60a_bd37d915ef3b45ec97369a3ca6821d53_thumb.jpeg',
      'https://vaave.s3.amazonaws.com/album_photos/851f5ac9941d720844d143ed9cfcf60a_ee9fee6ddf4c321cd0ef76e92154c3cb_thumb.jpeg',
    ],
  },
  // {
  //   id: '3',
  //   imageUrl: 'https://images.unsplash.com/photo-1503424886302-f6e042ea3ea8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
  //   title: 'Mentorship session by Raj Mehta',
  //   date: '5 photos ',
  //   photos: [
  //     'https://images.unsplash.com/photo-1551218808-94e220e084d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
  //     'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
  //     'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
  //     'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
  //     'https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
  //   ],
  // },
  // {
  //   id: '4',
  //   imageUrl: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
  //   title: 'Inauguration ceremony 2023',
  //   date: '10 photos',
  //   photos: [
  //     'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
  //     'https://images.unsplash.com/photo-1551218808-94e220e084d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
  //     'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
  //     'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
  //     'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
  //     'https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
  //     'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
  //     'https://images.unsplash.com/photo-1551218808-94e220e084d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
  //     'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
  //     'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
  //   ],
  // },
  // Add more album objects with unique ids and photos arrays here
];

// export default function AlbumDetails() {
//     const { id } = useParams();
//     const album = albums.find((album) => album.id === id);
  
//     if (!album) {
//       return <div>Album not found</div>;
//     }
//     return (
//         <div>
//           <LandingPage /> {/* Include the LandingPage component */}
//           <div className="max-w-7xl mx-auto py-8">
//             <h1 className="text-3xl font-bold mb-4">{album.title}</h1>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//               {album.photos.map((photoUrl, index) => (
//                 <img
//                   key={index}
//                   src={photoUrl}
//                   alt={`${album.title} ${index + 1}`}
//                   className="w-full h-auto object-cover"
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       );
//     }
Modal.setAppElement('#root'); // Set the root element for accessibility

export default function AlbumDetails() {
    const { id } = useParams();
    const album = albums.find((album) => album.id === id);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (photoUrl) => {
        setSelectedImage(photoUrl);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedImage(null);
    };

    if (!album) {
        return <div>Album not found</div>;
    }

    return (
        <div>
            <LandingPage /> {/* Include the LandingPage component */}
            <div className="max-w-7xl mx-auto py-8">
                <h1 className="text-3xl font-bold mb-4">{album.title}</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {album.photos.map((photoUrl, index) => (
                        <img
                            key={index}
                            src={photoUrl}
                            alt={`${album.title} ${index + 1}`}
                            className="w-full h-auto object-cover cursor-pointer"
                            onClick={() => openModal(photoUrl)}
                        />
                    ))}
                </div>
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Image Modal"
                className="fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-75"
                overlayClassName="fixed inset-0 bg-black bg-opacity-75"
            >
                {selectedImage && (
                    <div className="relative bg-white p-4 rounded shadow-lg">
                        <button
                            onClick={closeModal}
                            className="absolute top-0 right-0 m-2 text-black bg-gray-200 rounded-full p-1"
                        >
                            &times;
                        </button>
                        <img src={selectedImage} alt="Selected" className="max-w-full max-h-screen" />
                    </div>
                )}
            </Modal>
        </div>
    );
}


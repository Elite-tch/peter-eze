'use client';
import { useState } from 'react';

const categories = [
  {
    name: 'Abia State',
    images: ['/assets/imgs/works/grid/1.jpg', '/assets/imgs/works/grid/5.jpg','/assets/imgs/works/grid/3.jpg','/assets/imgs/works/grid/2.jpg','/assets/imgs/works/grid/4.jpg','/assets/imgs/works/grid/5.jpg','/assets/imgs/works/grid/6.jpg'],
    text: 'Abia is a cultural and commercial hub, with Umuahia&apos;s history and Aba&apos;s entrepreneurial energy. The state is rich in traditional music, dance, and festivals.',
    videos: [], // Add video URLs here if applicable
  },
  {
    name: 'Akwa Ibom State',
    images: ['/assets/imgs/works/grid/1.jpg', '/assets/imgs/works/grid/1.jpg'],
    text: 'Akwa Ibom is famous for its beautiful beaches, rich cuisine, and oil reserves, home to the Ibibio, Annang, and Oron people. Its capital, Uyo, blends modernity with cultural heritage.',
    videos: [], // Add video URLs here if applicable
  },
  {
    name: 'Bayelsa State',
    images: ['/assets/imgs/works/grid/5.jpg', '/assets/imgs/works/grid/5.jpg'],
    text: 'Bayelsa, rich in oil resources, is a small but wealthy state dominated by the Ijaw people. Its capital, Yenagoa, is a peaceful city surrounded by scenic waterways.',
    videos: [
      'https://www.youtube.com/embed/example1',
      'https://www.youtube.com/embed/example2',
    ], // Example video URLs
  },
  {
    name: 'Cross River State',
    images: ['/assets/imgs/works/grid/1.jpg', '/assets/imgs/works/grid/5.jpg'],
    text: 'Cross River is known for its stunning Obudu Mountain Resort, lush rainforests, and vibrant Calabar carnival. The Efik people enrich the state&apos;s cultural heritage with their traditions.',
    videos: [], // Add video URLs here if applicable
  },
  {
    name: 'Delta State',
    images: ['/assets/imgs/works/grid/1.jpg', '/assets/imgs/works/grid/1.jpg'],
    text: 'Delta, a resource-rich state, is home to the Urhobo, Itsekiri, Ijaw, and Isoko peoples. Its capital, Asaba, shines with charm, blending cultural festivals and oil wealth.',
    videos: [], // Add video URLs here if applicable
  },
  {
    name: 'Edo State',
    images: ['/assets/imgs/works/grid/5.jpg', '/assets/imgs/works/grid/5.jpg'],
    text: 'Edo, home to the ancient Benin Kingdom, features Benin City as a hub of art and culture, famed for bronze works and rich traditions.',
    videos: [
      'https://www.youtube.com/embed/example1',
      'https://www.youtube.com/embed/example2',
    ], // Example video URLs
  },
  {
    name: 'Imo State',
    images: ['/assets/imgs/works/grid/1.jpg', '/assets/imgs/works/grid/5.jpg'],
    text: 'Imo, the heart of Igbo culture, features lively Owerri, vibrant festivals, and scenic landscapes that celebrate Igbo heritage.',
    videos: [], // Add video URLs here if applicable
  },
  {
    name: ' Ondo State',
    images: ['/assets/imgs/works/grid/1.jpg', '/assets/imgs/works/grid/1.jpg'],
    text: ' Ondo, rich in cocoa, combines Akure’s energy with rolling hills and Yoruba traditions, creating a haven for explorers.',
    videos: [], // Add video URLs here if applicable
  },
  {
    name: 'Rivers State',
    images: ['/assets/imgs/works/grid/5.jpg', '/assets/imgs/works/grid/5.jpg'],
    text: 'Rivers State, Nigeria’s oil hub, blends Port Harcourt’s energy with rich Ijaw, Ikwerre, and Ogoni cultures.',
    videos: [
      'https://www.youtube.com/embed/example1',
      'https://www.youtube.com/embed/example2',
    ], // Example video URLs
  },
];

function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleBackClick = () => {
    setSelectedCategory(null);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setSelectedVideo(null);
  };

  return (
    <section className="portfolio-section mb-30">
      <div className="container">
        {!selectedCategory ? (
          // Render the category grid
          <div className="row">
            {categories.map((category, index) => (
              <div key={index} className="col-lg-4 mb-4">
                <div
                  className="category-item"
                  onClick={() => handleCategoryClick(category)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="item mb-20 position-relative">
                    <div className="img">
                      <img src={category.images[0]} alt={category.name} />
                    </div>
                    <div className="cont d-flex align-items-center overlay">
                      <div className="d-flex align-items-center">
                        <span className="p-color mb-5 sub-title">{category.name}</span>
                        <a>
                          <span className="ti-arrow-top-right ml-10"></span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <p>{category.text}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Render the selected category view
          <div className="selected-category">
          <button className="btn text-white bg-black mb-4" onClick={handleBackClick}>
            <a>
              <span className="bnn ti-arrow-left"></span>
            </a>
          </button>
          <h3 className="mb-4">{selectedCategory.name}</h3>
          <div className="gallery-grid">
            {selectedCategory.images.slice(1).map((image, index) => (
              <div
                key={index + 1}
                className="gallery-item"
                onClick={() => handleImageClick(image)}
                style={{ cursor: 'pointer' }}
              >
                <img
                  src={image}
                  alt={`Image ${index + 1}`}
                  className="hover-effect"
                />
              </div>
            ))}
        
            {selectedCategory.videos &&
              selectedCategory.videos.map((video, index) => (
                <div
                  key={index}
                  className="gallery-item"
                  onClick={() => handleVideoClick(video)}
                  style={{ cursor: 'pointer' }}
                >
                  <iframe
                    width="100%"
                    height="100%"
                    src={video}
                    title={`${selectedCategory.name} Video ${index + 1}`}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    className="hover-effect"
                  ></iframe>
                </div>
              ))}
          </div>
        
                  {selectedImage && (
                    <>
                      <div className="modal-overlay" onClick={closeModal}>
                      <button className="close-btn" onClick={closeModal}>
                            X
                          </button>
                      </div>
                      <div className="modal">
                        <div className="modal-content">
                       
                          <img src={selectedImage} alt="Selected" />
                        </div>
                      </div>
                    </>
                  )}
                
                  {/* Modal for full-screen video */}
                  {selectedVideo && (
                    <>
                      <div className="modal-overlay" onClick={closeModal}></div>
                      <div className="modal">
                        <div className="modal-content">
                          <button className="close-btn" onClick={closeModal}>
                            X
                          </button>
                          <iframe
                            width="100%"
                            height="100%"
                            src={selectedVideo}
                            title="Selected Video"
                            frameBorder="0"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                          ></iframe>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
        );
        <style jsx>{`
          .gallery-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 16px;
          }
        
          .gallery-item {
            position: relative;
            overflow: hidden;
          }
        
          .gallery-item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
          }
        
          .hover-effect {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
        
          .hover-effect:hover {
            transform: scale(1.05);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
          }
        
          .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.6);
            z-index: 1000;
          }
        
          .modal {
            position: fixed;
            top: 55%;
            left: 50%;
            max-width: 90%;
            max-height: 90%;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
            transform: translate(-50%, -50%);
          }
        
          .modal-content {
            position: relative;
            width: auto;
            height: auto;
            overflow: hidden;
            background-color: white;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
          }
        
          .modal-content img {
            width: auto;
            height: auto;
          }
        
          .close-btn {
  position: absolute;
  top: 15%;
  right: 1%;
  background-color: rgba(0, 0, 0, 0.8); /* Slightly darker for better visibility */
  color: white;
  border: none;
  padding: 6px 12px;
  font-size: 18px;
  cursor: pointer;
  z-index: 1050; /* Ensure it's on top of other elements */
  border-radius: 4px; /* Optional: Rounded edges */
}

.close-btn:hover {
  background-color: rgba(255, 255, 255, 0.8); /* Hover effect */
  color: black;
}

        `}</style>
        
    </section>
  );
}

export default Portfolio;

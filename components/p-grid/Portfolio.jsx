"use client";


import initIsotope from '@/common/initIsotope';
import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function Portfolio() {
  useEffect(() => {
    initIsotope();
  }, []);

  const [modalData, setModalData] = useState({}); // Stores modal content
  const [showModal, setShowModal] = useState(false); // Modal visibility

  const handleCardClick = (data) => {
    setModalData(data);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  const cards = [
    {
      img: 'https://res.cloudinary.com/dnbnev9lr/image/upload/v1737028579/New_Project_37_j6n1kz.png ',
      name: 'Dr. Alex Otti',
      title: 'Governor (Abia State)',
      description: 'A seasoned economist and former banker, Dr. Otti has brought a reformist vision to Abia since assuming office in 2023. His leadership is centered on revitalizing infrastructure and education, paving the way for sustainable growth. '
    },
    {
      img: 'https://res.cloudinary.com/dnbnev9lr/image/upload/v1737028628/New_Project_29_re7knq.png',
      name: 'Pst. Umo Eno',
      title: 'Governor (Akwa Ibom State)',
      description: 'With a strong business background, Umo Eno became governor in 2023. His administration is focused on economic diversification and infrastructural development, making Akwa Ibom a beacon of progress. '
    },
    {
      img: 'https://res.cloudinary.com/dnbnev9lr/image/upload/v1737028612/New_Project_33_hfvqly.png',
      name: 'Gov. Douye Diri',
      title: 'Governor (Bayelsa State)',
      description: ' Elected in 2020, Governor Diri is a staunch advocate for development despite the challenges posed by Bayelsa unique terrain. His priorities include boosting security, education, and infrastructure to uplift his state '
    },
    {
      img: 'https://res.cloudinary.com/dnbnev9lr/image/upload/v1737028585/New_Project_35_anpqha.png',
      name: 'Gov. Bassey Otu',
      title: 'Governor (Cross River State)',
      description: 'Governor Bassey Otu took office in 2023, bringing a focus on tourism and industrial growth. With a commitment to preserving the states natural beauty, his leadership seeks to unlock Cross River’s potential as an eco-tourism hub '
    },
    {
      img: 'https://res.cloudinary.com/dnbnev9lr/image/upload/v1737028624/New_Project_30_smcwih.png',
      name: 'Gov. Sheriff Oborevwori',
      title: 'Governor (Delta State)',
      description: 'Elected in 2023, Sheriff Oborevwori is known for his grassroots connection to the people. His administration focuses on enhancing education, healthcare, and economic policies to ensure equitable development across Delta '
    },
    {
      img: ' https://res.cloudinary.com/dnbnev9lr/image/upload/v1737028632/New_Project_32_fmqudj.png',
      name: 'Gov. Godwin Obaseki',
      title: 'Governor (Edo State)',
      description: ' Governor Obaseki, in office since 2016, is a visionary leader driving Edo’s transformation through investments in agriculture, technology, and education. His modernization agenda has positioned Edo as a hub of innovation'
    },
    {
      img: ' https://res.cloudinary.com/dnbnev9lr/image/upload/v1737028587/New_Project_36_oxeygi.png',
      name: 'Gov. Hope Uzodinma',
      title: 'Governor (Imo State)',
      description: ' Governor Uzodinma has been leading Imo since 2020. His tenure has been marked by a push for infrastructural development, youth empowerment, and enhanced security measures to create a thriving state'
    },
    {
      img: 'https://res.cloudinary.com/dnbnev9lr/image/upload/v1737028620/New_Project_31_czo98g.png',
      name: 'Gov. Lucky Aiyeda',
      title: 'Governor (Ondo State)',
      description: 'A legal luminary turned politician, Governor Akeredolu has been at the helm since 2017. His focus on infrastructure and industrial growth has made Ondo a more competitive player in Nigeria’s economy '
    },
    {
      img: 'https://res.cloudinary.com/dnbnev9lr/image/upload/v1737028607/New_Project_34_schpts.png',
      name: 'Gov. Siminalayi Fubara',
      title: 'Governor (Rivers State)',
      description: ' Sworn in 2023, Governor Siminalayi Fubara is building on Rivers’ legacy as an industrial giant. His agenda centers on sustainable development, urban renewal, and fostering partnerships for economic growth. The Niger Delta thrives under the leadership of these dynamic governors, who are working tirelessly to harness the region’s potential and celebrate its rich heritage. '
    }
  ];

  return (
    <section className="work-grid section-padding pb-0">
      <div className="container">
        <div className="gallery row md-marg">
          {cards.map((card, index) => (
            <div
              className="col-lg-4 col-md-6 items design designs"
              key={index}
              onClick={() => handleCardClick(card)}
              style={{ cursor: 'pointer' }}
            >
              <div className="item mb-50 position-relative">
                <div className="img">
                  <img src={card.img} alt={card.name} />
                </div>
                <div className="cont d-flex align-items-center overlay">
                  <div>
                  <h6> {card.name}</h6>
                    <span className="p-color mb-5 sub-title">{card.title}</span>

                  </div>
                  <div>
                    <span className="ti-arrow-top-right"></span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Modal
        show={showModal}
        onHide={closeModal}
        centered
        dialogClassName="custom-modal"
        
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ color: 'black' }}>{modalData.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={modalData.img}
            alt={modalData.name}
            style={{
              width: '80%',
              height: 'auto',
              display: 'block',
              margin: '0 auto 15px',
            }}
          />
         
          <h6 style={{ color: 'black', paddingBottom:'6px', paddingTop:'6px' }}>{modalData.title}</h6>
          <p style={{ color: 'black', fontSize:'14px' }}>{modalData.description}</p>
        </Modal.Body>
      </Modal>
    </section>
  );
}

export default Portfolio;

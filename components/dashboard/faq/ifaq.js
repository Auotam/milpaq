import React, { useState } from 'react';

const Ifaq = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const handleToggle = (faqIndex) => {
    setOpenFaq(openFaq === faqIndex ? null : faqIndex);
  };

  return (
    <div className='main-wrapper'>
      <section id="faqs-2" className="gr--whitesmoke pb-30 mt-10 faqs-section division">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-11 col-xl-10">
              <div className="inner-page-title">
                <h2 className="s-52 w-700">Questions &amp; Answers</h2>
                <p className="p-lg">Some common questions we get about Martex</p>
              </div>
              <section className="faq-section">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6 offset-md-3"></div>
                    <div className="col-md-12">
                      <div className="faq" id="accordion">
                        {[...Array(7)].map((_, i) => (
                          <div className="card" key={i}>
                            <div className="card-header" id={`faqHeading-${i+1}`}>
                              <div className="mb-0">
                                <h5 className="faq-title" onClick={() => handleToggle(i + 1)} style={{ cursor: 'pointer' }}>
                                  <span className="badge">{i + 1}</span> {getFaqTitle(i + 1)}
                                </h5>
                              </div>
                            </div>
                            <div id={`faqCollapse-${i+1}`} className={`collapse ${openFaq === i + 1 ? 'show' : ''}`} aria-labelledby={`faqHeading-${i+1}`} data-parent="#accordion">
                              <div className="card-body">
                                <p>{getFaqContent(i + 1)}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const getFaqTitle = (index) => {
  const titles = [
    'What is Lorem Ipsum?',
    'Where does it come from?',
    'Why do we use it?',
    'Where can I get some?',
    'What is Lorem Ipsum?',
    'Where does it come from?',
    'Why do we use it?',
  ];
  return titles[index - 1];
};

const getFaqContent = (index) => {
  const contents = [
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
    'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here.\'',
    'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.',
    'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
    'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
  ];
  return contents[index - 1];
};

export default Ifaq;

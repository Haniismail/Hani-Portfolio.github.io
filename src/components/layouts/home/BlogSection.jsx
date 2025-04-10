import React, { Component } from 'react';

class BlogSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [
        {
          id: 1,
          title: 'Getting Started with React Hooks',
          excerpt: 'Learn how to use React Hooks to simplify your functional components and manage state effectively.',
          date: 'June 15, 2023',
          category: 'React',
          image: 'images/blog/blog1.jpg',
          link: 'https://medium.com/@haniismail'
        },
        {
          id: 2,
          title: 'Building RESTful APIs with Node.js and Express',
          excerpt: 'A comprehensive guide to creating robust and scalable RESTful APIs using Node.js and Express.',
          date: 'May 22, 2023',
          category: 'Backend',
          image: 'images/blog/blog2.jpg',
          link: 'https://medium.com/@haniismail'
        },
        {
          id: 3,
          title: 'Introduction to TypeScript for JavaScript Developers',
          excerpt: 'Discover how TypeScript can enhance your JavaScript development with static typing and advanced features.',
          date: 'April 10, 2023',
          category: 'TypeScript',
          image: 'images/blog/blog3.jpg',
          link: 'https://medium.com/@haniismail'
        }
      ]
    };
  }

  render() {
    const { articles } = this.state;

    return (
      <div className="tf-modal-content">
        <section className="blog-section position-relative" id="blog">
          <div className="container">
            <div className="row">
              <div className="col-md-12 animate-element wow delay5 fadeInDown">
                <div className="flat-title t2 text-center">
                  <h4 className="sub-title mg-b22">My Blog</h4>
                  <h2 className="title-section color-d12 mg-b41">
                    Latest Articles
                  </h2>
                </div>
              </div>
            </div>

            <div className="row">
              {articles.map((article) => (
                <div className="col-md-4 mb-4" key={article.id}>
                  <div className="blog-card">
                    <div className="blog-image">
                      <div className="blog-category">{article.category}</div>
                      <img src={article.image} alt={article.title} />
                    </div>
                    <div className="blog-content">
                      <div className="blog-date">{article.date}</div>
                      <h3 className="blog-title">{article.title}</h3>
                      <p className="blog-excerpt">{article.excerpt}</p>
                      <a href={article.link} target="_blank" rel="noreferrer" className="blog-link">
                        Read More <i className="fa fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="row mt-5">
              <div className="col-md-12 text-center">
                <a href="https://medium.com/@haniismail" target="_blank" rel="noreferrer" className="view-all-link">
                  View All Articles <i className="fa fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default BlogSection;

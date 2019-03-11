import React from "react";
import Layout from "../components/layout";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";

export default function({ data }) {
  const { title, price } = data.contentfulProduct;
  const { description } = data.contentfulProduct.description;
  const { fluid } = data.contentfulProduct.image;
  return (
    <Layout>
      <div className="card">
        <div className="row no-gutters">
          <aside className="col-sm-5 border-right">
            <article className="gallery-wrap">
              <div className="img-big-wrap">
                <Img fluid={fluid} />
              </div>
              <div className="img-small-wrap">
                <div className="item-gallery" />
              </div>
            </article>
          </aside>
          {/* Right Detail */}
          <aside className="col-sm-7">
            <article className="p-5">
              <h3 className="title mb-3" style={{ color: "red" }}>
                {title}
              </h3>
              <div className="mb-3">
                <var className="price h3 text-warning">
                  <span className="currency">US $</span>
                  <span className="num">{price}</span>
                </var>
                <span>/per kg</span>
              </div>
              {/* <!-- price-detail-wrap .// --> */}
              <dl>
                <dt>Description</dt>
                <dd>
                  <p>{description}</p>
                </dd>
              </dl>
              <dl className="row">
                <dt className="col-sm-3">Model#</dt>
                <dd className="col-sm-9">12345611</dd>

                <dt className="col-sm-3">Color</dt>
                <dd className="col-sm-9">Black and white </dd>

                <dt className="col-sm-3">Delivery</dt>
                <dd className="col-sm-9">Russia, USA, and Europe </dd>
              </dl>
              {/* <div className="rating-wrap">
                <ul className="rating-stars">
                  <li style={{ width: "80%" }} className="stars-active">
                    <i className="fa fa-star" /> <i className="fa fa-star" />
                    <i className="fa fa-star" /> <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star" /> <i className="fa fa-star" />
                    <i className="fa fa-star" /> <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </li>
                </ul>
                <div className="label-rating">132 reviews</div>
                <div className="label-rating">154 orders </div>
              </div> */}
              {/* <!-- rating-wrap.// --> */}
              <hr />
              <div className="row">
                <div className="col-sm-5">
                  <dl className="dlist-inline">
                    <dt>Quantity: </dt>
                    <dd>
                      <select
                        className="form-control form-control-sm"
                        style={{ width: "70px" }}
                      >
                        <option> 1 </option>
                        <option> 2 </option>
                        <option> 3 </option>
                      </select>
                    </dd>
                  </dl>
                </div>
                {/* <!-- col.// --> */}
              </div>
            </article>
          </aside>
        </div>
      </div>

      <Link to={`/products/`}>
        <h2>Go back to products</h2>
      </Link>
    </Layout>
  );
}

export const query = graphql`
  query($id: String!) {
    contentfulProduct(id: { eq: $id }) {
      title
      price
      description {
        description
      }
      image {
        fluid {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
  }
`;

import { Link } from 'react-router-dom';
function Product(props) {
  const { id, title, price, thumbnail } = props;
  const thumbnailsrc = "/pictures/"+thumbnail;
  const url = "/product/"+id;
  return (
    <div className="col">
       <Link to={url}><div className="card shadow-sm">
       <img className="bd-placeholder-img card-img-top" src={thumbnailsrc} alt="" />
        <div className="card-body">
          <p className="card-title">{title}</p>
          <p className="card-text">{price}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button type="button" className="btn btn-sm btn-outline-secondary">Ajouter au panier</button>
            </div>
          </div>
        </div>
      </div></Link>
    </div>
  );
}
export default Product;
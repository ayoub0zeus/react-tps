
function Product(props) {
    const {data:{thumbnail},data:{title},data:{price}} =props
  return (
    <div className="col">
      <div className="card shadow-sm">
        <img className="bd-placeholder-img card-img-top"  src={thumbnail}/>
        <div className="card-body">
          <p className="card-title">{title}</p>
          <p className="card-text">{price}</p>
          <button className="btn btn-lg bg-warning ">Buy</button>
        </div>
      </div>
    </div>
  );
}
export default Product;

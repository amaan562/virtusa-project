import "../Styles/Product.css";
export default function Product({ item}) {
  let { Img, Title, Instructor,url} = item;
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return (
    
    <div className="product--main">
      <div className="product--img">
        <img src={Img} alt="vamshi" className="movie_img"/>
      </div>
      <div className="product--details">
        <p className="product--title">{Title}</p>
        <br></br>
        <p className="product--author"><b>Instructor:</b> <b>{Instructor}</b>
        <br></br>
        </p>
        <br></br>
        <div className="product--last">
           
          <div className="AddToCart" onClick={() => openInNewTab(url)}>Go To Course
          </div>
        </div>
      </div>
    </div>
  );
}
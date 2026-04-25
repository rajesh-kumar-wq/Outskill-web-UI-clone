import img1 from "../img/img.jpg";
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.jpg";
import img4 from "../img/img4.jpg";

export default function Gallery() {
  const images = [img1, img2, img3, img4];

  return (
    <div className="grid">
      {images.map((img, i) => (
        <img key={i} src={img} alt={`gallery-${i}`} className="hover-img" />
      ))}
    </div>
  );
}
import "../App.css";
import {Card} from "./Card";
const AllCards = () => {
    const Universidad = [{
        id:1,
        img: 'https://umg.edu.gt/miumg/sesion_files/logo_white.png',
        name: 'Universidad Mariano Gálvez',
        vision: 'Ser una institución de educación superior altamente competitiva, líder en su género, innovadora y creadora de conocimientos científicos y tecnológicos, en la que sus educandos alcancen una formación integral, armónica y potencien sus aptitudes y capacidades, en un ambiente de libertad y aceptación de los supremos',
      },
      {
        id:2,
        img: 'https://i0.wp.com/red-lei.org/wp-content/uploads/2018/08/uvg_logo.png?fit=544%2C289&ssl=1',
        name: 'Universidad del Valle de Guatemala',
        vision: 'Ser reconocida como una Universidad incluyente con altos estándares de calidad y excelencia, referente para el desarrollo regional y una de las mejores universidades de América Latina',
      },
      {
        id:3,
        img: 'https://cdn.goconqr.com/uploads/media/image/21704287/desktop_b8722fdf-6bab-4281-8e0d-716e5f999844.png',
        name: 'Universidad Panamericana',
        vision: 'Ser una opción de educación superior relevante a nivel nacional e internacional con calidad, principios y valores cristianos.',
      }];
  return (
    <div className="container">
    {Universidad.map((element) => (
       <Card  image={element.img} Nombre={element.name} vision={element.vision} key={element.id} />
       ))}
   </div>
  )
}

export default AllCards
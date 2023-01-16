import Carousel from 'react-bootstrap/Carousel';

export default function CarouselCustom() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="http://tilin.ir/vp1QJLM"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className="text-dark">welcome back!</h3>
          <p className="text-dark">
            start managing your finance faster and better
          </p>
          <p className="text-dark">
            start managing your finance faster and better
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="http://tilin.ir/vp1QJLM"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className="text-dark">welcome back!</h3>
          <p className="text-dark">
            start managing your finance faster and better
          </p>
          <p className="text-dark">
            start managing your finance faster and better
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="http://tilin.ir/vp1QJLM"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className="text-dark" >welcome back!</h3>
          <p className="text-dark">
            start managing your finance faster and better
          </p>
          <p className="text-dark">
            start managing your finance faster and better
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
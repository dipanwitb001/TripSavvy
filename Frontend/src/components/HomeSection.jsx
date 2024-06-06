import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';
import Mountain from '../images/Mountain.jpg';
import Sea from '../images/sea.jpg';
import Forest from '../images/forest.jpg';
import Button from './Button';

function HomeSection() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <ExampleCarouselImage text="First slide" image={Mountain}/>
        <Carousel.Caption className="absolute bottom-1/4 transform -translate-y-1/2 text-center">
          <p  className='mb-6 text-white font-serif font-bold text-4xl'>It’s not the mountain we conquer, <span className='text-yellow-400'>BUT</span> ourselves</p>
          <Button />
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <ExampleCarouselImage text="Second slide" image={Sea}/>
        <Carousel.Caption className="absolute bottom-1/4 transform -translate-y-1/2 text-center">
          <p className='mb-6 text-white font-serif font-bold text-4xl'>Smell the sea and feel the sky. <span className='text-yellow-500'>LET</span> your soul and spirit fly.</p>
          <Button />
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <ExampleCarouselImage text="Third slide" image={Forest} />
        <Carousel.Caption className="absolute bottom-1/4 transform -translate-y-1/2 text-center">
          <p className='mb-6 text-white font-serif font-bold text-4xl'>Between every two pines is a doorway to a <span className='text-yellow-500'>NEW</span> world</p>
          <Button />
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeSection;


// className="absolute bottom-1/4 transform -translate-y-1/2 text-center" explaintion

/*
let's break down the Tailwind CSS utility classes used in className="absolute bottom-1/4 transform -translate-y-1/2 text-center":

1. absolute
Description: This utility sets the element's position to absolute.
Effect: When an element is positioned absolutely, it is removed from the normal document flow and positioned relative to the nearest positioned ancestor (an ancestor with a position other than static) or the initial containing block if no positioned ancestors exist.
2. bottom-1/4
Description: This utility sets the bottom offset of the element to 25% of its containing block’s height.
Effect: Moves the element up from the bottom by 25% of the height of its containing block. This means the bottom edge of the element is positioned at 25% of the height of its parent container.
3. transform
Description: This utility enables transformations on the element, such as translation, rotation, scaling, etc.
Effect: Allows the element to use transform functions like translate, rotate, scale, etc. It essentially enables the subsequent transform utilities like -translate-y-1/2 to be applied.
4. -translate-y-1/2
Description: This utility translates (moves) the element along the Y-axis by 50% of its own height in the negative direction.
Effect: Moves the element up by 50% of its own height. Combined with the bottom-1/4 utility, this ensures that the element is vertically centered relative to the bottom-1/4 position, meaning the element's center will be at 25% of the parent's height.
5. text-center
Description: This utility centers the text within the element horizontally.
Effect: Ensures that the text inside the element is centered horizontally. This is useful for ensuring that any text content within the element is centered.
How These Classes Work Together
absolute: Positions the element absolutely within its nearest positioned ancestor.
bottom-1/4: Moves the element 25% up from the bottom of its containing block.
transform: Enables the use of transform utilities.
-translate-y-1/2: Further moves the element up by 50% of its own height, effectively centering it vertically relative to the bottom-1/4 position.
text-center: Centers any text within the element horizontally.
Visual Representation
Absolute Positioning (absolute): The element is positioned absolutely within its container.
Bottom Offset (bottom-1/4): The bottom edge of the element is positioned at 25% height of the container.
Vertical Translation (-translate-y-1/2): The element is moved up by 50% of its own height, centering it relative to the bottom-1/4 position.
Text Centering (text-center): The text inside the element is centered horizontally.
*/ 
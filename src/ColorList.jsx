import SingleColor from './SingleColor';
import { nanoid } from 'nanoid';

// colors: array of { hex, weight, ... } from values.js (one item per tint/shade step)
const ColorList = ({ colors }) => {
  return (
    <section className='colors'>
      {/* key must be unique and stable; nanoid() generates a new id per item. index is passed for SingleColor to decide light/dark text. */}
      {colors.map((color, index) => {
        return <SingleColor key={nanoid()} color={color} index={index} />;
      })}
    </section>
  );
};
export default ColorList;

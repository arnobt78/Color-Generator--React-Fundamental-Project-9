import { useState } from 'react';

// addColor: callback from App to submit the current hex and generate a new palette
const Form = ({ addColor }) => {
  // Local state for the current input; both color picker and text input stay in sync via this single state
  const [color, setColor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(color);
  };

  return (
    <section className='container'>
      <h4>color generator</h4>
      <form className='color-form' onSubmit={handleSubmit}>
        {/* type="color" gives a native color picker; value/onChange make it controlled by React state */}
        <input
          type='color'
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        {/* Text input for hex (e.g. #f15025); same value/onChange so both inputs always match */}
        <input
          type='text'
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder='#f15025'
        />
        <button className='btn' type='submit' style={{ background: color }}>
          submit
        </button>
      </form>
    </section>
  );
};
export default Form;

import ColorList from './ColorList';
import Form from './Form';
import Values from 'values.js';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  // Initial state: default palette from #f15025 with 10% steps (tints + shades). all(10) returns an array of color objects.
  const [colors, setColors] = useState(new Values('#f15025').all(10));

  // Lifted state updater: Form calls this with the user's hex. values.js throws on invalid hex (e.g. "red", "#ggg").
  const addColor = (color) => {
    try {
      const newColors = new Values(color).all(10);
      setColors(newColors);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <main>
      <Form addColor={addColor} />
      <ColorList colors={colors} />
      {/* ToastContainer must be rendered once (e.g. at root) for toasts to appear; position controls where they show */}
      <ToastContainer position='top-center' />
    </main>
  );
};
export default App;

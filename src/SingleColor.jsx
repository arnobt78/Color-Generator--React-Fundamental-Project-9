import { toast } from 'react-toastify';

// index: position in the palette (used to toggle light text for lighter tints). color: { hex, weight, ... } from values.js
const SingleColor = ({ index, color }) => {
  const { hex, weight } = color;

  // Clipboard API is async; requires secure context (HTTPS or localhost). We check availability before use.
  const saveToClipboard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success('Color copied to clipboard');
      } catch {
        toast.error('Failed to copy color to clipboard');
      }
    } else {
      toast.error('Clipboard access not available');
    }
  };

  return (
    <article
      // index > 10: lighter tints; color-light applies white text for contrast. Darker shades use default dark text.
      className={index > 10 ? 'color color-light' : 'color'}
      style={{ background: `#${hex}` }}
      onClick={saveToClipboard}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>#{hex}</p>
    </article>
  );
};
export default SingleColor;

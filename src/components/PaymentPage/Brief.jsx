import "./Brief.scss";

export default function Brief() {
  return (
    <div className="brief">
      <p className="brief__title">Amount due</p>

      <div className='brief__reminder'>
        <p className='brief__reminder-note'>Please pay by <span className='brief__reminder-note-date'>Oct 24, 2024</span></p>
        <p className='brief__reminder-amount'>$100</p>
      </div>

      <div className="brief__redirections">
        <p className="brief__redirections-bill">View detailed bill ↓</p>
      </div>
    </div>
  );
}

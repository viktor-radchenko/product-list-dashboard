import './Stats.scss';

export const Stats = ({ total, deleted, toggleTabs }) => {
  return (
    <ul className="tabs">
      <li className="tabs__item">
        <button className="tabs__btn btn" type="button" onClick={() => toggleTabs(false)}>
          Total: {total}
        </button>
      </li>
      <li className="tabs__item">
        <button className="tabs__btn btn" type="button" onClick={() => toggleTabs(true)}>
          Deleted: {deleted}
        </button>
      </li>
    </ul>
  );
};

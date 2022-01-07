import './Stats.scss';

export const Stats = ({ total, deleted, toggleTabs }) => {
  return (
    <div className="tabs">
      <div className="">Show:</div>
      <select name="" id="" onChange={toggleTabs}>
        <option value="all">{`All (${total})`}</option>
        <option value="deleted">{`Deleted (${deleted})`}</option>
      </select>
    </div>
  );
};
